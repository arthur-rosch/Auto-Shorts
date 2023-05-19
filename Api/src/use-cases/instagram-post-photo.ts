import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'

interface InstagramPostPhotoUseCaseRequest {
  igUsername: string
  igPassword: string
  urlImg: string
}

interface InstagramPostPhotoUseCaseResponse {
  photoPosted: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostPhotoUseCase {
  constructor(private instagramRepository: InstagramRepository) {}

  async execute({
    igUsername,
    igPassword,
    urlImg,
  }: InstagramPostPhotoUseCaseRequest): Promise<InstagramPostPhotoUseCaseResponse> {
    const loggedInUser = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loggedInUser.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const photoPosted = await this.instagramRepository.publishPhoto(
      urlImg,
      'Teste',
    )

    return { photoPosted }
  }
}
