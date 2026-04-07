import { useContext } from "react";
import { UserContext } from "../useContexts/useContext";

const Clind = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>This Children Page and onwer name is {user}</div>
      <button onClick={() => setUser("JK Roy")}>Click me !</button>
    </div>
  );
};

export default Clind;
