import model from "../../../model";

export default async(id:string,base:string)=>{
     await model.blog.updateOne({_id:id},{$set:{file:base}})
}