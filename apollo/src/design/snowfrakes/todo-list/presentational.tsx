import React from "react";
import { Card } from "../../components/card";
import { FindTodosQuery } from "~api/graphql";
import styles from "./presentational.module.css";

const getSlicedContent = (content: string) => `${content.slice(0, 100)}...`;
type Props = {
  todos: FindTodosQuery["findTodos"]["edges"];
};

const Component: React.FC<Props> = (props) => (
  <ul className={styles.container}>
    {props.todos.map((todo) => {
      const content = getSlicedContent(
        todo.node?.content || "詳細はありません..."
      );

      return (
        <li>
          <Card
            className={styles.card}
            as="button"
            renderHeader={(props) => (
              <h2 className={`${styles.heading} ${props.styles.header}`}>
                {todo.node?.title}
              </h2>
            )}
            renderBody={(props) => (
              <div className={props.styles.body}>{content}</div>
            )}
            type="button"
          />
        </li>
      );
    })}
  </ul>
);

export const Presentational = React.memo(Component);
