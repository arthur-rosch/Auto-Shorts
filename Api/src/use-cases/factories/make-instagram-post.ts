import { InstagramPostUseCase } from '../instagram-post'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makeInstagramPostUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramPostUseCase = new InstagramPostUseCase(instagramRepository)

  return instagramPostUseCase
}
