import { FastifyInstance } from 'fastify'

import { postPhoto } from './controllers/instagram-post-photo'
import { postVideo } from './controllers/instagram-post-video'
import { findUserStoriesAndWatchingUseCase } from './controllers/instagram-find-user-stories-and-watching'

export async function igRoutes(ig: FastifyInstance) {
  ig.post('/postPhoto', postPhoto)
  ig.post('/postVideo', postVideo)
  ig.post('/findUserStoriesAndWatching', findUserStoriesAndWatchingUseCase)
}
