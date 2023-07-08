// import { Prisma } from '@prisma/client'
// TODO this is a mock only to test

interface UserCreateInput {
  id?: string | undefined
  name: string
  email: string
  password_hash: string
  created_at?: string | Date | undefined
}

export class InMemoryUsersRepository {
  public users: any = []

  async create(data: UserCreateInput) {
    this.users.push(data)
  }
}
