import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeInsightsUserUseCase } from '@/use-cases/factories/make-instagram-get-insights-user'

export async function insightsUserUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const insightsUserUseCaseBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
  })

  const { igUsername, igPassword } = insightsUserUseCaseBodySchema.parse(
    request.body,
  )

  let response

  try {
    const getInsightsUserUseCase = makeInsightsUserUseCase()

    response = await getInsightsUserUseCase.execute({
      igUsername,
      igPassword,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(200).send(response)
}
