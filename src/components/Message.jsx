'use client'
import { UserContext } from "@/lib/authContext"
import { useContext } from "react"

const Message = () => {
    const {user} =useContext(UserContext)
  return (
    <div className="message">
      {!user && "You are not signed in Please sign in to have access to the games"}
    </div>
  )
}

export default Message
