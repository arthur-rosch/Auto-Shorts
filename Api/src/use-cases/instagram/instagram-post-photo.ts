import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'

interface InstagramPostPhotoUseCaseRequest {
  urlImg: string
}

interface InstagramPostPhotoUseCaseResponse {
  photoPosted: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostPhotoUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    urlImg,
  }: InstagramPostPhotoUseCaseRequest): Promise<InstagramPostPhotoUseCaseResponse> {
    const photoPosted = await this.instagramRepository.publishPhoto(
      urlImg,
      'Teste',
    )

    return { photoPosted }
  }
}
