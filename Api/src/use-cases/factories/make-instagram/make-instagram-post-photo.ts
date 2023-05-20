import { InstagramPostPhotoUseCase } from '../../instagram/instagram-post-photo'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makePostPhotoUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramPostPhotoUseCase = new InstagramPostPhotoUseCase(
    instagramRepository,
  )

  return instagramPostPhotoUseCase
}
