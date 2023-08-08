import { auth, googleProvider } from "../Config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={signIn}>Sign In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default AuthPage;
