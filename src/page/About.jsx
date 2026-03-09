import React from "react";
import { Link } from "react-router";
import counter from "../axiosRequest/store/counter";

const About = () => {
  const { count, increment } = counter((state) => state);

  return (
    <div>
      <h4>This is navbar Pages and Component</h4>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur
        blanditiis, nobis unde hic consequuntur velit deserunt cum tenetur
        reiciendis labore magni, animi ratione voluptas dignissimos, quam
        necessitatibus provident minima.
      </p>

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
