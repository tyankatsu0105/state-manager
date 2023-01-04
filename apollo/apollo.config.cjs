const path = require("node:path");

module.exports = {
  client: {
    includes: [path.join(process.cwd(), `src/**/*.graphql`)],
    service: {
      name: "server",
      // url: "http://localhost:4000/graphql",
      localSchemaFile: path.join(process.cwd(), "../server", "schema.graphql"),
      skipSSLValidation: true,
    },
  },
};
