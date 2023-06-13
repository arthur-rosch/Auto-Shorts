import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeDownloaderUseCase } from '@/use-cases/factories/make-instagram/make-instagram-downloader'

export async function downloaderUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const downloaderUseCaseBodySchema = z.object({
    postUrl: z.string(),
  })

  const { postUrl } = downloaderUseCaseBodySchema.parse(request.body)

  let response

  try {
    const downloaderUseCase = makeDownloaderUseCase()

    response = await downloaderUseCase.execute({
      postUrl,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(200).send(response)
}
