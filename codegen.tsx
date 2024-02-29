/*
    An api client code generation utility
*/
import { CodegenConfig } from "@graphql-codegen/cli";
import { properties } from './src/properties'

/**
 * Provides the same function as running codegen from the cli using npx with codegen.yml
    Use from cli as 'npm run generate' at the cli or in a CI build sequence.
    @param {String} schema: an endpoint for the graphql api schema that is used to generate graphql functions
    @param {Array} documents: a path regular expression to user defined typescript queries
    @param {JSON} generates: specifies generated document destination, generation type and generation tag 
    @param {boolean} ignoreNoDocuments: a boolean set true to prevent codegen from complaining about lack of documents
 */
const config: CodegenConfig = {
    schema: properties.STITCH_GRAPHQL_SCHEMA_ENDPOINT,
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/generated/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;