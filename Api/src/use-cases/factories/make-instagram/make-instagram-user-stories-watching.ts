import { InstagramRepository } from '@/repositories/instagram/instagram-repository'
import { InstagramFindUserStoriesAndWatchingUseCase } from '../../instagram/instagram-find-user-stories-and-watching'

export function makeFindUserStoriesAndWatchingUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramUserStoriesWatchingUseCase =
    new InstagramFindUserStoriesAndWatchingUseCase(instagramRepository)

  return instagramUserStoriesWatchingUseCase
}
