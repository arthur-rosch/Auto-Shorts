import { FastifyInstance } from 'fastify'
import { postPhoto } from './controllers/instagram-post-photo'
import { postVideo } from './controllers/instagram-post-video'
import { userStoriesWatching } from './controllers/instagram-user-stories-watching'

export async function appRoutes(app: FastifyInstance) {
  app.post('/ig/postPhoto', postPhoto)
  app.post('/ig/postVideo', postVideo)
  app.post('/ig/userStoriesWatching', userStoriesWatching)
}
