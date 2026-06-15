/// <reference types="vite/client" />

// Image asset imports
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

// Figma asset alias imports (resolved to local files in vite.config.ts)
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}
