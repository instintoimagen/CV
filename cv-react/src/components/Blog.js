import React from "react";
import "./Blog.css";
import posts from "../db/Posts";
// import Tags from "../db/tags";
import PostFigure from "./PostFigure";

/* Para extraer la fecha en formato legible
console.table(posts);
console.log(posts[0].date);
const horaActual = new Date();
console.log(
  new Intl.DateTimeFormat("es-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Cordoba",
  }).format(horaActual)
);
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date));
*/
const Blog = () => {
  return (
    <main className="main-blog">
      <h1>Blog</h1>
      <div className="content-blog">
        <div className="blog-div">
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
    </main>
  );
};

export default Blog;
