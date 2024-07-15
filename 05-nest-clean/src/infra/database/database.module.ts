import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaAnswerAttachmentRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository'

@Module({
  providers: [
    PrismaService,
    PrismaAnswerRepository,
    PrismaAnswerAttachmentRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswerRepository,
    PrismaAnswerAttachmentRepository,
    PrismaAnswerCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],
})
export class DatabaseModule {}
