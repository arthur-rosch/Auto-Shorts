import { InstagramRepository } from '@/repositories/instagram/instagram-repository'
import { InstagramUserStoriesWatchingUseCase } from '../instagram-user-stories-watching'

export function makeUserStoriesWatchingUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramUserStoriesWatchingUseCase =
    new InstagramUserStoriesWatchingUseCase(instagramRepository)

  return instagramUserStoriesWatchingUseCase
}
