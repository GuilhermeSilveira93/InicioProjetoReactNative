import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

import fontSizeEnum from '@constants/FontSizeEnum'
import { ToastDescription as ToastDescriptionGlue } from '@gluestack-ui/themed'

const { height } = Dimensions.get('screen')

const ToastDescriptionGlueStyled = styled(ToastDescriptionGlue).attrs(
  (props) => ({
    fontSize: height >= 384 ? fontSizeEnum.base : undefined,
    fontFamily: 'Univia-PRO',
    color: '#1D2023',
  }),
)``

export const ToastDescription = ({ message }: { message: string }) => {
  return <ToastDescriptionGlueStyled>{message}</ToastDescriptionGlueStyled>
}
