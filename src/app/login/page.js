"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import logo from "../../components/images/logo.svg";
import axios from "axios";
import { setToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserContext } from "@/lib/authContext";
import '../../Sass/loginSignUp.scss'
const Page = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [message,setMessge]=useState()
  const router = useRouter()
 const {user,setUser}=useContext(UserContext)
 useEffect(()=>{
  if(user){
    router.push('/')
  }
})
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/api/auth/local/", {
        identifier: data.username,
        password: data.password,
      });
  
      const user = response.data;
      setToken(user)
      router.push('/')
      setUser(true)
    } catch (error) {
      setMessge(error.response.data.error.message)
    }

  };

  return (
    <div className="login-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        {message && <p className="error">{message}</p>}

        <button type="submit">Login</button>
        <p> You don&apos;t have an account? <Link href={'/signup'}>Create One</Link> </p>
      </form>
    </div>
  );
};

export default Page;
