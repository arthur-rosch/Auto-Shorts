import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'

export interface InstagramPublishRepository {
  publishPhoto(
    file: any,
    caption: string | undefined,
  ): Promise<MediaRepositoryConfigureResponseRootObject>

  publishVideo(
    urlVideo: string,
    urlCoverImage: string,
  ): Promise<MediaRepositoryConfigureResponseRootObject>
}
