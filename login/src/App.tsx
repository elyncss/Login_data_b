import { useState } from "react";
import "./App.scss";
import Header from "./pages/headre/header";
import Profile from "../src/pages/profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App(props: any) {
  const [token, setToken] = useState(false);

  console.log(token);

  return (
    <div className="wrapper">
      <Header />
      {!token && <Login setToken = {setToken}/>}
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
