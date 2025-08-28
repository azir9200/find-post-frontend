"use client";

import { useForm } from "react-hook-form";
import { createPost } from "../service";
import { TPost } from "@/types";

const CreateBlogForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPost>();

  const onSubmit = async (data: TPost) => {
    try {
      const res = await createPost(data);
      console.log("Post created:", res);
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error creating post:", err.message);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="my-10 bg-accent w-full max-w-3xl mx-auto rounded-xl p-6">
      <h1 className="text-center text-4xl italic mb-8">
        Post Your <span className="text-cyan-700">Blog</span>
      </h1>

      <div className="shadow-xl bg-base-100 rounded-xl p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div className="form-control w-full">
            <label htmlFor="title" className="label mb-2">
              <span className="text-lg font-semibold text-cyan-700">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Enter your blog title"
              className="input input-bordered w-full rounded-lg p-3 border border-cyan-600"
            />
            {errors.title && (
              <span className="text-red-500 mt-1 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="form-control w-full">
            <label htmlFor="content" className="label mb-2">
              <span className="text-lg font-semibold text-cyan-700">
                Content
              </span>
            </label>
            <textarea
              {...register("content", { required: "Content is required" })}
              placeholder="Write your blog content here"
              className="textarea textarea-bordered  border border-cyan-600 w-full rounded-lg p-3"
              rows={6}
            />
            {errors.content && (
              <span className="text-red-500 mt-1 text-sm">
                {errors.content.message}
              </span>
            )}
          </div>

          {/* Author */}
          <div className="form-control w-full">
            <label htmlFor="author" className="label mb-2">
              <span className="text-lg font-semibold text-cyan-700">
                Author
              </span>
            </label>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              placeholder="Your name"
              className="input input-bordered w-full border border-cyan-600 rounded-lg p-3"
            />
            {errors.author && (
              <span className="text-red-500 mt-1 text-sm">
                {errors.author.message}
              </span>
            )}
          </div>

          {/* Submit button */}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-accent bg-cyan-700 text-2xl rounded-2xl btn-outline w-full py-3"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;
