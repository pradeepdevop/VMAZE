import model from "../../../model";

export default async () => {
  const listBlog = await model.blog.find({});
  return listBlog;
};
