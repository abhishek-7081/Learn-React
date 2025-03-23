import React, { useContext} from "react";
import usercontext from "../userContext/userContext";

const Profile = () => {
  const { user } = useContext(usercontext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      Welcome {user.userName}
      <br/>
      Password is {user.userPassword}
    </div>
  );
};

export default Profile;
