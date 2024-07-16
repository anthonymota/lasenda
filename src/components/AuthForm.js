import React from 'react'
import { Form,useNavigation, Link, useSearchParams} from 'react-router-dom'

export default function AuthForm() {
  const [searchParams]=useSearchParams()
  const isLogin=searchParams.get('mode')==='login';
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';



  return (
    <div><h1>{isLogin ? "Log In" : "Sign Up"}</h1>
      <Form method='post'>
        <p><label htmlFor='email'>Email</label>
          <input type='email ' name='email' required></input></p>
        <p><label htmlFor='password'>Password</label>
          <input type='text' name='password' required></input></p>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>{isLogin ? "Sign Up" : "Login"}</Link>
          <button disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Save'}
      </button>
      </Form>
    </div>
  )
}
