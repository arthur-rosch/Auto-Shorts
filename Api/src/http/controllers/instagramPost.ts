import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeInstagramPostUseCase } from '@/use-cases/factories/make-instagram-post'

export async function instagramPost(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const instagramPostBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
    urlImg: z.string(),
  })

  const { igUsername, igPassword, urlImg } = instagramPostBodySchema.parse(
    request.body,
  )

  try {
    const instagramPostUseCase = makeInstagramPostUseCase()

    await instagramPostUseCase.execute({
      igUsername,
      igPassword,
      urlImg,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
