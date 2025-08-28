"use server";

import { TPost } from "@/types";

export const getAllPosts = async () => {
  const res = await fetch("https://find-your-place-tau.vercel.app/api/post");

  console.log("res. service", res);

  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }

  return res.json();
};

export const createPost = async (data: TPost) => {
  const res = await fetch("https://find-your-place-tau.vercel.app/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to create post");
  }

  return res.json();
};
