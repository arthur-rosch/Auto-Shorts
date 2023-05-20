import { get } from 'request-promise'
import { ig } from '@/lib/instagram'
import { InstagramPublishRepository } from '../instagram-publish-repository'

export class InstagramRepository implements InstagramPublishRepository {
  async publishPhoto(file: any, caption: string | undefined) {
    const imageBuffer = await get({
      url: file,
      encoding: null,
    })

    const photo = await ig.publish.photo({
      file: imageBuffer,
      caption,
    })

    return photo
  }

  async publishVideo(urlVideo: string, urlCoverImage: string) {
    const videoBuffer = await get({
      url: urlVideo,
      encoding: null,
    })
    const coverBuffer = await get({
      url: urlCoverImage,
      encoding: null,
    })

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
}
