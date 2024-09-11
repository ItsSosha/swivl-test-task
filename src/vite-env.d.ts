/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_PERSONAL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
