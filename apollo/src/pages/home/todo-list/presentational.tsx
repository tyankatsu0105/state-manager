import React from "react";
import { FindTodosQuery } from "~api/graphql";
import styles from "./presentational.module.css";
import { TodoListItem } from "./todo-list-item";

type Props = {
  readonly todos: FindTodosQuery["findTodos"]["edges"];
};

const Component: React.FC<Props> = (props) => (
  <ul className={styles.container}>
    {props.todos?.map((todo) => (
      <TodoListItem key={todo.node.id} todo={todo.node} />
    ))}
  </ul>
);

export const Presentational = React.memo(Component);
