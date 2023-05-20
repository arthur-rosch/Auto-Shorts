import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetAllInfoUserUseCase } from '@/use-cases/factories/make-instagram-get-all-info'

export async function getAllInfoUserUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getAllInfoUserUseCaseBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
  })

  const { igUsername, igPassword } = getAllInfoUserUseCaseBodySchema.parse(
    request.body,
  )
  console.log(request.body)

  let response

  try {
    const getAllInfoUserUseCase = makeGetAllInfoUserUseCase()

    response = await getAllInfoUserUseCase.execute({
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
