import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'
import {
  InstagramPublishRepository,
  WatchingUserStoriesResponse,
} from '@/repositories/instagram-publish-repository'

interface InstagramFindUserStoriesAndWatchingUseCaseRequest {
  igUsername: string
  igPassword: string
  watchingStoriesUsername: string
}

interface InstagramFindUserStoriesAndWatchingUseCaseResponse {
  userStoriesWatching: WatchingUserStoriesResponse
}

export class InstagramFindUserStoriesAndWatchingUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    igUsername,
    igPassword,
    watchingStoriesUsername,
  }: InstagramFindUserStoriesAndWatchingUseCaseRequest): Promise<InstagramFindUserStoriesAndWatchingUseCaseResponse> {
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
