import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLogIn = () => {
  const auth = getAuth();

  // ⭐ provider create করতে হবে (এটাই missing ছিল)
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("User:", user);
      console.log("Name:", user.displayName);
      console.log("Email:", user.email);
      console.log("UID:", user.uid);

    } catch (error) {
      console.log("Error Code:", error.code);
      console.log("Error Message:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogIn;
