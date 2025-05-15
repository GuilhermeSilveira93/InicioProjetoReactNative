import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

import fontSizeEnum from '@ct/FontSizeEnum'
import { ToastTitle as ToastTitleGlue } from '@gluestack-ui/themed'

const { height } = Dimensions.get('screen')
type ToastTitleProps = {
  children: React.ReactNode
}
const ToastTitleGlueStyled = styled(ToastTitleGlue).attrs((props) => ({
  fontSize: height >= 384 ? fontSizeEnum.base : undefined,
  fontFamily: 'Univia-BOLD',
  color: '#1D2023',
}))``

export const ToastTitle = ({ children, ...rest }: ToastTitleProps) => {
  return <ToastTitleGlueStyled {...rest}>{children}</ToastTitleGlueStyled>
}
