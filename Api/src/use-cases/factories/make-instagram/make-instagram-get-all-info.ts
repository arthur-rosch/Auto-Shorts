import { InstagramGetAllInfoUserUseCase } from '../../instagram/instagram-get-all-info-user'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makeGetAllInfoUserUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramGetAllInfoUseCase = new InstagramGetAllInfoUserUseCase(
    instagramRepository,
  )

  return instagramGetAllInfoUseCase
}
