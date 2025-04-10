import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

import fontSizeEnum from '@ct/EFontSizeEnum'
import { ToastTitle as ToastTitleGlue } from '@gluestack-ui/themed'

const { height } = Dimensions.get('screen')
type ToastTitleProps = {
  title: string
}
const ToastTitleGlueStyled = styled(ToastTitleGlue).attrs((props) => ({
  fontSize: height >= 384 ? fontSizeEnum.base : undefined,
  fontFamily: 'Univia-BOLD',
  color: '#1D2023',
}))``

export const ToastTitle = ({ title, ...rest }: ToastTitleProps) => {
  return <ToastTitleGlueStyled {...rest}>{title}</ToastTitleGlueStyled>
}
