import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

interface InstagramPostUseCaseRequest {
  igUsername: string
  igPassword: string
  urlImg: string
}

interface InstagramPostUseCaseResponse {
  publishPhotoResponse: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostUseCase {
  constructor(private instagramRepository: InstagramRepository) {}

  async execute({
    igUsername,
    igPassword,
    urlImg,
  }: InstagramPostUseCaseRequest): Promise<InstagramPostUseCaseResponse> {
    const loginUserResponse = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loginUserResponse.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const publishPhotoResponse = await this.instagramRepository.publishPhoto(
      urlImg,
      'Teste',
    )

    return { publishPhotoResponse }
  }
}
