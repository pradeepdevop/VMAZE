import model from "../model";

export const emailverify = async (email: string) => {
  const isExist = await model.user.exists({ email: email });
  console.log(isExist)
  return isExist;
};
