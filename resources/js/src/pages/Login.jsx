import React from 'react'
import { router, useForm } from '@inertiajs/react'

const Login = () => {

  const { data, setData, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const submit = (e) => {
    e.preventDefault()
    router.post('/login', data)
  }

  return (
    <>
      <section className="flex justify-center items-center w-full h-screen">
        <div className="basis-1/3 p-5 bg-white rounded-md shadow-md">
          <h1 className='mb-2 font-medium text-2xl text-center'>Login Admin</h1>
          <form onSubmit={submit} className="p-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="w-full py-1.5 px-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                <input
                  type="password"
                  name="username"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="w-full py-1.5 px-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button type="submit" className="mt-3 py-1 px-5 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-700">Login</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login