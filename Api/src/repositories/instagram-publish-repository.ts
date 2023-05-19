import {
  MediaRepositoryConfigureResponseRootObject,
  StatusResponse,
} from 'instagram-private-api'

export interface WatchingUserStoriesResponse {
  storiesTotal: number
  seenResult: StatusResponse
}
export interface InstagramPublishRepository {
  publishPhoto(
    file: any,
    caption: string | undefined,
  ): Promise<MediaRepositoryConfigureResponseRootObject>

  // watchingUsername,
  publishVideo(
    urlVideo: string,
    urlCoverImage: string,
  ): Promise<MediaRepositoryConfigureResponseRootObject>

  watchingUserStories(
    watchingStoriesUsername: string,
  ): Promise<WatchingUserStoriesResponse>
}
