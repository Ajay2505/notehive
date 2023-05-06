import { useState } from "react";

export default function PasswordInputs() {
   const [password, setPassword] = useState("");
   const [valid, setValid] = useState("");

   return(
      <>
         <div className="w-full relative pt-3">
            <input name="initPassword" value={password} onChange={(e) => setPassword(e.target.value)} minLength={7} type="password" className="outline-none w-full border-2 rounded-md focus:border-2 focus:border-[#f5ba13] p-2"  autoComplete="off" placeholder="Password" />
            <label htmlFor="" className="text-xs ml-3 font-semibold duration-300">Password</label>
         </div>
         <div className="w-full relative pt-3">
            <input name="password" onChange={(e) => setValid(e.target.value === password)} minLength={7} type="password" className={`${valid ? "focus:border-[#f5ba13]" : "focus:border-red-500"} w-full outline-none border-2 rounded-md focus:border-2 p-2`}  autoComplete="off" placeholder="Comfirm Password" />
            <label htmlFor="" className="text-xs ml-3 font-semibold duration-300">Comfirm Password</label>
         </div>
      </>
   );
}