import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetAllInfoUserUseCase } from '@/use-cases/factories/make-instagram-get-info-post-by-id'

export async function getInfoPostByIdUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getInfoPostByIdUseCaseBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
    postId: z.string(),
  })

  const { igUsername, igPassword, postId } =
    getInfoPostByIdUseCaseBodySchema.parse(request.body)

  let response

  try {
    const getInfoPostByIdUseCase = makeGetAllInfoUserUseCase()

    response = await getInfoPostByIdUseCase.execute({
      igUsername,
      igPassword,
      postId,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(200).send(response)
}
