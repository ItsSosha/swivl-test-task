/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_PERSONAL_TOKEN: string;
  readonly VITE_GH_API_URL: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
