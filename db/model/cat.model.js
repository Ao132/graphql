import { model, Schema } from "mongoose";

const catSchema = new Schema({
  title: String,
});
export const catModel = model("Category", catSchema);
