import Link from 'next/link'

const Register = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-l from-red-600 to-red-900">
      <div className="shadow-lg p-14 bg-white rounded-md">
        <h1 className="text-3xl font-bold mb-8">Register</h1>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="w-60 border border-gray-300 p-2 mb-4"
          />
          <input
            type="password"
            placeholder="Email"
            className="border border-gray-300 p-2 mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 mb-2"
          />
          <Link href="/login" className="mb-2 ">
            <p className="cursor-pointer transition-all hover:text-gray-600">
              Login
            </p>
          </Link>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 py-4 rounded-md transition-all hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  )
}

export default Register
