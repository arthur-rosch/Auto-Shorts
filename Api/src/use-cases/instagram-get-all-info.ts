import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { InstagramInvalidCredentialsError } from './errors/instagram-invalid-credentials-error'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'
import { UserRepositoryInfoResponseUser } from 'instagram-private-api'

interface InstagramGetAllInfoUseCaseRequest {
  igUsername: string
  igPassword: string
}

interface InstagramGetAllInfoUseCaseResponse {
  getAllInfoUserResponse: UserRepositoryInfoResponseUser
}

export class InstagramGetAllInfoUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    igUsername,
    igPassword,
  }: InstagramGetAllInfoUseCaseRequest): Promise<InstagramGetAllInfoUseCaseResponse> {
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
