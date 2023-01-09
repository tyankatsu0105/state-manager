import React from "react";
import { Card } from "../../components/card";
import { FindTodosQuery } from "~api/graphql";
import styles from "./presentational.module.css";

type Props = {
  todos: FindTodosQuery["findTodos"]["edges"];
};

const Component: React.FC<Props> = (props) => (
  <ul className={styles.container}>
    {props.todos.map((todo) => (
      <li>
        <Card
          as="button"
          renderHeader={() => <div>{todo.node?.title}</div>}
          renderBody={() => <div>{todo.node?.content}</div>}
          type="button"
        />
      </li>
    ))}
  </ul>
);

export const Presentational = React.memo(Component);
