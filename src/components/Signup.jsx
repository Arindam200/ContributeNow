import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      props.setIsAuth(true);
      localStorage.setItem("user", true);
      navigate("/list");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* signUp */}

      <div className="grid gap-y-4">
        {/* <!-- Form Group --> */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              onChange={(e) => setEmail(e.target.value)}
              required
              // aria-describedby="email-error"
            />
            <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                // aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Form Group --> */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm mb-2 dark:text-white"
          >
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="password-error"
            />
            <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="password-error">
            8+ characters required
          </p>
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Form Group --> */}
        {/* <div>
                      <label
                        htmlFor="confirm-password"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirm-password"
                          name="confirm-password"

                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"

                          required
                          aria-describedby="confirm-password-error"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="confirm-password-error"
                      >
                        Password does not match the password
                      </p>
                    </div> */}
        {/* <!-- End Form Group --> */}

        {/* <!-- Checkbox --> */}
        {/* <div className="flex items-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              I accept the{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div> */}
        {/* <!-- End Checkbox --> */}

        <button
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={signUp}
        >
          Sign up
        </button>
      </div>
    </>
  );
}
