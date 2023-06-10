import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetAllInfoUserUseCase } from '@/use-cases/factories/make-instagram/make-instagram-get-info-post-by-id'

export async function getInfoPostByIdUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getInfoPostByIdUseCaseBodySchema = z.object({
    postId: z.string(),
  })

  const { postId } = getInfoPostByIdUseCaseBodySchema.parse(request.params)

  let response

  try {
    const getInfoPostByIdUseCase = makeGetAllInfoUserUseCase()

    response = await getInfoPostByIdUseCase.execute({
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
