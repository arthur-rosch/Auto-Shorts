import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindUserStoriesAndWatchingUseCase } from '@/use-cases/factories/make-instagram/make-instagram-user-stories-watching'

export async function findUserStoriesAndWatchingUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findUserStoriesAndWatchingUseCaseBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
    watchingStoriesUsername: z.string(),
  })

  const { igUsername, igPassword, watchingStoriesUsername } =
    findUserStoriesAndWatchingUseCaseBodySchema.parse(request.body)

  let response

  try {
    const findUserStoriesAndWatchingUseCase =
      makeFindUserStoriesAndWatchingUseCase()

    response = await findUserStoriesAndWatchingUseCase.execute({
      igUsername,
      igPassword,
      watchingStoriesUsername,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(200).send(response)
}
