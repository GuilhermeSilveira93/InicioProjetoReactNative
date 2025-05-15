import { useRef, useState } from 'react'
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from 'react-native'

import { MediaTypeEnum } from '@ct/TourGuideData/Devices'
import { createContext } from 'use-context-selector'

const width = Dimensions.get('window').width
export interface SwiperContextInterface {
  setPosition: React.Dispatch<React.SetStateAction<number>>
  position: number
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  flatRef: React.RefObject<
    FlatList<{
      title: string
      type: MediaTypeEnum
      midia: any
      subtitle?: string | undefined
    }>
  >
}
export const SwiperContext = createContext<SwiperContextInterface>(
  {} as SwiperContextInterface
)

const SwiperProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState(0)
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const indexAtual = Math.round(event.nativeEvent.contentOffset.x / width)
    if (indexAtual !== position && indexAtual >= 0) {
      setPosition(indexAtual)
    }
  }

  const flatRef = useRef<
    FlatList<{
      title: string
      type: MediaTypeEnum
      midia: any
      subtitle?: string | undefined
    }>
  >(null)
  return (
    <SwiperContext.Provider
      value={{ position, handleScroll, setPosition, flatRef }}
    >
      {children}
    </SwiperContext.Provider>
  )
}
export default SwiperProvider
