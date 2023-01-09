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
