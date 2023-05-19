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
}
