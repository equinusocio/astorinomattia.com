/**
 * Default CSS definition for typescript
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface ProcessEnv {
    IS_DEV: boolean;
  }
}
