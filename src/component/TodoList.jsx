import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  console.log(todos);

  return (
    <ul className="list-reset">
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}
