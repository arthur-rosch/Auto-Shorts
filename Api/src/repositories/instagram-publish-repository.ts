import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'

export interface InstagramPublishRepository {
  publishPhoto(
    file: any,
    caption: string | undefined,
  ): Promise<MediaRepositoryConfigureResponseRootObject>
}
