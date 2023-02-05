import React from "react";
import styles from "./presentational.module.css";
import {
  PolymorphicComponentProps,
  PolymorphicMemoExoticComponent,
} from "~utils/polymorphic-component";
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
};

export const defaultElement = "div";

const Component = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicComponentProps<FeatureProps, Element>
) => {
  const { as, renderHeader, renderBody, className, ...restProps } = props;
  const Element = as || defaultElement;

  return (
    <Element className={`${className} ${styles.container}`} {...restProps}>
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
    </Element>
  );
};

export const Presentational: PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
