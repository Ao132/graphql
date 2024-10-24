import { model, Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    // required: true
  },
});
export const productModel = model("Product", productSchema);
