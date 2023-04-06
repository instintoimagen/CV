import React from "react";
import DOMPurify from "dompurify";
import Authors from "../db/Authors";
import { useParams } from "react-router-dom";
import Posts from "../db/Posts";

const PostArticle = () => {
  let date, author, content;
  // Recibe parámetros de la ruta, y con eso obtiene los datos del contenido del post
  let { topic } = useParams();

  Posts.map(
    (el) =>
      el.route === topic &&
      ((date = el.date), (author = el.author), (content = el.content))
  );

  let authorPhoto;
  Authors.map((el) => el.id === author && (authorPhoto = el.photo));

  const cleanContent = DOMPurify.sanitize(content);

  return (
    <div>
      <h4 className="post-data">{date}</h4>
      <div className="author-profile-div">
        <img className="author-profile-image" src={authorPhoto} alt="Perfil" />
        <h4 className="post-data">
          {Authors.map((el) => el.id === author && el.name)}
        </h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
    </div>
  );
};

export default PostArticle;
