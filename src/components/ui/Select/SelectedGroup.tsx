import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

import UiViewPropsType from '@ts/ui/UiViewProps.type'

import medidasComPorcentagemFunction from '../medidasComPorcentagem.function'
import paddingProcessFunction from '../PaddingProcess.function'
const { height } = Dimensions.get('screen')
const PickerROOT = styled.View.attrs((props) => ({}))<
  UiViewPropsType & { invalid?: boolean }
>`
  background-color: ${(props) => props.bg || props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.invalid ? props.theme.colors.error : props.theme.colors.border};
  border-radius: ${(props) => props.rounded || 8}px;
  min-width: ${(props) =>
    props.w ? medidasComPorcentagemFunction(props.minWidth) : '100%'};
  width: ${(props) =>
    props.w ? medidasComPorcentagemFunction(props.w) : '100%'};
  height: ${(props) => medidasComPorcentagemFunction(props.h)};
  gap: ${(props) => props.gap || 3}px;
  margin-bottom: ${(props) => props.mb || 4}px;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
`
export default PickerROOT
