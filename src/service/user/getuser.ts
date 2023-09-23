import model from "../../model";

export default async (id: string) => {
  const user = await model.user.findOne({ _id: id },{password:0});
  return user;
};
