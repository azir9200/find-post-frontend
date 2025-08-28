import PostCard from "@/components/pages/postCard/PostCard";
import { getAllPosts } from "@/components/service";
import { TPost } from "@/types";
import React from "react";

const page = async () => {
  const { data: posts } = await getAllPosts();
  console.log("data", posts);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-cyan-50 via-cyan-100 to-cyan-200 py-10 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
          Latest Blogs from Blogiz
        </h2>
        <p className="text-lg md:text-xl text-cyan-500 max-w-2xl mx-auto italic">
          You will find all our latest updates here. Feel free to explore and
          enjoy reading our blogs.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post: TPost) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
