import React, { useState } from "react";
import logo from "/home/dhruba/amazon/amazon-clone/src/images/Amazon_darklogo.png";
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Registraton = () => {
  const[clientName, setClientName]=useState('');
  const[number, setNumber]=useState('');
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
//err msg start
const[errClientName, setErrClientName]=useState('');
  const[errNumber, setErrNumber]=useState('');
  const[errEmail, setErrEmail]=useState('');
  const[errPassword, setErrPassword]=useState('');

 

  const handleName =(e)=>{
    setClientName(e.target.value)
    setErrClientName("")
  }
  const handleNumber =(e)=>{
    setNumber(e.target.value)
    setErrNumber("")
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
    setErrPassword("")
  }
//email validation
const emailValidation =(email)=>{
 return String(email).toLowerCase().match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
}


  const handleRegistration =(e)=>{
    e.preventDefault()
    if(!clientName){
      setErrClientName("Enter Your Name")
    }
    if(!number){
      setErrNumber("Enter Your Number")
    }

    if(!email){
      setErrEmail("Enter Your Email")
    }else{
      if(!emailValidation(email)){
        setErrEmail("Enter a Valid Email")
      }
    }

    if(!password){
      setErrPassword("Enter Your Password")
    }else{
      if(password.length < 6){
        setErrPassword("Passwords must be at least 6 characters.")
      }
    }

    if(clientName && number && email && emailValidation(email) && password && password.length >=6){
      console.log(clientName,number,email,password);
      setClientName("")
      setNumber("")
      setEmail("")
      setPassword("")
    }


  }
  return (
    <div className="w-full ">
      <div className="w-full bg-lightgray pb-10 ">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32 py-2" src={logo} alt="logo" />
          <div className="w-full border border-bluegray p-6">
            <h2 className="text-3xl font-serif font-medium mb-4 ">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium font-serif">Your Name</p>
                <input onChange={handleName} value={clientName}
                  className="w-full  py-1 border border-bluegray px-2 text-base rounded-sm 
                      outline-none focus-within:border-darkyellow focus-within:shadow-boxInput duration-100"
                  type="text"  PlaceHolder="First and Last Name"
                />
                {errClientName && <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center
                 gap-2 -mt-1.5"> <span className="italic font-sans font-extrabold text-base">!</span>{errClientName}</p>}
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium font-serif">
                    Mobile Number
                  </p>
                  <input onChange={handleNumber} value={number}
                    className="w-full py-1 border border-bluegray px-2 text-base rounded-sm 
                      outline-none focus-within:border-darkyellow focus-within:shadow-boxInput duration-100"
                    type="number" PlaceHolder=" Mobile Number"
                  />
                  {errNumber && <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center
                 gap-2 -mt-1.5"> <span className="italic font-sans font-extrabold text-base">!</span>{errNumber}</p>}
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium font-serif">
                    Email(optional)
                  </p>
                  <input onChange={handleEmail} value={email}
                    className="w-full py-1 border border-bluegray px-2 text-base rounded-sm 
                      outline-none focus-within:border-darkyellow focus-within:shadow-boxInput duration-100"
                    type="email" PlaceHolder=" Enter Your Email"
                  />
                  {errEmail && <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center
                 gap-2 -mt-1.5"> <span className="italic font-sans font-extrabold text-base">!</span>{errEmail}</p>}
              </div>
              <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium font-serif">Password</p>
                  <input onChange={handlePassword} value={password}
                    className="w-full  py-1 border border-bluegray px-2 text-base rounded-sm 
                      outline-none focus-within:border-darkyellow focus-within:shadow-boxInput duration-100"
                    type="password" PlaceHolder="At Least 6 Characters" 
                  />
                  {errPassword && <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center
                 gap-2 -mt-1.5"> <span className="italic font-sans font-extrabold text-base">!</span>{errPassword}</p>}

                  <p className="text-xs text-blue  cursor-pointer group  ">
                    <span className="italic font-sans font-extrabold text-base">!<span className="text-darkblue text-xs ml-2">
                      Passwords must be at least 6 characters.
                    </span></span>
                  
                  </p>
              </div> 
              <p className="text-xs text-black leading-4 mt-4">
                  By enrolling your mobile phone number, you consent to receive
                  automated security notifications via text message from Amazon.
                  Message and data rates may apply.
                </p>
                <button onClick={handleRegistration} 
                  className="w-full font-serif font-medium text-base bg-gradient-to-tr from-yellow to-lightyellow
             hover:from-darkyellow hover:to-mdyellow
             border-darkyellow hover:border-yellow active:bg-gradient-to-bl active:from-yellow 
             active:to-darkyellow duration-200 py-1.5 rounded-md mt-4 "
                >
                  Continue
                </button>
            </div>
        
             <div className="mt-3">
                  <p className="text-xs text-darkblue">
                    Already have an account?
                  
                  <Link to="/signin">
                  <span
                      className=" text-xs text-blue hover:text-darkyellow hover:underline underline-offset-1 
                cursor-pointer duration-100"
                    >
                      Sign in
                      <span>
                        <ArrowRight />{" "}
                      </span>
                    </span>
                    </Link>

                  </p>
                  <p className="text-xs text-darkblue -mt-2">
                    Buying for work?
                    <span
                      className=" text-xs text-blue hover:text-darkyellow hover:underline underline-offset-1 
                cursor-pointer duration-100"
                    >
                      Create a free business account
                      <ArrowRight />
                    </span>
                  </p>
                </div>
                <p className="text-xs text-black leading-4 mt-4">
                  By creating an account or logging in, you agree to Amazon's{" "}
                  <span className="text-blue">Conditions of Use {""}</span> and{" "}
                  <span className="text-blue">Privacy Policy.</span>
            </p>
          </div>
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
};

export default Registraton;
