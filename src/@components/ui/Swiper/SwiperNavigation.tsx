import { memo } from 'react'
import { View } from 'react-native'

import { useTheme } from 'styled-components'

import { idioma } from '@/@constants/idioma/i18n'
import Circle from '@assets/svg/circle.svg'

import Button from '../../Web/button'
import useSwiperProvider from './useSwiperProvider'

type SwiperNavigationProps = {
  toggleShowSwipper: () => void
  dataLength: number
}
const SwiperNavigation = memo(
  ({ toggleShowSwipper, dataLength }: SwiperNavigationProps) => {
    const { position, setPosition, flatRef } = useSwiperProvider()
    const { colors } = useTheme()
    let array: Array<any>
    switch (dataLength) {
      case 1:
        array = [{ atual: true, key: 1 }]
        break
      case 2:
        array = [{ atual: position === 0 }, { atual: position === 1 }]
        break
      default:
        array = [
          { atual: position === 0 },
          { atual: position >= 1 && position < dataLength - 1 },
          { atual: position === dataLength - 1 },
        ]
        break
    }
    const FinalizarModal = () => {
      toggleShowSwipper()
      setPosition(0)
      setTimeout(() => flatRef.current?.scrollToIndex({ index: 0 }), 1000)
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.background,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 8,
        }}
      >
        <Button.ROOT w={'1/3'} onPress={FinalizarModal}>
          <Button.TEXT>{idioma.t('Swiper.SKIP')}</Button.TEXT>
        </Button.ROOT>
        <View style={{ flexDirection: 'row', gap: 12, flex: 1 / 3 }}>
          {array.map((item, index) => (
            <Circle
              key={index}
              width={10}
              height={10}
              color={item.atual ? colors.primaria : colors.text}
            />
          ))}
        </View>
        <Button.ROOT
          w={'1/3'}
          onPress={() => {
            if (dataLength > 1 && position <= dataLength - 2) {
              flatRef.current?.scrollToIndex({
                index: position + 1,
              })
              setPosition((prev) => prev + 1)
              return
            }
            FinalizarModal()
          }}
        >
          <Button.TEXT>
            {dataLength > 1 && position <= dataLength - 2
              ? idioma.t('Swiper.NEXT')
              : idioma.t('Swiper.DONE')}
          </Button.TEXT>
        </Button.ROOT>
      </View>
    )
  }
)
SwiperNavigation.displayName = 'SwiperNavigation'
export default SwiperNavigation
