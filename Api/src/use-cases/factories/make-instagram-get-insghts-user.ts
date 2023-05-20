import { InstagramInsightsUserUseCase } from '../instagram-get-insghts-user'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makeInsightsUserUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramInsightsUserUseCase = new InstagramInsightsUserUseCase(
    instagramRepository,
  )

  return instagramInsightsUserUseCase
}