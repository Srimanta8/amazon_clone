import React, { useState } from "react";
import logo from "/home/dhruba/amazon/amazon-clone/src/images/Amazon_darklogo.png";
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";



const Signin = () => {
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');

  //err msg start
  const[errEmail, setErrEmail]=useState('');
  const[errPassword, setErrPassword]=useState('');


  const handleEmail =(e)=>{
    setEmail(e.target.value)
    setErrEmail("");
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
    setErrPassword("");
  }

  const handleLogin =(e)=>{
    e.preventDefault()
    if(!email){
      setErrEmail("Enter Your Email")
    }
    if(!password){
      setErrPassword("Enter Your Password")
    }

    if(email && password){
      console.log(email,password);
      setEmail(" ")
      setPassword("")
    }
  }

  return (
    <div className="w-full ">
      <div className="w-full bg-lightgray py-10 ">
        <form className="w-[350px] mx-auto flex flex-col items-center  ">
          <img className="w-32 py-2" src={logo} alt="logo" />
          <div className="w-full border border-bluegray p-6">
            <h2 className="text-3xl font-serif font-medium mb-4 ">Sign In</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium font-serif">
                  Email or Mobile Number
                </p>
                <input onChange={handleEmail} value={email}
                  className="w-full lowercase py-1 border border-bluegray px-2 text-base rounded-sm 
                      outline-none focus-within:border-darkyellow focus-within:shadow-boxInput duration-100"
                  type="email"
                />
                 {errEmail && <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center
                 gap-2 -mt-1.5"> <span className="italic font-sans font-extrabold text-base">!</span>{errEmail}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium font-serif">Password </p>
                <input onChange={handlePassword} value={password}
                  className="w-full lowercase py-1 border border-bluegray px-2 text-base rounded-sm 
                      outline-none focus-within:border-darkyellow focus-within:shadow-boxInput duration-100"
                  type="password"
                />
                 {errPassword && <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center
                 gap-2 -mt-1.5"> <span className="italic font-sans font-extrabold text-base">!</span>{errPassword}</p>}
              </div>
              <button onClick={handleLogin} 
                className="w-full font-serif font-medium text-base bg-gradient-to-tr from-yellow to-lightyellow
             hover:from-darkyellow hover:to-mdyellow
             border-darkyellow hover:border-yellow active:bg-gradient-to-bl active:from-yellow 
             active:to-darkyellow duration-200 py-1.5 rounded-md mt-4 "
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue">Conditions of Use {""}</span> and{" "}
              <span className="text-blue">Privacy Notice.</span>
            </p>
            <p className="text-xs text-gray mt-4 cursor-pointer group ">
              <ArrowRight />
              <span className="text-blue group-hover:text-darkyellow group-hover:underline underline-offset-1">
                Need Help?
              </span>
            </p>
          </div>
          <p className="w-full text-xs text-gray mt-4 flex items-flex">
            <span className="w-1/3 h-[1px] bg-bluegray inline-flex "></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-bluegray inline-flex"></span>
          </p>

          <Link className="w-full" to="/registraton">
            <button 
              className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-zinc-300 to-slate-100
           hover:bg-gradient-to-b border border-bluegray active:border-yellow  active:shadow-boxInput"
            >
              Create Your Amazon Account
            </button>
          </Link>
        </form>
      </div>
      <div
        className="w-full bg-gradient-to-t from-white via-white to-slate-300 h-20 
      flex flex-col gap-4 justify-center items-center py-10"
      >
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue hover:text-yellow hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use{" "}
          </p>
          <p className="text-xs text-blue hover:text-yellow hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice{" "}
          </p>
          <p className="text-xs text-blue hover:text-yellow hover:underline underline-offset-1 cursor-pointer duration-100">
            Help
          </p>
        </div>
        <p className="text-xs text-bluegray">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Signin;
