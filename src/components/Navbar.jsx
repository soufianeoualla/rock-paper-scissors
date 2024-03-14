'use client'
import { unSetToken } from "@/lib/auth";
import { UserContext } from "@/lib/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const router = useRouter()
  const {user,setUser}=useContext(UserContext)

  const handleLogout = () => {
    unSetToken();
    setUser(false)
    router.push('/');
  };

  return (
      <div>
        { !user ? (
          <div>
            <Link href="/login" className="Login">
              Login
            </Link>
          </div>
        ): (
          <div>
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        )}
      </div>
  
  );
};

export default Navbar;
