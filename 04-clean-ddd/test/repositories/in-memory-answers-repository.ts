import { AnswersRepository } from '@/domain/forun/application/repositories/answers-repository'
import { Answer } from '@/domain/forun/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
