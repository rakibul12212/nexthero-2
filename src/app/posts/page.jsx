import React from "react";
import { getPosts } from "../services/(api)/postApi";
import Link from "next/link";

const PostPage = async () => {
  const postsData = await getPosts();

  return (
    <div className="p-5">
      <h6 className="text-center p-5">All posts</h6>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-6">
            <p>Title : {title}</p>
            <p>Description : {body}</p>
            <button className="bg-red-500 px-4 py-2"><Link href={`/posts/${id}`}>see details</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
