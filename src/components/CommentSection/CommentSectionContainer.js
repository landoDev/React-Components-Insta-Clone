// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment] = useState(props.comments)
  console.log(comment)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/* {data.map(props => (
        <Post post={props}/>
      ))} */}
      {comment.map(props => (
        <Comment comment={props}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
