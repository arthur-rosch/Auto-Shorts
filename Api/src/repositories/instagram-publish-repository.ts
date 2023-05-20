import {
  StatusResponse,
  UserRepositoryInfoResponseUser,
  MediaRepositoryConfigureResponseRootObject,
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

  getAllInfoUser(
    userId: string | number,
  ): Promise<UserRepositoryInfoResponseUser>

  watchingUserStories(
    watchingStoriesUsername: string,
  ): Promise<WatchingUserStoriesResponse>
}
