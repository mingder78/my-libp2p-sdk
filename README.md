# my-project (template) with lib typedoc

## example code

👉cat app.ts
```
import { ScientificCalculator, Calculator } from '@yourorg/my-libp2p-sdk';
import Todo from '@yourorg/my-libp2p-sdk/Todo';
import User from '@yourorg/my-libp2p-sdk/User';

const sci = new ScientificCalculator();
console.log(sci instanceof ScientificCalculator); // true
console.log(sci instanceof Calculator);           // true
// Example usage
const user = new Todo(1, 'Sample Todo', 'This is a sample todo item.', false);
console.log(user);

// Example usage
const newUser = new User(1, 'john_doe');
newUser.addTodo(user);
console.log(newUser.getTodos());
console.log(newUser)
```

## run

👉bun start
```
$ bun ./app.ts
true
true
t {
  id: 1,
  title: "Sample Todo",
  description: "This is a sample todo item.",
  isCompleted: false,
}
[
  t {
    id: 1,
    title: "Sample Todo",
    description: "This is a sample todo item.",
    isCompleted: false,
  }
]
c {
  id: 1,
  username: "john_doe",
  addTodo: [Function: addTodo],
  getTodos: [Function: getTodos],
}
```
## vitest

👉bun run test
```sh
$ vitest

 DEV  v4.0.8 /private/tmp/my-libp2p-sdk

 ✓ test/scientific-calculator.test.ts (4 tests) 10ms
 ✓ test/calculator.test.ts (8 tests) 11ms
 ✓ test/sum.test.ts (1 test) 3ms

 Test Files  3 passed (3)
      Tests  13 passed (13)
   Start at  13:48:41
   Duration  899ms (transform 497ms, setup 0ms, collect 605ms, tests 25ms, environment 1ms, prepare 30ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

## bun test

```
👉bun
 test
bun test v1.2.20 (6ad208bc)

test/sum.test.ts:
✓ adds 1 + 2 to equal 3 [1.90ms]

test/scientific-calculator.test.ts:
✓ ScientificCalculator > inherits basic operations [0.90ms]
✓ ScientificCalculator > can calculate power and square root
✓ ScientificCalculator > throws error for invalid sqrt input [0.55ms]
✓ ScientificCalculator > overrides multiply with custom behavior [1.86ms]

test/calculator.test.ts:
✓ Calculator > should add numbers correctly
✓ Calculator > should subtract correctly
✓ Calculator > should multiply correctly
✓ Calculator > should divide correctly and handle decimals [0.10ms]
✓ Calculator > should throw error when dividing by zero
✓ Calculator > should record calculation history [1.19ms]
✓ Calculator > should support custom precision
✓ Calculator > should clear history properly

 13 pass
 0 fail
 27 expect() calls
Ran 13 tests across 3 files. [50.00ms]
```

## install
To install dependencies:

```bash
bun install
```

To run dev:

```bash
bun dev
```

This project was created using `bun init` in bun v1.2.20. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
