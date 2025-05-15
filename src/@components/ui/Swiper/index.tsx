import { memo } from 'react'
import { Dimensions, FlatList, Modal, ModalProps, View } from 'react-native'

import { useTheme } from 'styled-components'

import { MediaTypeEnum } from '@ct/TourGuideData/Devices'
import { Image } from 'expo-image'

import P from '../P'
import SwiperNavigation from './SwiperNavigation'
import SwiperProvider from './SwiperProvider'
import useSwiperProvider from './useSwiperProvider'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export type SwiperDataType = {
  toggleShowSwipper: () => void
  data: {
    title: string
    type: MediaTypeEnum
    midia: any
    subtitle?: string | undefined
  }[]
} & ModalProps
const SwiperModal = ({ data, toggleShowSwipper, ...rest }: SwiperDataType) => {
  const { handleScroll, flatRef } = useSwiperProvider()
  const { colors } = useTheme()
  return (
    <View style={{ minWidth: width, minHeight: height }}>
      <Modal transparent animationType="fade" {...rest}>
        <FlatList
          ref={flatRef}
          horizontal
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          onMomentumScrollEnd={handleScroll}
          style={{ backgroundColor: colors.background }}
          snapToAlignment="center"
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          decelerationRate={1}
          bounces={false}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={3}
          updateCellsBatchingPeriod={50}
          viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
          data={data}
          keyExtractor={({ midia }) => midia}
          renderItem={({ item, index }) => <Slide item={item} />}
          pagingEnabled
        />
        <SwiperNavigation
          dataLength={data.length}
          toggleShowSwipper={toggleShowSwipper}
        />
      </Modal>
    </View>
  )
}

const Swiper = (data: SwiperDataType) => {
  return (
    <SwiperProvider>
      <SwiperModal {...data} />
    </SwiperProvider>
  )
}
export default Swiper

const Slide = memo(
  ({
    item,
  }: {
    item: {
      title: string
      type: MediaTypeEnum
      midia: any
      subtitle?: string | undefined
    }
  }) => {
    return (
      <View
        style={{
          width,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          alt={item.title}
          style={{
            width: width * 0.8,
            height: height * 0.7,
          }}
          source={item.midia}
          contentFit={'contain'}
          transition={1000}
        />
        <P mt={'$8'}>{item.title}</P>
      </View>
    )
  },
  (a, b) => a.item.midia === b.item.midia
)
Slide.displayName = 'Slide'
