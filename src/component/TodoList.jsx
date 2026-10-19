import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, deleteTodo, toggleTodo, editTodoTitle }) {
  return (
    <ul className="list-reset">
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodoTitle={editTodoTitle}
        />
      ))}
    </ul>
  );
}
