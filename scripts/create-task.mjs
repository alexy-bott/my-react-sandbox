import {mkdir, rm, writeFile} from 'node:fs/promises'
import {dirname, join, resolve} from 'node:path'
import {createInterface} from 'node:readline/promises'
import {fileURLToPath} from 'node:url'

const CATEGORIES = [
  {id: 'components', title: 'Компоненты и интерфейс'},
  {id: 'hooks', title: 'Хуки'},
  {id: 'review', title: 'Разбор и рефакторинг'},
  {id: 'js-basics', title: 'JavaScript в консоли'},
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
    const answer = (await readline.question('\nВыберите раздел [4]:\n> ')).trim()

    if (!answer) {
      return 'js-basics'
    }

    const category = CATEGORIES[Number(answer) - 1]

    if (category && String(Number(answer)) === answer) {
      return category.id
    }

    console.log('Выберите номер от 1 до 4.')
  }
}

async function askFileName(readline) {
  while (true) {
    const name = (await readline.question('Имя рабочего файла (например, timer.js или useToggle.ts):\n> ')).trim()
    if (/^[\p{L}\p{N}_-][\p{L}\p{N}_.-]*\.[a-z0-9]+$/iu.test(name) &&
        !/^(con|prn|aux|nul|com[1-9]|lpt[1-9])\./i.test(name)) {
      return name
    }
    console.log('Введи имя с расширением без пути к папке.')
  }
}

async function main() {
  const readline = createInterface({input: process.stdin, output: process.stdout})
  let title
  let category
  let fileName
  try {
    title = await askTitle(readline)
    category = await askCategory(readline)
    fileName = await askFileName(readline)
  } finally {
    readline.close()
  }

  const slug = createSlug(title)
  let id = slug
  let suffix = 2
  const groupDirectory = join(tasksRoot, category)
  while (true) {
    try {
      await mkdir(join(groupDirectory, id))
      break
    } catch (error) {
      if (error.code !== 'EEXIST') throw error
      id = `${slug}-${suffix++}`
    }
  }
  const directory = join(groupDirectory, id)
  try {
    await mkdir(join(directory, 'starter'))
    await mkdir(join(directory, 'attempts/current'), {recursive: true})
    await writeFile(join(directory, 'task.md'), `# ${title}\n\n[Рабочий файл](./attempts/current/${fileName})\n`)
    await writeFile(join(directory, 'starter', fileName), '')
    await writeFile(join(directory, 'attempts/current', fileName), '')
  } catch (error) {
    await rm(directory, {recursive: true, force: true})
    throw error
  }
  console.log(`Создана заготовка: src/tasks/${category}/${id}/task.md`)
}

main().catch((error) => {
  console.error(`Ошибка: ${error.message}`)
  process.exitCode = 1
})
