import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { ToastContainer, toast } from 'react-toastify';

const Login = (props: any) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('userpassword');
    if(storedName && storedPassword) {
      props.setToken(true);

      
    }
  }, []);



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
      props.setToken(true);
      navigate('/profile');
      
    }else {
      console.log('wrong name and password')
      toast.error(' Wrong name and password!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
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
