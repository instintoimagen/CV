import React from "react";
import Tags from "../db/Tags";
import { HashLink } from "react-router-hash-link";

const PostFigure = ({ tags, title, subTitle, thumb, route }) => {
  return (
    <HashLink to={route}>
      <figure className="post-card">
        <img src={thumb} alt={title} />

        <div className="post-card-text">
          <h4>#{Tags.map((el) => tags === el.id && el.tag)}</h4>
          <h3>{title}</h3>
          <h6>{subTitle}</h6>
        </div>
      </figure>
    </HashLink>
  );
};

export default PostFigure;
