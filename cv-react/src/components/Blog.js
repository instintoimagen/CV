import React from "react";
import "./Blog.css";
import posts from "../db/Posts";
import PostFigure from "./PostFigure";
//console.log(posts);

const Blog = () => {
  return (
    <>
      <div className="content">
        <div className="blog-div">
          <h1>Blog</h1>
          {posts.map((el) => (
            <PostFigure
              key={el.id}
              title={el.title}
              subTitle={el.subTitle}
              date={el.date}
              content={el.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
