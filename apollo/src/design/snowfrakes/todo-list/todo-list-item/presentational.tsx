import React from "react";
import { Card } from "../../../components/card";
import { FindTodosQuery } from "~api/graphql";
import styles from "./presentational.module.css";
import { Modal } from "../../../recipes/modal";
import { Button } from "../../../components/button";

type Props = {
  readonly todo: FindTodosQuery["findTodos"]["edges"][number]["node"];
  readonly modal: {
    readonly isOpen: boolean;
    readonly handleOpen: () => void;
    readonly handleClose: () => void;
  };
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
        onClick={props.modal.handleOpen}
      />
    </li>

    <Modal
      onClickBackdrop={props.modal.handleClose}
      open={props.modal.isOpen}
      renderHeader={(props) => <h2 className={props.styles.header}>Header</h2>}
      renderBody={(renderBodyProps) => (
        <p className={renderBodyProps.styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas ducimus asperiores autem illum facilis incidunt eos sapiente,
          id alias optio nemo voluptatum, labore culpa expedita nulla, numquam
          doloremque beatae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deserunt voluptas ducimus asperiores autem illum facilis
          incidunt eos sapiente, id alias optio nemo voluptatum, labore culpa
          expedita nulla, numquam doloremque beatae.
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
