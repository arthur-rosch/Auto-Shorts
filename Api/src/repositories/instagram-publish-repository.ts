import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'

export interface InstagramPublishRepository {
  PublishPhoto(
    file: any,
    caption: string | undefined,
  ): Promise<MediaRepositoryConfigureResponseRootObject>
}
