# React + TypeScript Training Sandbox

Песочница для практики React и TypeScript на изолированных учебных задачах.

![Локальный вид песочницы с React-задачами](./docs/assets/sandbox-preview.png)

## Установка и запуск

```bash
git clone <repository-url>
cd my-react-sandbox
pnpm install
pnpm dev
```

## Ветки и учебные задачи

`main` — чистая базовая версия песочницы без личных решений. Личная работа владельца ведётся в одной постоянной ветке `practice`.

Каждая задача в `src/tasks/<task-id>/` содержит:

- `task.md` — условие;
- `starter/` — полный стартовый набор файлов;
- `active.ts` — стабильную точку входа задачи.

В `main` файл `active.ts` указывает на `starter`, поэтому проект работает без каталога `attempts/`.

В ветке `practice` новая попытка начинается так:

```text
starter/ → attempts/YYYY-MM-DD/ → active.ts
```

Работа ведётся непосредственно в каталоге attempt. После завершения он остаётся на месте; при необходимости в него добавляется `solution.md` с описанием решения.

Подробный workflow создания, завершения и повторного прохождения задач описан в [TASKS.md](./TASKS.md).
