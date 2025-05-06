type UiTouchableOpacityProps = {
  position?: 'relative' | 'absolute' | 'fixed' | 'unset'
  top?: number
  left?: number
  right?: number
  bottom?: number
  flexDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between'
  alignContent?: 'start' | 'space-around' | 'center' | 'space-between'
  p?: number | number[]
  bg?: string
  flex?: number
  borderBottomWidth?: number
  minWidth?: number | 'full' | string
  minHeight?: number | 'full' | string
  maxHeight?: number | 'full' | string
  maxWidth?: number | 'full' | string
  w?: number | 'full' | string
  h?: number | 'full' | string
  borderWidth?: number
  borderColor?: string
  rounded?: number
  m?: number
  mb?: number
  mt?: number
  gap?: number
  zIndex?: number
  overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
  flexWrap?:
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'inherit'
    | 'initial'
    | 'unset'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'left'
    | 'end'
}
export default UiTouchableOpacityProps
