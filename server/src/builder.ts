import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin from "@pothos/plugin-relay";
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
  DefaultEdgesNullability: false;
  DefaultNodeNullability: false;
};

export const builder = new SchemaBuilder<Types>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {
    edgesFieldOptions: {
      nullable: false,
    },
    nodeFieldOptions: {
      nullable: false,
    },
  },
});

builder.queryType({});
builder.mutationType({});

builder.addScalarType("DateTime", DateTimeResolver, {});
