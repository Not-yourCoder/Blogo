import Link from "next/link";
import React from "react";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import moment from "moment/moment";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-4 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute object-cover shadow-md rounded-t-lg lg:rounded-lg w-full h-full"
        />
      </div>
      <h1 className="transition duration-200 text-center mb-8 cursor-pointer hover:text-blue-300 text-3xl font-semibold ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="inline-flex lg:flex items-center justify-between mb-8 w-full">
        <div className="flex justify-center mb-4 lg:mb-0 lg:w-auto ml-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className=" rounded-lg "
          />
          <p className="inline text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700 mr-8 flex justify-center mb-4 lg:mb-0 lg:w-auto ">
          <DateRangeOutlinedIcon />
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:mx-20">
        {post.excert}
      </p>
      <div className="text-center my-5">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-300 transform hover:-translate-y-0.5 bg-slate-500 inline-block px-6 py-3 rounded-full text-white hover:shadow-xl active:translate-y-1 active:shadow-none">
            continue reading...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
