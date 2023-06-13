import axios from 'axios'

export async function getVideoBuffer(url: string) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    })

    return Buffer.from(response.data, 'binary')
  } catch (error) {
    console.error('Erro ao obter o buffer de vídeo:', error)
    throw error
  }
}
