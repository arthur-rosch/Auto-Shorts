import { authenticateInstagramLogin } from '@/utils/authenticateInstagramLogin'
import { InsightsServiceAccountResponseRootObject } from 'instagram-private-api'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'
import { InstagramInvalidCredentialsError } from '../errors/instagram-invalid-credentials-error'

interface InstagramInsightsUserUseCaseRequest {
  igUsername: string
  igPassword: string
}

interface InstagramInsightsUserUseCaseResponse {
  insightsPost: InsightsServiceAccountResponseRootObject
}

export class InstagramInsightsUserUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    igUsername,
    igPassword,
  }: InstagramInsightsUserUseCaseRequest): Promise<InstagramInsightsUserUseCaseResponse> {
    const loggedInUser = await authenticateInstagramLogin({
      igUsername,
      igPassword,
    })

    if (!loggedInUser.pk) {
      throw new InstagramInvalidCredentialsError()
    }

    const insightsPost = await this.instagramRepository.getInsightsUser()

    return { insightsPost }
  }
}
