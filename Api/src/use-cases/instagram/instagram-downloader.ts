import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'

interface InstagramDownloaderUseCaseRequest {
  postUrl: string
}

interface InstagramDownloaderUseCaseResponse {
  urlDirect: string
}

export class InstagramDownloaderUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    postUrl,
  }: InstagramDownloaderUseCaseRequest): Promise<InstagramDownloaderUseCaseResponse> {
    const urlDirect = await this.instagramRepository.downloader(postUrl)

    return { urlDirect }
  }
}
