import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'

interface InstagramPostVideosUseCaseRequest {
  igUsername: string
  igPassword: string
  urlVideo: string
  urlCoverImage: string
}

interface InstagramPostVideosUseCaseResponse {
  videoPosted: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostVideosUseCase {
  constructor(private instagramRepository: InstagramRepository) {}

  async execute({
    igUsername,
    igPassword,
    urlVideo,
    urlCoverImage,
  }: InstagramPostVideosUseCaseRequest): Promise<InstagramPostVideosUseCaseResponse> {
    const loggedInUser = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loggedInUser.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const videoPosted = await this.instagramRepository.publishVideo(
      urlVideo,
      urlCoverImage,
    )

    return { videoPosted }
  }
}
