import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { catModel } from "../db/model/cat.model.js";

export const catType = new GraphQLObjectType({
  name: "category",
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
  },
});

export const productType = new GraphQLObjectType({
  name: "product",
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    categoryId: {
      type: catType,
      resolve: async (parent) => {
        let categories = await catModel.find()
        return categories.find((cat) => cat.id == parent.categoryId);
      },
    },
  },
});
