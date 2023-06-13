import {
  StatusResponse,
  MediaInfoResponseRootObject,
  UserRepositoryInfoResponseUser,
  MediaRepositoryConfigureResponseRootObject,
  InsightsServiceAccountResponseRootObject,
} from 'instagram-private-api'

export interface WatchingUserStoriesResponse {
  storiesTotal: number
  seenResult: StatusResponse
}
export interface InstagramPublishRepository {
  publishPhoto(
    file: string,
    caption: string | undefined,
  ): Promise<MediaRepositoryConfigureResponseRootObject>

  getInsightsUser(): Promise<InsightsServiceAccountResponseRootObject>

  getInfoPostById(postId: string): Promise<MediaInfoResponseRootObject>

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

  downloader(url: string): Promise<string>
}
