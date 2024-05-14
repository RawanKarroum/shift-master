import React from 'react'

export default function Login() {

  const loginUser = () => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>
          Email
        </label>
        < input type='email' placeholder='Enter email...'/>

        <label>
          Password
        </label>
        < input type='password' placeholder='Enter password...'/>

        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}
