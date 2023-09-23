import { model, Schema } from "mongoose";

export interface BlogType {
  title?:string;
  content?: string;
  comment?: string;
  file?: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedDate?: Date;
}

const blog: Schema<BlogType> = new Schema(
  {
    title:{
      type:String
    },
    content: {
      type: String,
    },
    comment: {
      type: String,
    },
    file: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
    },
    updatedDate: {
      type: Date,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedDate",
    },
    versionKey: false,
  }
);

export default model("blog", blog);
