import { useState } from "react"

const Login = () => {

  const [currentState, setCurrentState] = useState("Sign Up");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
      {currentState === "Login" ? "" : <input required type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-800" />}
      <input required type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-800" />
      <input required type="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-800" />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {
          currentState === "Login"
          ? <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create account</p>
          : <p onClick={() => setCurrentState("Login")} className="cursor-pointer">Login here</p>
        }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default Login