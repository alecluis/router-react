import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const PostLink = ({ post }) => {
  const { path } = useRouteMatch();

  return (
    <li className="list-group-item text-truncate">
      <Link to={`${path}/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
