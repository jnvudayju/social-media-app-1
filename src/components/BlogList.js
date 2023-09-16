import React, { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";
import axios from "axios";

const BlogList = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/posts/timeline/all?userId=64da1f1773eaf5e06cc38d93"
      )
      .then((response) => {
        console.log(response.data);
        setListItems((prevState) => {
          const l = response.data.map((d) => {
            return {
              heading: d.desc.substring(0, 10) + ".....",
              dateString: new Date(d.createdAt).toISOString(),
              content: d.decs,
              desc: d.decs,
            };
          });

          return l;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="list-group">
      {listItems.map((item) => {
        return <BlogListItem {...item} />;
      })}
    </div>
  );
};

export default BlogList;
