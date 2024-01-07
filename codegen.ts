import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: "src/lib/graphql/**/*.graphql",
  generates: {
    "src/lib/graphql/helpers/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
        "typescript-react-apollo",
        "typescript-mock-data",
      ],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        documentMode: "graphQLTag",
        terminateCircularRelationships: true,
        apolloReactHocImportFrom: "@apollo/client",
        apolloReactHooksImportFrom: "@apollo/client",
        apolloClientInstanceImport: "../apollo",
      },
    },
    "src/lib/graphql/helpers/ssr.tsx": {
      plugins: ["graphql-codegen-apollo-next-ssr"],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        documentMode: "external",
        importDocumentNodeExternallyFrom: "./index",
        contextType: "ApolloClientContext",
        contextTypeRequired: true,
        apolloClientInstanceImport: "../apollo",
        apolloImportFrom: "@apollo/client",
        apolloCacheImportFrom: "@apollo/client",
      },
      preset: "import-types",
      presetConfig: {
        typesPath: "./index",
      },
    },
  },
};

export default config;
