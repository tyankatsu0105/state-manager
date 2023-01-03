import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateTimeResolver } from "graphql-scalars";
import { prisma } from "./db";

type Types = {
  PrismaTypes: PrismaTypes;
  Context: {};
  Scalars: {
    DateTime: {
      Input: Date;
      Output: Date;
    };
  };
};
export const builder = new SchemaBuilder<Types>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({});
builder.mutationType({});

builder.addScalarType("DateTime", DateTimeResolver, {});
