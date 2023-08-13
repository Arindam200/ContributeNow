import { auth, googleProvider } from "../Config/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"

const AuthPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.log(err)
    }
  }

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log(err)
    }
  }
  const logOut = async () => {
    try {
      await signOut(auth, googleProvider)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="dark:text-black">
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={signIn} className="dark:text-white">
        <Link to="/list">Sign In</Link>
      </button>
      <button onClick={signInWithGoogle} className="dark:text-white">
        Google
      </button>
      <button onClick={logOut} className="dark:text-white">
        Log Out
      </button>
    </div>
  )
}

export default AuthPage
