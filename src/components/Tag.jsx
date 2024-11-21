import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    DevOps: { backgroundColor: "#f26c6e" }, 
    Java: { backgroundColor: "#5382a1" }, 
    BI: { backgroundColor: "#F2C80F" }, 
    React: { backgroundColor: "#4cdafc" }, 
    Android : { backgroundColor: "#78C257" }, 
    Python : { backgroundColor: "#3599B8" }, 
    default: { backgroundColor: "#f9f9f9" }, 
  };

  return (
    <buttoni
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </buttoni>
  );
};

export default Tag;
