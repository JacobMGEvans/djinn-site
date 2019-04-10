import React, { useState, Fragment, } from "react";

import { indexBlogsObjects, } from "../../database/data";

const Blog = () => {
  const eachBlogPost = Object.values(indexBlogsObjects).map(ele => ele);

  return (
    <Fragment>
      {eachBlogPost.map((ele, i) => (
        <div key={i}>{Object.values(ele)}</div>
      ))}
    </Fragment>
  );
};
export default Blog;
