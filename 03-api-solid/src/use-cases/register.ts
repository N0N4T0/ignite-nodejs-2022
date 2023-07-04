import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

import { PrismaUserRepository } from '@/repositories/prisma-users-repositories'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export async function registerUsecase({
  email,
  name,
  password,
}: RegisterUseCaseRequest) {
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('E-mail already exists')
  }

  const prismaUsersRepository = new PrismaUserRepository()

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  })
}
