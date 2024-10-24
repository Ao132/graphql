import {GraphQLObjectType, GraphQLSchema } from "graphql";
import { addCat, addProduct, getCategories, getProducts } from "./api.js";

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "query",
      fields: {
        getProducts,
        getCategories,
      },
    }),
    mutation:new GraphQLObjectType({
      name:"mutation",
      fields:{
        addCat,
        addProduct
      }
    })
  });