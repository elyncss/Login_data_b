import { useState} from "react";
import "./App.scss";
import Header from "./pages/headre/header";
import Profile from "../src/pages/profile/profile";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(props: any) {
  const [token, setToken] = useState(false);

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
