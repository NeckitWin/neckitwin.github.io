/// <reference types="vite/client" />
declare module '*.svg?react' {
  import * as React from 'react';
  const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}