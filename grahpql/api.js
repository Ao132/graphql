import { catType, productType } from "./type.js";
import { catModel } from "../db/model/cat.model.js";
import { productModel } from "../db/model/product.model.js";
import { GraphQLID, GraphQLList, GraphQLString } from "graphql";

/** Query*/
export const getProducts = {
  type: new GraphQLList(productType),
  resolve: async () => {
    let products = await productModel.find();
    return products;
  },
};

export const getCategories = {
  type: new GraphQLList(catType),
  resolve: async () => {
    let categories = await catModel.find();
    return categories;
  },
};
/** Mutation*/
export const addCat = {
  type: GraphQLString,
  args: {
    title: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    await catModel.insertMany(args);
    return "added ";
  },
};

export const addProduct = {
  type: GraphQLString,
  args: {
    title: { type: GraphQLString },
    categoryId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    await productModel.insertMany(args);
    return "added ";
  },
};
