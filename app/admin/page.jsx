// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {adminLoginApi} from '../lib/api';

// export default function Admin() {
//   const router = useRouter();

//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       const res = await adminLoginApi({ phone, password });
//       const token = res.data.token;
  
//       localStorage.setItem("adminToken", token);
//       document.cookie = `adminToken=${token}; path=/`;
//       document.cookie = "role=admin; path=/";
  
//       router.push("/admin/dashboard");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };
  
  

//   return (
// <div className="min-h-screen flex items-center justify-center ">      
//   <form
//         onSubmit={handleLogin}
//         className=" p-6 rounded shadow w-80 bg-white dark:bg-gray-800/70"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">
//           Admin Login
//         </h2>

//         <input
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border p-2 mb-3 rounded"
//         />

//         <button className="w-full bg-gray-400 text-white p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminLoginApi } from "../lib/api";

export default function Admin() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await adminLoginApi({ phone, password });
      const token = res.data.token;

      localStorage.setItem("adminToken", token);
      document.cookie = `adminToken=${token}; path=/`;
      document.cookie = "role=admin; path=/";

      router.push("/admin/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8">
        
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Admin Panel
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm">
          Sign in to manage your dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300 shadow-lg hover:shadow-indigo-500/40"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}