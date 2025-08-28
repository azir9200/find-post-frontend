import { TPost } from "@/types";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl px-8 pb-6 rounded-xl">
      <div className="card-body ">
        <p className="flex items-center justify-center text-cyan-900 bg-cyan-100 p-2 w-44 rounded-xl font-bold py-1">
          {post.title}
        </p>

        <p className="">{post.content}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="">-{post.author}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
