import { useContextSelector } from 'use-context-selector'

import { SwiperContext } from './SwiperProvider'

const useSwiperProvider = () => {
  const position = useContextSelector(
    SwiperContext,
    (context) => context.position
  )
  const handleScroll = useContextSelector(
    SwiperContext,
    (context) => context.handleScroll
  )
  const setPosition = useContextSelector(
    SwiperContext,
    (context) => context.setPosition
  )
  const flatRef = useContextSelector(
    SwiperContext,
    (context) => context.flatRef
  )

  return { position, handleScroll, setPosition, flatRef }
}
export default useSwiperProvider
