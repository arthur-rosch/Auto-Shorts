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
}
