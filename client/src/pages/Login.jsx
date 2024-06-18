import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:'' 
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        //payload
        email,
        password
      });
      if(data.error){
        //display errors defined in backend
        toast.error(data.error)
      }
      else{
        setData({}); //reset input fields
        navigate('/') //navigate to homepage
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>
          Email
        </label>
        < input type='email' placeholder='Enter email...' value={data.email} onChange={(e => setData({...data, email: e.target.value}))} />

        <label>
          Password
        </label>
        < input type='password' placeholder='Enter password...' value={data.password} onChange={(e => setData({...data, password: e.target.value}))} />

        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}
