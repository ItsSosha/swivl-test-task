/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GH_PERSONAL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
