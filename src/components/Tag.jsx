import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" }, 
    CSS: { backgroundColor: "#15d4c8" }, 
    JavaScript: { backgroundColor: "#ffd12c" }, 
    React: { backgroundColor: "#4cdafc" }, 
    Android : { backgroundColor: "#78C257" }, 
    Git : { backgroundColor: "#F1502F" }, 
    default: { backgroundColor: "#f9f9f9" }, 
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
