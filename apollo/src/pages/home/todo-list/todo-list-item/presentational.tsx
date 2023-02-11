import React from "react";
import { Card } from "../../../../design/components/card";
import { FindTodosQuery, FindTodoQuery } from "~api/graphql";
import styles from "./presentational.module.css";
import { Modal } from "../../../../design/recipes/modal";
import { Button } from "../../../../design/components/button";

type Props = {
  readonly todo: FindTodosQuery["findTodos"]["edges"][number]["node"];
  readonly modal: {
    readonly isOpen: boolean;
    readonly handleOpen: () => void;
    readonly handleClose: () => void;
  };
  readonly handleFindTodo: () => void;
  readonly todoDetail: FindTodoQuery["findTodo"];
};

const Component: React.FC<Props> = (props) => (
  <>
    <li>
      <Card
        className={styles.card}
        as="button"
        renderHeader={(renderHeaderProps) => (
          <h2
            className={`${styles.heading} ${renderHeaderProps.styles.header}`}
          >
            {props.todo.title}
          </h2>
        )}
        renderBody={(renderBodyProps) => (
          <div className={renderBodyProps.styles.body}>
            {props.todo.content}
          </div>
        )}
        type="button"
        onClick={() => {
          props.modal.handleOpen();
          props.handleFindTodo();
        }}
      />
    </li>

    <Modal
      onClickBackdrop={props.modal.handleClose}
      open={props.modal.isOpen}
      renderHeader={(renderHeaderProps) => (
        <>
          <h2 className={renderHeaderProps.styles.header}>
            {props.todoDetail?.title}
          </h2>
          <p>createdAt: {props.todoDetail?.createdAt}</p>
          <p>updatedAt: {props.todoDetail?.updatedAt}</p>
        </>
      )}
      renderBody={(renderBodyProps) => (
        <p className={renderBodyProps.styles.body}>
          {props.todoDetail?.content}
        </p>
      )}
      renderFooter={(renderFooterProps) => (
        <div
          className={`${renderFooterProps.styles.footer} ${styles["modal-footer"]}`}
        >
          <Button
            type="button"
            onClick={props.modal.handleClose}
            color="normal"
          >
            閉じる
          </Button>
        </div>
      )}
    />
  </>
);

export const Presentational = React.memo(Component);
