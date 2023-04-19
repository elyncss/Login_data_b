import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./pages/headre/header";
import Profile from "../src/pages/profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(props: any) {
  const [token, setToken] = useState(false);

  console.log(token);

  // useEffect(() => {
  //   const storedName = localStorage.getItem('username');
  //   const storedPassword = localStorage.getItem('userpassword');
  //   if(storedName && storedPassword) {
  //     setToken(true);
  //     // window.location.href = '/profile';
      
  //   }
  // },);

  return (
    <div className="wrapper">
      <Header />
      {!token && <Login setToken = {setToken}/>}
      <ToastContainer />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
