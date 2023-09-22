import model from "../../../model";

export default async (blogId: string) => {
  const blogRecord = await model.blog.findOne({ _id: blogId });
  return blogRecord;
};
