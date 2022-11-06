declare module '@google/model-viewer' {
  type ModelViewer = {
    src: string;
    iosSrc?: string;
    children?: React.ReactNode
    class?: string;
    ar?: boolean;
    "ar-scale"?: string;
    autoRotate?: boolean;
    cameraControls?: boolean;
    shadowIntensity?: number;
    shadowSoftness?: number;
    exposure?: number;
    environmentImage?: string;
    alt?: string;
    autoplay?: boolean;
    poster?: string;
    scale?: string;
  };

  global {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": ModelViewer;
      }
    }
    interface HTMLElementTagNameMap {
      'model-viewer': ModelViewer & HTMLElement;
    }
  }
}
