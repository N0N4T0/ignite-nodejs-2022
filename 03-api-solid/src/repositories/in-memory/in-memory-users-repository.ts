// TODO this is a mock only to test
import { UsersRepository } from '../users-repository'

interface User {
  id: string
  name: string
  email: string
  password_hash: string
  created_at: Date
}

// TODO review implementation

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)

    const response = user ?? null

    return Promise.resolve(response)
  }

  async create(data: User) {
    const user = this.users.push(data)

    let newUser: User = {
      id: '0',
      name: 'teste',
      email: 'teste@gmail.com',
      password_hash: 'asdasdas',
      created_at: new Date(),
    }

    const response = this.users.find((findUser) => findUser.id === `${user}`)

    if (response) {
      newUser = response

      return Promise.resolve(newUser)
    }

    return Promise.resolve(newUser)
  }
}
