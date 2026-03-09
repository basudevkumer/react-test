import React from "react";
import { Link } from "react-router";
import counter from "../axiosRequest/store/counter";

const About = () => {
  const { count, increment } = counter((state) => state);

  return (
    <div>
      <h1>This is About Page</h1>
      <div className="p-10">
        <h1>Global Counter is {count}</h1>
        <button onClick={increment}>Increase</button>
      </div>
      <button>
        <Link to={"/"}>Back to Home</Link>
      </button>
    </div>
  );
};

export default About;
