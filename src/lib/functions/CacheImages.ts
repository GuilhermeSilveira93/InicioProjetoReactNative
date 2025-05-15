import { Asset } from 'expo-asset'
import { Image } from 'expo-image'

const CacheImages = async (images: string[]) => {
  const imagesToCache = images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
  await Promise.all([...imagesToCache])
}
export default CacheImages
