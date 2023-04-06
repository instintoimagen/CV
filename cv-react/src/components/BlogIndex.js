import posts from "../db/Posts";
import PostFigure from "./PostFigure";

const BlogIndex = () => {
  return (
    <>
      <div className="post-cards">
        {posts.map((el) => (
          <PostFigure
            key={el.id}
            tags={el.tags[0]}
            title={el.title}
            subTitle={el.subTitle}
            thumb={el.thumb}
            route={el.route}
          />
        ))}
      </div>
    </>
  );
};

export default BlogIndex;
