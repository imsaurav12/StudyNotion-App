import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SignUpForm = (setIsLoggedIn) => {
   
    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    
    }
    ;

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Kindly Enter Same Password! ")
        }

    }
    const [showPassword,setShowPassword] = useState(false);
    const [showCnfPassword,setCnfShowPassword] = useState(false);
    

  return (
    <div>
        {/* Student-Instructor Tab */}

        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* First Name and Last Name Box */}
            <div>
                <label>
            <p>
                First Name<sup>*</sup>
            </p>
            <input
            required
            type='text'
            value={formData.firstName}
            onChange={changeHandler}
            name='firstName'
            placeholder='First Name'
            />
                </label>
                <label>
            <p>
                Last Name<sup>*</sup>
            </p>
            <input
            required
            type='text'
            value={formData.lastName}
            onChange={changeHandler}
            name='lastName'
            placeholder='Enter Last Name'
            />
                </label>
            </div>
            {/* Email */}
            <div>
                <label>
                    <p>
                        Email Address<sup>*</sup>
                    </p>
                    <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    name='email'
                    placeholder='Enter Email address'
                    />
                </label>
            </div>
            {/* Create Password */}
            <div>
                <label>
                        <p>
                            Create Password<sup>*</sup>
                        </p>
                        <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        name='password'
                        placeholder='Enter Password'
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
                    <label>
                        <p>
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                        required
                        type={showCnfPassword ? ("text") : ("password")}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        />
                        <span onClick={() => setCnfShowPassword((prev) => !prev)}>
                                {showCnfPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
            </div>
            {/* Create Account Button */}
            <button>
                Create an Account
            </button>

        

        </form>
      
    </div>
  )
}

export default SignUpForm
