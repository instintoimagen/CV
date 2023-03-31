import React from "react";
import DOMPurify from "dompurify";

const PostFigure = ({ title, subTitle, date, content }) => {
  const cleanContent = DOMPurify.sanitize(content);

  return (
    <div className="post-figure-div">
      {/* <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <h4>{date}</h4> */}
      <div
        className="post-figure-img"
        dangerouslySetInnerHTML={{ __html: cleanContent }}
      />
    </div>
  );
};

export default PostFigure;
