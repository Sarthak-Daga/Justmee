import { connectToDb } from "./connecttodb";
// import Post from "../models/Post"; // Adjust path if necessary
// import User from "../models/User"; // Adjust path if necessary

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error("Failed to fetch posts!", err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.error("Failed to fetch post!", err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(`Failed to fetch user with id ${id}!`, err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.error("Failed to fetch users!", err);
    throw new Error("Failed to fetch users!");
  }
};
