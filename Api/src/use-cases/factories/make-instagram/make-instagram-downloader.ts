import { InstagramDownloaderUseCase } from '../../instagram/instagram-Downloader'
import { InstagramRepository } from '@/repositories/instagram/instagram-repository'

export function makeDownloaderUseCase() {
  const instagramRepository = new InstagramRepository()
  const instagramDownloaderUseCase = new InstagramDownloaderUseCase(
    instagramRepository,
  )

  return instagramDownloaderUseCase
}
