import { ig } from '@/lib/instagram'
import { get } from 'request-promise'
import { MediaRepositoryConfigureResponseRootObject } from 'instagram-private-api'

interface InstagramPostUseCaseRequest {
  igUsername: string
  igPassword: string
  urlImg: string
}

interface InstagramPostUseCaseResponse {
  photo: MediaRepositoryConfigureResponseRootObject
}

export class InstagramPostUseCase {
  constructor() {}

  async execute({
    igUsername,
    igPassword,
    urlImg,
  }: InstagramPostUseCaseRequest): Promise<InstagramPostUseCaseResponse> {
    ig.state.generateDevice(igUsername)
    const loginIg = await ig.account.login(igUsername, igPassword)

    console.log(loginIg)

    if (!loginIg.full_name) {
      throw new Error('Invalid username or password')
    }
    const imageBuffer = await get({
      url: urlImg,
      encoding: null,
    })

    const photo = await ig.publish.photo({
      file: imageBuffer,
      caption: 'Really nice photo from the internet!',
    })

    if (!photo.media.id) {
      throw new Error('Invalid post')
    }

    return { photo }
  }
}
