import { FastifyInstance } from 'fastify'
import { instagramPost } from './controllers/instagramPost'

export async function appRoutes(app: FastifyInstance) {
  app.post('/instagramPost', instagramPost)
}
