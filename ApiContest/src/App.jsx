import "./App.css";
import Login from "./components/login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./userContext/userContextProvide.jsx";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>

  );
}

export default App;
