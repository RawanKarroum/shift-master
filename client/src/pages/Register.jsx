import React from 'react'
import { useState } from 'react'

export default function Register() {
  const [data, setData] = useState({
    name:'',
    email:'', 
    password:'' 
  })

  const registerUser = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>
          Name
        </label>
        < input type='text' placeholder='Enter name...'/>

        <label>
          Email
        </label>
        < input type='email' placeholder='Enter email...'/>

        <label>
          Password
        </label>
        < input type='password' placeholder='Enter password...'/>

        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
