# Работа с учебными задачами

`main` — чистая рабочая версия песочницы: инфраструктура, условия и стартовый код без пользовательских решений.

Все личные решения владельца хранятся в одной долгоживущей ветке `practice`. Отдельные ветки для задач и попыток не нужны.

## Структура

В `main` задача содержит только условие, стабильную точку входа и стартовый snapshot:

```text
src/tasks/<task-id>/
├── task.md
├── active.ts
└── starter/
    └── полный стартовый набор файлов
```

В practice-ветке рядом появляются попытки пользователя:

```text
src/tasks/<task-id>/
├── task.md
├── active.ts
├── starter/
└── attempts/
    ├── 2026-08-20/
    │   ├── полный набор файлов попытки
    │   └── solution.md
    └── 2026-11-15/
        └── ...
```

В чистом `main` каждый `active.ts` указывает на starter:

```ts
export {MyTask} from './starter/MyTask'
```

`src/tasks/index.ts` импортирует только `active.ts` и не знает о dated attempts.

## Первый запуск

```bash
git clone <repository-url>
cd my-react-sandbox
pnpm install
pnpm dev
```

Attempts для запуска `main` не нужны: все задачи открываются в стартовом состоянии.

## Личная рабочая ветка

Создай одну ветку для всех своих решений:

```bash
git switch -c practice
```

## Начало новой попытки

1. Создай `attempts/YYYY-MM-DD/` внутри выбранной задачи.
2. Скопируй туда полное содержимое `starter/`, сохранив имена и вложенность файлов.
3. Переключи `active.ts` на входной компонент новой attempt.
4. Работай непосредственно внутри attempt.

Пример для Git Bash:

```bash
mkdir -p src/tasks/<task-id>/attempts/YYYY-MM-DD
cp -R src/tasks/<task-id>/starter/. src/tasks/<task-id>/attempts/YYYY-MM-DD/
```

```ts
export {MyTask} from './attempts/YYYY-MM-DD/MyTask'
```

Если в один день начинается несколько попыток, добавь суффикс:

```text
2026-08-20-2
2026-08-20-resize-observer
```

Дата означает дату начала попытки.

## Завершение попытки

Attempt остаётся на месте — переносить или копировать её не нужно.

1. Проверь решение через `pnpm lint` и `pnpm build`.
2. Добавь в attempt файл `solution.md` с описанием подхода, последовательности, проблем и выводов.
3. Закоммить attempt и изменённый `active.ts` в своей practice-ветке.

```bash
git add src/tasks/<task-id>
git commit -m "Solve <task-id>"
```

## Повторное прохождение

Скопируй `starter/` в новую dated attempt и снова измени только путь в `active.ts`. Старые attempts остаются без изменений.

## Обновление из main

Изменения инфраструктуры и новые задачи добавляются в `main`. Подтяни их в личную ветку обычным merge:

```bash
git switch practice
git merge main
```

Attempts обычно не конфликтуют с main, потому что в main их нет. Чтобы снизить вероятность остальных конфликтов:

- не изменяй `starter/` в practice-ветке;
- не изменяй `src/tasks/index.ts` при начале новой attempt;
- в main не меняй существующий `active.ts` без необходимости после создания задачи.

Конфликт в `active.ts` возможен, только если main изменил точку входа той же задачи, пока practice-ветка указывает на attempt. При разрешении конфликта сохрани указатель practice-ветки на нужную attempt и при необходимости адаптируй его к новому имени входного компонента.

## Добавление задачи в main

Новая базовая задача содержит `task.md`, полный `starter/` и `active.ts`, указывающий на starter. Затем она один раз регистрируется в `src/tasks/index.ts`. Каталог `attempts/` в main не создаётся.
