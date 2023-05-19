import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'

interface InstagramPostUseCaseRequest {
  igUsername: string
  igPassword: string
  urlImg: string
}

interface InstagramPostUseCaseResponse {
  photo: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostUseCase {
  constructor() {}

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
      throw new Error('Invalid username or password')
    }

    return { photo }
  }
}
