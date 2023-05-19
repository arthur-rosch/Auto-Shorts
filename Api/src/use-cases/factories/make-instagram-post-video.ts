import { InstagramPostVideosUseCase } from '../instagram-post-video'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makePostVideoUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramPostVideosUse = new InstagramPostVideosUseCase(
    instagramRepository,
  )

  return instagramPostVideosUse
}
