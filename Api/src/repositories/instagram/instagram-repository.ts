import { ig } from '@/lib/instagram'
import { getVideoBuffer } from '@/utils/getVideoBuffer'
import { InstagramPublishRepository } from '../instagram-publish-repository'

export class InstagramRepository implements InstagramPublishRepository {
  async publishPhoto(file: string, caption: string | undefined) {
    const imageBuffer = await getVideoBuffer(file)

    const photo = await ig.publish.photo({
      file: imageBuffer,
      caption,
    })

    return photo
  }

  async getInsightsUser() {
    const insightsPost = ig.insights.account({})

    return insightsPost
  }

  async getInfoPostById(postId: string) {
    const infoPost = ig.media.info(postId)

    return infoPost
  }

  async publishVideo(urlVideo: string, urlCoverImage: string) {
    const videoBuffer = await getVideoBuffer(urlVideo)
    const coverBuffer = await getVideoBuffer(urlCoverImage)

    const publishResult = await ig.publish.video({
      video: videoBuffer,
      coverImage: coverBuffer,
    })

    return publishResult
  }

  async getAllInfoUser(userId: string | number) {
    const getAllInfo = await ig.user.info(userId)

    return getAllInfo
  }

  async watchingUserStories(watchingStoriesUsername: string) {
    const targetUserStories = await ig.user.searchExact(watchingStoriesUsername)

    const reelsFeed = ig.feed.reelsMedia({
      userIds: [targetUserStories.pk],
    })

    const storiesItems = await reelsFeed.items()
    const storiesTotal = storiesItems.length

    if (storiesItems.length === 0) {
      console.log(`${targetUserStories.username}'s story is empty`)
    }

    const seenResult = await ig.story.seen([storiesItems[0]])

    console.log(seenResult.status)

    return { seenResult, storiesTotal }
  }

  async downloader(url: string) {
    // const urlDirect = await instagramGetUrl(url)
    // console.log(urlDirect)
    return 'sdfsdf'
  }
}
