import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeUserStoriesWatchingUseCase } from '@/use-cases/factories/make-instagram-user-stories-watching'

export async function userStoriesWatching(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userStoriesWatchingBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
    watchingStoriesUsername: z.string(),
  })

  const { igUsername, igPassword, watchingStoriesUsername } =
    userStoriesWatchingBodySchema.parse(request.body)

  let response

  try {
    const userStoriesWatching = makeUserStoriesWatchingUseCase()

    response = await userStoriesWatching.execute({
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
