import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema";

const yoga = createYoga({
  schema,
  context: (req) => {
    return {
      req,
    };
  },
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log(`\
🚀 Server ready at: http://localhost:4000
🚀 Server ready at: http://localhost:4000/graphql
🚀 Server ready at: http://127.0.0.1:4000
🚀 Server ready at: http://127.0.0.1:4000/graphql
  `);
});
