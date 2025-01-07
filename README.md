```shell
yarn init
yarn add typescript @types/node --dev
npx tsc --init

yarn add @microsoft/kiota-bundle
kiota generate --language typescript --openapi https://bulk.aws.innago.com/openapi.json --class-name BulkClient --output src/client

kiota info -d "https://bulk.aws.innago.com/openapi.json" -l TypeScript
yarn add @microsoft/kiota-authentication-azure@1.0.0-preview.77 --exact
yarn add @microsoft/kiota-bundle@1.0.0-preview.77 --exact

```
