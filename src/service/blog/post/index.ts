import model from "../../../model";
import { BlogType } from "../../../model/blog";

export default async (payload: BlogType) => {
  const record = await model.blog.create({ ...payload });
  return record;
};
