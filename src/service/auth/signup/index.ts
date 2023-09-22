import model from "../../../model";
import { UserType } from "../../../model/user";
export default async (payload: UserType) => {
  const createUser = await model.user.create({ ...payload });
  return createUser;
};
