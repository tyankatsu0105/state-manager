import { builder } from "../builder";
import "./todo";
import { writeFileSync } from "fs";
import { resolve } from "path";
import { printSchema } from "graphql";

export const schema = builder.toSchema({});

const comment = `############################### 
# This file was generated by src/schema/index.ts
###############################`;
writeFileSync(
  resolve(__dirname, "../../schema.graphql"),
  `${comment}

${printSchema(schema)}`
);