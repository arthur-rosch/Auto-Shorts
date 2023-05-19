import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'
import {
  InstagramPublishRepository,
  WatchingUserStoriesResponse,
} from '@/repositories/instagram-publish-repository'

interface InstagramUserStoriesWatchingUseCaseRequest {
  igUsername: string
  igPassword: string
  watchingStoriesUsername: string
}

interface InstagramUserStoriesWatchingUseCaseResponse {
  userStoriesWatching: WatchingUserStoriesResponse
}

export class InstagramUserStoriesWatchingUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    igUsername,
    igPassword,
    watchingStoriesUsername,
  }: InstagramUserStoriesWatchingUseCaseRequest): Promise<InstagramUserStoriesWatchingUseCaseResponse> {
    const loggedInUser = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loggedInUser.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const userStoriesWatching =
      await this.instagramRepository.watchingUserStories(
        watchingStoriesUsername,
      )

    return { userStoriesWatching }
  }
}
