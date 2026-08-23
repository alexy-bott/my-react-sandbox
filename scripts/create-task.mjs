import {access, mkdir, readFile, rename, rm, writeFile} from 'node:fs/promises'
import {dirname, join, resolve} from 'node:path'
import {createInterface} from 'node:readline/promises'
import {fileURLToPath} from 'node:url'

const IMPORTS_ANCHOR = '// task:new imports'
const ENTRIES_ANCHOR = '  // task:new entries'

const CATEGORIES = [
  {id: 'components', title: 'Компоненты и интерфейс'},
  {id: 'hooks', title: 'Хуки'},
  {id: 'review', title: 'Разбор и рефакторинг'},
  {id: 'other', title: 'Разное'},
]

const TRANSLITERATION = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')
const tasksRoot = join(projectRoot, 'src', 'tasks')
const registryPath = join(tasksRoot, 'index.ts')

function countOccurrences(source, value) {
  return source.split(value).length - 1
}

function validateRegistry(registrySource) {
  const tasksDeclaration = 'export const tasks: Task[] = ['
  const importsAnchorIndex = registrySource.indexOf(IMPORTS_ANCHOR)
  const tasksDeclarationIndex = registrySource.indexOf(tasksDeclaration)
  const entriesAnchorIndex = registrySource.indexOf(ENTRIES_ANCHOR)
  const tasksArrayClosingIndex = registrySource.indexOf('\n]', entriesAnchorIndex)

  const hasExpectedStructure =
    countOccurrences(registrySource, IMPORTS_ANCHOR) === 1 &&
    countOccurrences(registrySource, ENTRIES_ANCHOR) === 1 &&
    countOccurrences(registrySource, tasksDeclaration) === 1 &&
    importsAnchorIndex < tasksDeclarationIndex &&
    entriesAnchorIndex > tasksDeclarationIndex &&
    tasksArrayClosingIndex > entriesAnchorIndex

  if (!hasExpectedStructure) {
    throw new Error(
      'Не удалось обновить src/tasks/index.ts: не найдены ожидаемые task:new anchors.',
    )
  }
}

function createSlug(title) {
  const normalizedTitle = title
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll('ай', 'ai')
    .replaceAll('ий', 'iy')
    .replaceAll('ый', 'yi')

  const transliteratedTitle = [...normalizedTitle]
    .map((character) => TRANSLITERATION[character] ?? character)
    .join('')

  return (
    transliteratedTitle
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'task'
  )
}

function createComponentName(id) {
  const pascalCaseName = id
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('')
  const safeName = /^[A-Za-z_$]/.test(pascalCaseName) ? pascalCaseName : `Task${pascalCaseName}`

  return `${safeName}Task`
}

async function pathExists(path) {
  try {
    await access(path)
    return true
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false
    }

    throw error
  }
}

async function createAvailableId(title, registrySource) {
  const baseId = createSlug(title)
  let id = baseId
  let suffix = 2

  while (
    (await pathExists(join(tasksRoot, id))) ||
    registrySource.includes(`id: '${id}'`) ||
    registrySource.includes(`id: "${id}"`)
  ) {
    id = `${baseId}-${suffix}`
    suffix += 1
  }

  return id
}

async function askTitle(readline) {
  while (true) {
    const title = (await readline.question('Название задачи:\n> ')).trim()

    if (title) {
      return title
    }

    console.log('Введите название задачи.\n')
  }
}

async function askCategory(readline) {
  console.log('Категория:')
  CATEGORIES.forEach((category, index) => {
    console.log(`${index + 1}. ${category.title}`)
  })

  while (true) {
    const answer = (await readline.question('\nВыберите категорию [4]:\n> ')).trim()

    if (!answer) {
      return 'other'
    }

    const category = CATEGORIES[Number(answer) - 1]

    if (category && String(Number(answer)) === answer) {
      return category.id
    }

    console.log('Выберите номер от 1 до 4.')
  }
}

