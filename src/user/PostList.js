import React from "react";
import { useRouteMatch, Route, Switch, Link, useParams } from "react-router-dom";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const PostList = ({ posts }) => {
  const { path } = useRouteMatch();
  const { userId, postId } = useParams();

  const postLinks = posts.map((post) => (
   <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Switch>
          <Route exact path={`${path}/:postId`}>
            <Post posts={posts} />
          </Route>
          <Route path={`${path}/`}>
            <NoPostSelectedMessage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PostList;
