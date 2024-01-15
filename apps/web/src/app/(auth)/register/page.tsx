'use client'
import { client } from '@/data/axios'
import { useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createRegisterFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  email: z
    .string()
    .min(1, 'E-mail é obrigatório!')
    .email('Formato de e-mail inválido!')
    .toLowerCase(),
  password: z.string().min(4, 'A senha precisa ter no mínimo 4 caracteres!'),
})

type CreateRegisterFormData = z.infer<typeof createRegisterFormSchema>

const Register = () => {
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRegisterFormData>({
    resolver: zodResolver(createRegisterFormSchema),
  })

  const handleRegister = async (data: CreateRegisterFormData) => {
    try {
      const user = await client.post('/user/create', { data })

      if (user.data) {
        console.log(user.data)
        toast({
          position: 'top-right',
          title: 'Success',
          isClosable: true,
          status: 'success',
        })
      }
    } catch (error: any) {
      toast({
        position: 'top-right',
        title: error.response.data.message ?? 'Error',
        isClosable: true,
        status: 'error',
      })
    }
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-l from-red-600 to-red-900">
      <div className="shadow-lg p-14 bg-white rounded-md">
        <h1 className="text-3xl font-bold mb-8">Register</h1>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleRegister)}
        >
          <input
            type="text"
            placeholder="Username"
            className="w-60 border border-gray-300 p-2 mb-4"
            {...register('name')}
          />
          {errors?.name?.message && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 mb-2"
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
