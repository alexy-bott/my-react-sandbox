import {mkdir, rm, writeFile} from 'node:fs/promises'
import {dirname, join, resolve, extname, relative} from 'node:path'
import {createInterface} from 'node:readline/promises'
import {fileURLToPath} from 'node:url'

const templates = [
  {group: 'components', title: 'Создание компонента', file: 'Component.tsx'},
  {group: 'hooks', title: 'Хук с демонстрацией в UI', file: 'HookTask.tsx', demo: true},
  {group: 'hooks', title: 'Хук без отдельной UI-демонстрации', file: 'useExample.ts'},
  {group: 'review', title: 'Ревью кода', file: 'Component.tsx'},
  {group: 'review', title: 'Исправление поведения компонента', file: 'Component.tsx'},
  {group: 'js-basics', title: 'JavaScript в консоли', file: 'index.js'},
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

async function main() {
  const input = createInterface({input: process.stdin, output: process.stdout})
  const lines = input[Symbol.asyncIterator]()
  async function ask(prompt) {
    process.stdout.write(prompt + '\n> ')
    const line = await lines.next()
    if (line.done) throw new Error('Ввод завершён до создания задачи.')
    return line.value.trim()
  }

  try {
    let title = ''
    while (!title) title = await ask('Название задачи')

    templates.forEach((template, i) => console.log(`${i + 1}. ${template.title}`))
    let template
    while (!template) {
      const choice = await ask('Номер шаблона')
      if (/^[1-6]$/.test(choice)) template = templates[Number(choice) - 1]
    }

    let separateDemo = false
    if (template.demo) {
      let choice
      do {
        choice = await ask('Демонстрация: Enter — рядом с хуком, 2 — отдельный Demo.tsx')
      } while (!['', '1', '2'].includes(choice))
      separateDemo = choice === '2'
    }

    const suggestedFile = separateDemo ? 'useExample.ts' : template.file
    let fileName
    while (!fileName) {
      const name = (await ask(`Рабочий файл [${suggestedFile}]`)) || suggestedFile
      if (/^[\p{L}\p{N}_-][\p{L}\p{N}_.-]*\.[a-z0-9]+$/iu.test(name) &&
          !/^(con|prn|aux|nul|com[1-9]|lpt[1-9]|solution)\./i.test(name) &&
          !/^(task|hint)\.md$/i.test(name) && !(separateDemo && /^demo\.tsx$/i.test(name))) {
        fileName = name
      } else {
        console.log('Введите имя с расширением, которое не занято шаблоном.')
      }
    }

    const suggested = join(tasksRoot, template.group, createSlug(title))
    const choice = await ask(`Папка новой задачи [${relative(projectRoot, suggested)}]. Можно указать свой путь.`)
    const base = choice ? resolve(projectRoot, choice) : suggested
    await mkdir(dirname(base), {recursive: true})
    let directory = base
    let suffix = 2
    while (true) {
      try {
        await mkdir(directory)
        break
      } catch (error) {
        if (error.code !== 'EEXIST') throw error
        if (choice) throw new Error(`Путь уже занят: ${directory}. Выберите новую папку.`)
        directory = base + '-' + suffix++
      }
    }

    const solution = 'solution' + extname(fileName)
    try {
      await mkdir(join(directory, 'starter'))
      const files = [fileName, join('starter', fileName), solution]
      if (separateDemo) files.push('Demo.tsx')
      for (const file of files) await writeFile(join(directory, file), '', {flag: 'wx'})
      const sections = [
        '# ' + title, '**' + template.title + '**',
        'Открой [' + fileName + '](./' + fileName + ').',
        '## Задание', '## Как проверить',
      ]
      if (separateDemo) sections.push('Демонстрация — [Demo.tsx](./Demo.tsx).')
      sections.push('После самостоятельной работы сравни с [решением](./' + solution + '). Для новой попытки возьми [стартовую копию](./starter/' + fileName + ').')
      await writeFile(join(directory, 'task.md'), sections.join('\n\n') + '\n', {flag:'wx'})
    } catch (error) {
      await rm(directory, {recursive: true, force: true})
      throw error
    }
    console.log('Создан черновик: ' + join(directory, 'task.md'))
    console.log('Заполни условие и рабочий файл, обнови starter/ и подготовь ответ. Готовую задачу можно подключить к каталогу.')
  } finally {
    input.close()
  }
}

main().catch(error => {
  console.error('Ошибка: ' + error.message)
  process.exitCode = 1
})
