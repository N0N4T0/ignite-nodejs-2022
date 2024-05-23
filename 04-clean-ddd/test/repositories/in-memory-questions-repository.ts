import { QuestionsRepository } from '@/domain/forun/application/repositories/questions-repository'
import { Question } from '@/domain/forun/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async create(answer: Question) {
    this.items.push(answer)
  }
}
