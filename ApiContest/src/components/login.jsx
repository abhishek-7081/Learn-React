import React, { useContext, useState } from "react";
import usercontext from "../userContext/userContext.js";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const { setuser } = useContext(usercontext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed missing parentheses
    console.log("Form submitted");
    setuser({ userName, userPassword }); // Ensure correct function usage
  };

  return (
    <>
      <div>Please Login</div>

      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={userPassword}
        onChange={(e) => setuserPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Login;
