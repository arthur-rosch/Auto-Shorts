import {
  InstagramPublishRepository,
  WatchingUserStoriesResponse,
} from '@/repositories/instagram-publish-repository'

interface InstagramFindUserStoriesAndWatchingUseCaseRequest {
  watchingStoriesUsername: string
}

interface InstagramFindUserStoriesAndWatchingUseCaseResponse {
  userStoriesWatching: WatchingUserStoriesResponse
}

export class InstagramFindUserStoriesAndWatchingUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    watchingStoriesUsername,
  }: InstagramFindUserStoriesAndWatchingUseCaseRequest): Promise<InstagramFindUserStoriesAndWatchingUseCaseResponse> {
    const userStoriesWatching =
      await this.instagramRepository.watchingUserStories(
        watchingStoriesUsername,
      )

    return { userStoriesWatching }
  }
}
