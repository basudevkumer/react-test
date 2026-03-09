import React from "react";
import { useAllProduct } from "../hook/useProduct";

const Blog = () => {
  const { data, isLoading } = useAllProduct();
  console.log(isLoading);

  console.log(data);
  return <div>Blog</div>;
};

export default Blog;
