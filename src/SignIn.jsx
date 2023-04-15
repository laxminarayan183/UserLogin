import React, { useEffect, useState } from 'react'
import{auth,provider} from'./firebase';
import { signInWithPopup } from 'firebase/auth';
import User from './User';
import GoogleButton from 'react-google-button';

const SignIn = () => {
    const [value,setValue] = useState('');
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
         setValue(data.user.email)
         localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[])
  return (
    <div className='d-flex justify-content-center my-4'>
        {value?<User/>:
      <GoogleButton onClick={handleClick}/>
    }
    </div>
  )
}

export default SignIn
