'use client'
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
  const {user,setUser}=useContext(UserContext)
  

  const router = useRouter()
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const[message,setMessge]=useState()
  
  useEffect(()=>{
    if(user){
      router.push('/')
    }
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Clear error message when user starts typing
    setError({ ...error, [name]: "" });
  };

  const validate = () => {
    let isValid = true;

    if (data.username.trim() === "") {
      setError((prev) => ({
        ...prev,
        username: "Can't be empty"
      }));
            isValid = false;
    }

    if (data.email.trim() === "") {
      setError((prev) => ({
        ...prev,
        email: "Can't be empty"
      }));
            isValid = false;
    }

    if (data.password.trim() === "") {
      setError((prev) => ({
        ...prev,
        password: "Can't be empty"
      }));
            isValid = false;
    }

    if (data.confirmPassword.trim() === "") {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Can't be empty"
      }));
            isValid = false;
    } else if (data.confirmPassword !== data.password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Not Matched"
      }));
      
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:1337/api/auth/local/register",
          {
            username: data.username,
            email: data.email,
            password: data.password,
          }
        );

        const userData = response.data;
        setToken(userData)
        setUser(true)
        router.push('/')
      } catch (error) {
        setMessge(error.response.data.error.message)

        // Handle error
      }
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
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
          {error.username && <p className="error">{error.username}</p>}
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
          {error.email && <p className="error">{error.email}</p>}
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
          {error.password && <p className="error">{error.password}</p>}
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <p className="error">{error.confirmPassword}</p>
          )}
        </label>
        {message && (
            <p className="error">{message}</p>
          )}

        <button type="submit">Sign Up</button>
        <p> Do you already have an account? <Link href={'/login'}>Sign in</Link> </p>

      </form>
    </div>
  );
};

export default Page;
