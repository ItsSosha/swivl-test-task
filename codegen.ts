import { loadEnv } from "vite";
import type { CodegenConfig } from "@graphql-codegen/cli";

const env = loadEnv("development", process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer ${env.VITE_GH_PERSONAL_TOKEN}`,
          "user-agent": "JS GraphQL",
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/types.generated.ts": {
      plugins: ["typescript"],
    },
    src: {
      preset: "near-operation-file",
      plugins: ["typescript-operations", "typescript-react-apollo"],
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "graphql/types.generated.ts",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
