"use server"

import { getAllPosts } from "@/services/post/post.service";
import PostCard from "./PostCard";

export default async function PostsContainer() {

  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} content={post.content} avatar={post.user.imageUrl || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"} username={post.user.username} postedAt={post.createdAt} hashtags={post.hashtags} />
      ))}
    </div>
  )
}