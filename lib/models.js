import { strict } from "assert";
import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required :true,
    unique:true,
    min:3,
    max:20,
  },
  email:{
    type:String,
    required :true,
    unique:true,
    max:20,
  },
  password:{
    type:String,
    required :true,
    min:8,
    max:20,
  },
  img:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
} , {timestamps:true}
);


const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required :true,
  },
  desc:{
    type:String,
    required :true,
  },
  img:{
    type:String,
  },
  userId:{
    type:string,
    required:true,
  },
  postpg:{
    type:string,
    required:true,
    unique:true,
  },
} , {timestamps:true}
);

export const User = mongoose.models.User || mongoose.model("User" , userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post" , postSchema);