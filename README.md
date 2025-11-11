# my-project (template) with lib typedoc

## run

```
👉bun dev
$ bun --watch ./src/app.ts
Todo {
  id: 1,
  title: "Sample Todo",
  description: "This is a sample todo item.",
  isCompleted: false,
}
[
  Todo {
    id: 1,
    title: "Sample Todo",
    description: "This is a sample todo item.",
    isCompleted: false,
  }
]
User {
  id: 1,
  username: "john_doe",
  addTodo: [Function: addTodo],
  getTodos: [Function: getTodos],
}
```

## install
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.20. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
