import React from "react";

const BlogListItem = (props) => {
  const { heading, dateString, content, desc } = props;
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action active mb-1"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{heading}</h5>
        <small>{dateString}</small>
      </div>
      <p className="mb-1">{content}</p>
      <small>{desc}</small>
    </a>
  );
};

export default BlogListItem;
