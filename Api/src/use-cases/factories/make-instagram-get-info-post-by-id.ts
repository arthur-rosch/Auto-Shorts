import { InstagramGetInfoPostByIdUseCase } from '../instagram-get-info-post-by-id'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makeGetAllInfoUserUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramGetInfoPostByIdUseCase = new InstagramGetInfoPostByIdUseCase(
    instagramRepository,
  )

  return instagramGetInfoPostByIdUseCase
}
