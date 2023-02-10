import React from "react";
import styles from "./presentational.module.css";

import { Backdrop } from "../../components/backdrop";

type FeatureProps = React.ComponentPropsWithRef<"dialog"> & {
  renderHeader?: (props: {
    styles: {
      header: typeof styles.header;
    };
  }) => React.ReactNode;
  renderBody?: (props: {
    styles: {
      body: typeof styles.body;
    };
  }) => React.ReactNode;
  renderFooter?: (props: {
    styles: {
      footer: typeof styles.footer;
    };
  }) => React.ReactNode;
  onClickBackdrop?: React.ComponentProps<"div">["onClick"];
};

export const defaultElement = "dialog";

const Component = (props: FeatureProps) => {
  const {
    renderHeader,
    renderBody,
    renderFooter,
    className = "",
    open,
    onClickBackdrop,
    ...restProps
  } = props;

  return (
    <>
      {open && (
        <div>
          <Backdrop onClick={onClickBackdrop} as="div" />
          <dialog
            className={`${className} ${styles.container}`}
            open={open}
            {...restProps}
          >
            {renderHeader &&
              renderHeader({
                styles: {
                  header: styles.header,
                },
              })}
            {renderBody &&
              renderBody({
                styles: {
                  body: styles.body,
                },
              })}
            {renderFooter &&
              renderFooter({
                styles: {
                  footer: styles.footer,
                },
              })}
          </dialog>
        </div>
      )}
    </>
  );
};

export const Presentational = React.memo(Component);
