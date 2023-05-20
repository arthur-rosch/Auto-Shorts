import { InstagramGetAllInfoUseCase } from '../instagram-get-all-info'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makeGetAllInfoUserUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramGetAllInfoUseCase = new InstagramGetAllInfoUseCase(
    instagramRepository,
  )

  return instagramGetAllInfoUseCase
}
