import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makePostPhotoUseCase } from '@/use-cases/factories/make-instagram-post-photo'

export async function postPhoto(request: FastifyRequest, reply: FastifyReply) {
  const postPhotoBodySchema = z.object({
    igUsername: z.string(),
    igPassword: z.string(),
    urlImg: z.string(),
  })

  const { igUsername, igPassword, urlImg } = postPhotoBodySchema.parse(
    request.body,
  )

  let response

  try {
    const postPhotoUseCase = makePostPhotoUseCase()

    response = await postPhotoUseCase.execute({
      igUsername,
      igPassword,
      urlImg,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send(response)
}
