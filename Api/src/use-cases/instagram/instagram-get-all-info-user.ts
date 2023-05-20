import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { InstagramInvalidCredentialsError } from '../errors/instagram-invalid-credentials-error'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'
import { UserRepositoryInfoResponseUser } from 'instagram-private-api'

interface InstagramGetAllInfoUserUseCaseRequest {
  igUsername: string
  igPassword: string
}

interface InstagramGetAllInfoUserUseCaseResponse {
  getAllInfoUserResponse: UserRepositoryInfoResponseUser
}

export class InstagramGetAllInfoUserUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    igUsername,
    igPassword,
  }: InstagramGetAllInfoUserUseCaseRequest): Promise<InstagramGetAllInfoUserUseCaseResponse> {
    const loggedInUser = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loggedInUser.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const getAllInfoUserResponse =
      await this.instagramRepository.getAllInfoUser(loggedInUser.pk)

    return { getAllInfoUserResponse }
  }
}
