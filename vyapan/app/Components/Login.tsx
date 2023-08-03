import { useState } from "react";

// components/LoginForm.tsx
const LoginForm: React.FC = () => {
  const [value,setValue]=useState({
    email:'',
    password:''
  })
   

  const submithandle=(e:any)=>{
    e.prevenDefault()
    console.log(value)
  }
    return (
        <div> 
            
      <form className="max-w-md mx-auto mt-8 p-4 space-y-6" onSubmit={submithandle}>
      <h1 className="text-3xl font-bold mb-6">Login Form</h1>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={value.email}
           
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm outline-none"
          />
        </div>
  
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            
            value={value.password}
            name="password"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm outline-none"
          />
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" name="rememberMe" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
  
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>
  
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </div>
  
        <div className="text-sm text-center">
          <span className="text-gray-600">Don't have an account?</span>{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Register
          </a>
          {' | '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Terms and Conditions
          </a>
        </div>
      </form>
      </div>
    );
  };
  
  export default LoginForm;
  