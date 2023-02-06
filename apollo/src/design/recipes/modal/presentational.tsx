import React from "react";
import styles from "./presentational.module.css";
import {
  PolymorphicComponentProps,
  PolymorphicMemoExoticComponent,
} from "~utils/polymorphic-component";
import { Backdrop } from "../../components/backdrop";
type FeatureProps = {
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
};

export const defaultElement = "dialog";

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  const {
    as,
    renderHeader,
    renderBody,
    renderFooter,
    className = "",
    open,
    ...restProps
  } = props;
  const Element = as || defaultElement;

  return (
    <>
      <div>
        <Backdrop onClick={() => console.log("aaaaaaa")} />
        <Element
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
        </Element>
      </div>
    </>
  );
};

export const Presentational: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
