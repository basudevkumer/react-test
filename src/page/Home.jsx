import React from "react";
import { Link } from "react-router";
import counter from "../axiosRequest/store/counter";

const Home = () => {
  const {count,increment} = counter((state) => state);

  

  return (
    <div>
      <h1>This is Home Pages</h1>

      <div className="p-10">
        <h1>Global Counter is {count}</h1>
        <button onClick={increment}>Increase</button>
      </div>

      <button>
        <Link to={"/about"}>Route about page</Link>
      </button>
    </div>
  );
};

export default Home;
