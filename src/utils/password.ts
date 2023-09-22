import bcrypt from "bcrypt";

export const generatePassword = async (password: string) => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
};

export const verifyPassword = async (password: string, dbPassword: string) => {
  const isValidPassword = await bcrypt.compare(password, dbPassword);
  return isValidPassword;
};