function createRegistrySource(registrySource, {id, title, componentName, category}) {
  const newline = registrySource.includes('\r\n') ? '\r\n' : '\n'
  const taskImport = `import {${componentName}} from './${id}/active'${newline}`
  const taskEntry = [
    '  {',
    `    id: '${id}',`,
    `    title: ${JSON.stringify(title)},`,
    `    component: ${componentName},`,
    `    category: '${category}',`,
    '  },',
    '',
  ].join(newline)

  return registrySource
    .replace(IMPORTS_ANCHOR, `${taskImport}${IMPORTS_ANCHOR}`)
    .replace(ENTRIES_ANCHOR, `${taskEntry}${ENTRIES_ANCHOR}`)
}

async function createTaskFiles({id, title, componentName, registrySource, category}) {
  const taskDirectory = join(tasksRoot, id)
  const starterDirectory = join(taskDirectory, 'starter')
  const attemptsDirectory = join(taskDirectory, 'attempts')
  const currentDirectory = join(attemptsDirectory, 'current')
  const temporaryRegistryPath = `${registryPath}.task-new-${process.pid}.tmp`
  const componentFileName = `${componentName}.tsx`
  const taskSource = `# ${title}\n\n## Задание\n\nОпиши условие задачи здесь.\n`
  const attemptsReadmeSource = [
    '# Попытки',
    '',
    '- `current/` — здесь ты работаешь сейчас.',
    '- `YYYY-MM-DD/` — сюда можно сохранить готовое прохождение.',
    '- `../starter/` — отсюда можно восстановить чистый `current`.',
    '',
  ].join('\n')
  const componentSource = [
    `export function ${componentName}() {`,
    '  return (',
    '    <div className="task-card">',
    '      <p className="task-note">Добавь решение задачи.</p>',
    '    </div>',
    '  )',
    '}',
    '',
  ].join('\n')
  const activeSource = `export {${componentName}} from './attempts/current/${componentName}'\n`
  const updatedRegistrySource = createRegistrySource(registrySource, {
    id,
    title,
    componentName,
    category,
  })

  let taskDirectoryCreated = false

  try {
    await mkdir(taskDirectory)
    taskDirectoryCreated = true
    await Promise.all([mkdir(starterDirectory), mkdir(currentDirectory, {recursive: true})])
    await Promise.all([
      writeFile(join(taskDirectory, 'task.md'), taskSource, 'utf8'),
      writeFile(join(taskDirectory, 'active.ts'), activeSource, 'utf8'),
      writeFile(join(attemptsDirectory, 'README.md'), attemptsReadmeSource, 'utf8'),
      writeFile(join(starterDirectory, componentFileName), componentSource, 'utf8'),
      writeFile(join(currentDirectory, componentFileName), componentSource, 'utf8'),
    ])
    await writeFile(temporaryRegistryPath, updatedRegistrySource, 'utf8')
    await rename(temporaryRegistryPath, registryPath)
  } catch (error) {
    if (taskDirectoryCreated) {
      await rm(taskDirectory, {recursive: true, force: true})
    }

    await rm(temporaryRegistryPath, {force: true})
    throw error
  }
}

async function main() {
  const registrySource = await readFile(registryPath, 'utf8')
  validateRegistry(registrySource)

  const readline = createInterface({input: process.stdin, output: process.stdout})

  console.log('Создание новой задачи\n')

  let title
  let category

  try {
    title = await askTitle(readline)
    console.log()
    category = await askCategory(readline)
  } finally {
    readline.close()
  }

  const id = await createAvailableId(title, registrySource)
  const componentName = createComponentName(id)

  await createTaskFiles({id, title, componentName, registrySource, category})

  console.log(`\nЗадача создана:\nsrc/tasks/${id}/\n\nОткрой task.md и добавь условие.`)
}

main().catch((error) => {
  console.error(`Ошибка: ${error.message}`)
  process.exitCode = 1
})
