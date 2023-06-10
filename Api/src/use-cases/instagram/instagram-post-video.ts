import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

interface InstagramPostVideosUseCaseRequest {
  urlVideo: string
  urlCoverImage: string
}

interface InstagramPostVideosUseCaseResponse {
  videoPosted: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostVideosUseCase {
  constructor(private instagramRepository: InstagramRepository) {}

  async execute({
    urlVideo,
    urlCoverImage,
  }: InstagramPostVideosUseCaseRequest): Promise<InstagramPostVideosUseCaseResponse> {
    const videoPosted = await this.instagramRepository.publishVideo(
      urlVideo,
      urlCoverImage,
    )

    return { videoPosted }
  }
}
