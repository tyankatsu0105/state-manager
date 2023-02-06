import ReactDOM from "react-dom";

type UseCreateModalProps = {
  children: Parameters<typeof ReactDOM.createPortal>[0];
};
export const useCreateModal = (props: UseCreateModalProps) => {
  const modalRoot = document.getElementById("modal-root");

  if (modalRoot === null) return <></>;

  return ReactDOM.createPortal(props.children, modalRoot);
};
