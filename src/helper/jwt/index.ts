import jwt from "jsonwebtoken";
export interface TokenPayload {
  email: string;
  password: string;
}
const maxTime = Number(process.env.JWT_EXPIRY_TIME ?? 1) * 60 * 30;
const generateToken = async (payload: TokenPayload) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY ?? "", {
    expiresIn: maxTime,
  });
  return { token, maxTime };
};

const verifyToken = async (token: string) => {
  return jwt.verify(token, process.env.SECRET_KEY ?? "", (error, decoded) => {
    if (error) {
      return { success: false, error };
    } else {
      return { success: true, decoded };
    }
  });
};

export { generateToken, verifyToken };
