// types/gif.js.d.ts
declare module 'gif.js' {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
  }

  interface GIFAddFrameOptions {
    delay?: number;
    copy?: boolean;
  }

  export default class GIF {
    constructor(options?: GIFOptions);
    addFrame(image: HTMLCanvasElement | CanvasRenderingContext2D | ImageData, options?: GIFAddFrameOptions): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    render(): void;
  }
}
