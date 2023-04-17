import { useEffect, useState } from "react";
import "./login.scss";

const Login = () => {

    const [users, setUsers] = useState([]);
    const [inp, setInp] = useState("")


    // useEffect(() => {
    //     fetch("http://localhost:3000/users?name"+inp)
    // .then(Response => Response.json())
    // .then(users => setUsers(users));
    // }, [])

    console.log(users);

    const submitHandler =(e: any) => {
        e.preventDefault();
        fetch(`http://localhost:3000/users?name=${inp}`)
        .then(Response => Response.json())
        .then(data => {setUsers(data)
        }
            );
    }



  return (
    <div className="input">
      <h1>Signin</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" onChange={(e)=>{setInp(e.target.value)}}/>
        <label htmlFor="password">password</label>
        <input type="text" id="password" />
        <input type="submit" className="btn"  />
      </form>
    </div>
  );
};

export default Login;
