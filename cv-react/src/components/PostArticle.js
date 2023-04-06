import React from "react";
import { Outlet } from "react-router-dom";
import DOMPurify from "dompurify";
import Authors from "../db/Authors";

const PostArticle = ({ title, subTitle, date, content }) => {
  const cleanContent = DOMPurify.sanitize(content);

  return (
    <div>
      {/*       <h2>{title}</h2>
      <h3>{subTitle}</h3>
       */}
      <h4 className="post-data">{date}</h4>
      <div className="author-profile-div">
        <img
          className="author-profile-image"
          src={Authors[0].photo}
          /* {Tags.map((el) => tags === el.id && el.tag)} */
          alt="Perfil"
        />
        <h4 className="post-data">{Authors[0].name}</h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
    </div>
  );
};

export default PostArticle;
