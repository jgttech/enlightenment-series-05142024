declare type FC<T = {}> = React.FC<T>;
declare type ReactNode = React.ReactNode;
declare type Children = ReactNode | ReactNode[];
declare type ForwardRefRenderFunction<
  T,
  P = {}
> = React.ForwardRefRenderFunction<T, P>;
declare type RefObject<T> = React.RefObject<T>;
declare type RefFC<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithRef<P> & React.RefAttributes<T>
>;
declare type PropsOf<C extends (...args: any) => any> = Parameters<C>[0];
declare type ContextPropsOf<C extends (...args: any) => any> =
  Parameters<C>[0]["value"];
declare type HtmlElements = keyof JSX.IntrinsicElements;
declare type CSSProperties = React.CSSProperties;
declare type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
