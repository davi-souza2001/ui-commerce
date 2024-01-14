'use client'
import { client } from '@/data/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createLoginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório!')
    .email('Formato de e-mail inválido!')
    .toLowerCase(),
  password: z.string().min(4, 'A senha está incorreta!'),
})

type CreateLoginFormData = z.infer<typeof createLoginFormSchema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLoginFormData>({
    resolver: zodResolver(createLoginFormSchema),
  })

  const handleLogin = async (data: CreateLoginFormData) => {
    console.log(data)
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-l from-red-600 to-red-900">
      <div className="shadow-lg p-14 bg-white rounded-md">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            type="email"
            placeholder="E-mail"
            className="w-60 border border-gray-300 p-2 mb-4"
            {...register('email')}
          />
          {errors?.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 mb-2"
            {...register('password')}
          />
          {errors?.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Link href="/register" className="mb-2 ">
            <p className="cursor-pointer transition-all hover:text-gray-600">
              Register
            </p>
          </Link>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 py-4 rounded-md transition-all hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login
