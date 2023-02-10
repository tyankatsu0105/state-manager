import React from "react";
import ReactDOM from "react-dom";

type UseCreateModalProps = {
  children: Parameters<typeof ReactDOM.createPortal>[0];
};
export const useCreateModal = (props: UseCreateModalProps) => {
  const modalRoot = document.getElementById("modal-root");

  if (modalRoot === null) return <></>;

  return ReactDOM.createPortal(props.children, modalRoot);
};

type UseModalProps = {
  initialOpen: boolean;
};
export const useModal = (props: UseModalProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(props.initialOpen);

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleOpen,
    handleClose,
  };
};
