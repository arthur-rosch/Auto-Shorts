import { FastifyInstance } from 'fastify'

import { postPhoto } from './controllers/instagram-post-photo'
import { postVideo } from './controllers/instagram-post-video'
import { findUserStoriesAndWatchingUseCase } from './controllers/instagram-find-user-stories-and-watching'

import { getAllInfoUserUseCase } from './controllers/instagram-get-all-info'
import { insightsUserUseCase } from './controllers/instagram-get-insights-user'
import { getInfoPostByIdUseCase } from './controllers/instagram-get-info-post-by-id'

export async function igRoutes(ig: FastifyInstance) {
  ig.post('/postPhoto', postPhoto)
  ig.post('/postVideo', postVideo)
  ig.post('/findUserStoriesAndWatching', findUserStoriesAndWatchingUseCase)

  ig.post('/getInfoPostById', getInfoPostByIdUseCase)
  ig.post('/getAllInfoUser', getAllInfoUserUseCase)
  ig.post('/getInsightsUser', insightsUserUseCase)
}
