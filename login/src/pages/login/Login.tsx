import { useEffect, useRef, useState } from "react";
import "./login.scss";

const Login = (props: any) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');



  const submitHandler = async (e:any) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    const names = data.map(item => (item.name))
    const passwords = data.map(item => (item.password))

    const activeName = names.find(na => na === name);
    const activePassword = passwords.find(na => na === password);


    if(activeName && activePassword) {
      localStorage.setItem('username', activeName);
      localStorage.setItem('userpassword', activePassword);
      
    }
  };
  


  return (
    <div className="input">
      <h1>Signin</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="password">password</label>
        <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default Login;
