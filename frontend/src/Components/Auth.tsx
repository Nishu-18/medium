import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "./InputField";
import { SignUpBody } from "@nishchal_bhardwaj/medium";
import axios from "axios";


export function Auth({type}:{
  type:String
}){
    const[ postInputs,setpostInputs]=useState<SignUpBody>({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()
    return (
        <div className="h-screen flex justify-center flex-col">
          <div className="flex justify-center">
            <div>
            <div className="max-w-md text-center text-3xl font-extrabold ">
                {type=="signin"?"Log in to your account":"Create your account"}
              </div>
              <div className="text-slate-400 mb-4 text-center">
                {type=="signin"?"Don't have an account":"Already have an account"}
                <Link to={type=="signin"?"/signup":"/signin"} className="underline pl-2">{type=="signin"?"Signup":"Sign in"}</Link>
              </div>
              
              
              {/* Input Fields */}
              <div>
                 {type=="signup"?<InputField 
                  label="Name"
                  placeholder="John Doe"
                  onchange={(e) =>
                    setpostInputs({
                      ...postInputs,
                      name: e.target.value,
                    })
                  }
                />:null}
                <InputField
                  label="Email"
                  placeholder="JohnDoe@gmail.com"
                  onchange={(e) =>
                    setpostInputs({
                      ...postInputs,
                      email: e.target.value,
                    })
                  }
                />
                <InputField
                  label="Password"
                  placeholder="1235"
                  type="password"
                  onchange={(e) =>
                    setpostInputs({
                      ...postInputs,
                      password: e.target.value,
                    })
                  }
                />
                <button onClick={async function(){
                  try{
                    
                 const respose= await axios.post(`https://backend.nishchalbhardwaj2004.workers.dev/api/v1/user/${type==="signup"?"signup":"signin"}`,
                    postInputs,
                    
                   {
                    headers: {
                        "Content-Type": "application/json"
                    }})
                  
                  localStorage.setItem("token",respose.data.token)
                  navigate("/blogs")
                  
                }catch(e){
                  console.log(e);
                  alert("error signing up")
                  
                }
              } 

                  }
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-full mt-8" >
              {type=="signin"?"Sign in":"Signup"}
            </button>
                {/* Title and Subtitle */}
             
              
              </div>
            </div>
          </div>
        </div>
      );
    }      

