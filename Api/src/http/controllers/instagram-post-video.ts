import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makePostVideoUseCase } from '@/use-cases/factories/make-instagram/make-instagram-post-video'

export async function postVideo(request: FastifyRequest, reply: FastifyReply) {
  const postVideoBodySchema = z.object({
    urlVideo: z.string(),
    urlCoverImage: z.string(),
  })

  const { urlVideo, urlCoverImage } = postVideoBodySchema.parse(request.body)

  let response

  try {
    const postVideoUseCase = makePostVideoUseCase()

    response = await postVideoUseCase.execute({
      urlVideo,
      urlCoverImage,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send(response)
}
