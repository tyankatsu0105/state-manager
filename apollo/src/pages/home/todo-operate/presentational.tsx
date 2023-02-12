import React from "react";
import { Button } from "../../../design/components/button";
import { Modal } from "../../../design/recipes/modal";
import styles from "./presentational.module.css";

type Props = {
  readonly modal: {
    isOpen: boolean;
    handleOpen: () => void;
    handleClose: () => void;
  };
};

const Component: React.FC<Props> = (props) => (
  <>
    <Button color="success" onClick={props.modal.handleOpen}>
      Add
    </Button>

    <Modal
      onClickBackdrop={props.modal.handleClose}
      open={props.modal.isOpen}
      renderHeader={(renderHeaderProps) => (
        <h2 className={renderHeaderProps.styles.header}>Add Todo</h2>
      )}
      renderBody={(renderBodyProps) => (
        <div className={renderBodyProps.styles.body}>a</div>
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

          <Button
            type="button"
            onClick={props.modal.handleClose}
            color="success"
          >
            作成
          </Button>
        </div>
      )}
    />
  </>
);

export const Presentational = React.memo(Component);
