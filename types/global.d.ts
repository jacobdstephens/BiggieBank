import * as React from 'react'
import type { ModelViewerElement } from '@google/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerElement
    }
  }
}
