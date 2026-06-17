import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center h-screen bg-[#313338]">
      <div className="bg-[#1E1F22] p-8 rounded-xl w-96">
        <h2 className="text-3xl font-bold mb-6">
          Login
        </h2>

        <input
          className="w-full p-3 mb-4 rounded bg-[#2B2D31]"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded bg-[#2B2D31]"
          placeholder="Password"
        />

        <button
          className="w-full bg-[#5865F2] p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;