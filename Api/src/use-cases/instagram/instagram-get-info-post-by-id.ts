import { MediaInfoResponseRootObject } from 'instagram-private-api'
import { InstagramPublishRepository } from '@/repositories/instagram-publish-repository'

interface InstagramGetInfoPostByIdUseCaseRequest {
  postId: string
}

interface InstagramGetInfoPostByIdUseCaseResponse {
  getInfoPostResponse: MediaInfoResponseRootObject
}

export class InstagramGetInfoPostByIdUseCase {
  constructor(private instagramRepository: InstagramPublishRepository) {}

  async execute({
    postId,
  }: InstagramGetInfoPostByIdUseCaseRequest): Promise<InstagramGetInfoPostByIdUseCaseResponse> {
    const getInfoPostResponse = await this.instagramRepository.getInfoPostById(
      postId,
    )

    return { getInfoPostResponse }
  }
}
