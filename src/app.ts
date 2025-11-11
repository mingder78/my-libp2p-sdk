import Todo from './modules/Todo';
import User from './modules/User';
// Example usage
const user = new Todo(1, 'Sample Todo', 'This is a sample todo item.', false);
console.log(user);

// Example usage
const newUser = new User(1, 'john_doe');
newUser.addTodo(user);
console.log(newUser.getTodos());
console.log(newUser)

