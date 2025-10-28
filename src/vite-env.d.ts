/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRODUCTS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

