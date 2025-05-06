import { Asset } from 'expo-asset'
import { Image } from 'expo-image'

import CacheImages from './CacheImages'

jest.mock('expo-image', () => ({
  Image: {
    prefetch: jest.fn().mockResolvedValue(undefined),
  },
}))

jest.mock('expo-asset', () => ({
  Asset: {
    fromModule: jest.fn().mockReturnValue({
      downloadAsync: jest.fn().mockResolvedValue(undefined),
    }),
  },
}))

describe('CacheImages', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('chama Image.prefetch para URLs (strings)', async () => {
    const urls = [
      'https://example.com/image1.jpg',
      'https://example.com/image2.png',
    ]
    await CacheImages(urls)

    expect(Image.prefetch).toHaveBeenCalledTimes(2)
    expect(Image.prefetch).toHaveBeenCalledWith(
      'https://example.com/image1.jpg'
    )
    expect(Image.prefetch).toHaveBeenCalledWith(
      'https://example.com/image2.png'
    )
  })

  it('chama Asset.fromModule().downloadAsync para assets locais', async () => {
    const mockAsset = 1234 as any // Simulando um require('./img.png')
    await CacheImages([mockAsset])

    expect(Asset.fromModule).toHaveBeenCalledWith(mockAsset)

    const returnedAsset = (Asset.fromModule as jest.Mock).mock.results[0].value
    expect(returnedAsset.downloadAsync).toHaveBeenCalled()
  })

  it('mistura URLs e assets corretamente', async () => {
    const mockAsset = 5678 as any
    const urls = ['https://example.com/image.png']
    await CacheImages([mockAsset, ...urls])

    expect(Image.prefetch).toHaveBeenCalledWith('https://example.com/image.png')
    expect(Asset.fromModule).toHaveBeenCalledWith(mockAsset)
  })
})
