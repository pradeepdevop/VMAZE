import model from "../../../model";
export interface UpdateBlog {
  id?: string;
  content?: string;
  comment?: string;
}
export default async (payload: UpdateBlog) => {
  const updateBlog = await model.blog.findOneAndUpdate(
    { _id: payload.id },
    { $set: { content: payload.content } }
  );
  return updateBlog;
};
