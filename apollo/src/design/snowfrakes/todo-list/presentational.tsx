import React from "react";
import { Card } from "../../components/card";
import { FindTodosQuery } from "~api/graphql";
type Props = {
  todos: FindTodosQuery["findTodos"]["edges"];
};

const Component: React.FC<Props> = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <Card
        as="li"
        renderHeader={() => <div>{todo.node?.title}</div>}
        renderBody={() => <div>{todo.node?.content}</div>}
      />
    ))}
  </ul>
);

export const Presentational = React.memo(Component);
