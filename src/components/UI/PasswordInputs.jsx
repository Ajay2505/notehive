import { useState } from "react";


export default function PasswordInputs() {
   const [password, setPassword] = useState("");
   const [valid, setValid] = useState("");

   return(
      <>
         <input name="initPassword" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={7} type="password" className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2"  autoComplete="off" placeholder="Password" />
         <input name="password" onChange={(e) => setValid(e.target.value === password)} required minLength={7} type="password" className={`${valid ? "focus:border-[#f5ba13]" : "focus:border-red-500"} outline-none border rounded-md focus:border p-2`}  autoComplete="off" placeholder="Password" />
      </>
   );
}