import model from "../../../model";
export interface UpdateBlog {
  id?: string;
  content?: string;
  comment?: string;
  title?:string
}
export default async (payload: UpdateBlog) => {
  const updateBlog = await model.blog.updateOne(
    { _id: payload.id },
    { ...payload}
  );
  return updateBlog;
};
