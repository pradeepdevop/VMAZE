import model from "../../../model";

export default async (blogId: string) => {
  const deleteBlog = await model.blog.findOneAndUpdate(
    { _id: blogId },
    { $set: { isDeleted: true } }
  );
  return deleteBlog;
};
