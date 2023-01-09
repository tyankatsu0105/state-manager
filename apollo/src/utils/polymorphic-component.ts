// https://github.com/kripod/react-polymorphic-types/blob/30ba44854a4edec6dcb5ae797c6df4e849ab73db/index.d.ts

import * as React from "react";

/**
 * @example
 * type A = {
 *     id: string
 *     name: string
 * }
 *
 * type B = {
 *     id: number
 *     age: number
 * }
 *
 * Merge<A,B>
 * // {
 * //  id: number
 * //  name: string
 * //  age: number
 * // }
 */
type Merge<T, U> = Omit<T, keyof U> & U;

type PolymorphicPropsName = "as";

export type PolymorphicComponentProps<
  Props,
  Element extends React.ElementType
> = Merge<
  Element extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[Element]>
    : React.ComponentPropsWithRef<Element>,
  Props & { [key in PolymorphicPropsName]?: Element }
>;

type PolymorphicExoticComponent<
  Props = {},
  Element extends React.ElementType = React.ElementType
> = Merge<
  React.ExoticComponent<Props & { [key: string]: unknown }>,
  {
    <InstanceT extends React.ElementType = Element>(
      props: PolymorphicComponentProps<Props, InstanceT>
    ): React.ReactElement | null;
  }
>;

export type PolymorphicMemoExoticComponent<
  Props,
  Element extends React.ElementType
> = Merge<
  React.MemoExoticComponent<React.ComponentType<any>>,
  PolymorphicExoticComponent<Props, Element>
>;
