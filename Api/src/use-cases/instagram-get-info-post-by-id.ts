import { MediaInfoResponseRootObject } from 'instagram-private-api'
import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'

interface InstagramGetInfoPostByIdUseCaseRequest {
  igUsername: string
  igPassword: string
  postId: string
}

interface InstagramGetInfoPostByIdUseCaseResponse {
  getInfoPostResponse: MediaInfoResponseRootObject
}

export class InstagramGetInfoPostByIdUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    igUsername,
    igPassword,
    postId,
  }: InstagramGetInfoPostByIdUseCaseRequest): Promise<InstagramGetInfoPostByIdUseCaseResponse> {
    const loggedInUser = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loggedInUser.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const getInfoPostResponse = await this.instagramRepository.getInfoPostById(
      postId,
    )

    return { getInfoPostResponse }
  }
}
