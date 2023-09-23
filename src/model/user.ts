import { model, Schema } from "mongoose";

export interface UserType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  profile?:string;
  createdAt?: Date;
  updatedAt?: Date;
}

const user: Schema<UserType> = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    versionKey: false,
  }
);

export default model("user", user);
