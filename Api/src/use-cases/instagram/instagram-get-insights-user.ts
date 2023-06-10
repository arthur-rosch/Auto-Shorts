import { InsightsServiceAccountResponseRootObject } from 'instagram-private-api'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'

interface InstagramInsightsUserUseCaseResponse {
  insightsPost: InsightsServiceAccountResponseRootObject
}

export class InstagramInsightsUserUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute(): Promise<InstagramInsightsUserUseCaseResponse> {
    const insightsPost = await this.instagramRepository.getInsightsUser()

    return { insightsPost }
  }
}
