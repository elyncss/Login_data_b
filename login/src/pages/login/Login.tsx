import { useEffect, useState } from "react";
import "./login.scss";

const Login = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/users")
    .then(Response => Response.json())
    .then(users => setUsers(users));
    }, [])

    console.log(users);

    const submitHandler =(e: any) => {
        e.preventDefault();
    }



  return (
    <div className="input">
      <h1>Signin</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" onChange={}/>
        <label htmlFor="password">password</label>
        <input type="text" id="password" />
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default Login;
