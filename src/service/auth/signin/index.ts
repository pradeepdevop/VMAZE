import model from "../../../model";

export default async (email: string) => {
  const userExist = await model.user.findOne({ email: email });
  return userExist;
};
