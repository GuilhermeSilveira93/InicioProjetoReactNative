import { lazy, Suspense, useLayoutEffect, useRef } from 'react'
import { ActivityIndicator, ViewProps } from 'react-native'

import Icon from '@components/ui/Icon'
import styled, { useTheme } from 'styled-components/native'

import Settings from '@assets/svgs/Settings.svg'
import { useToggle } from '@hooks/useToggle'

const ConfigContent = lazy(
  () => import('@components/drawerFabrica/ConfigContent'),
)

interface PopUpProps extends ViewProps {
  top?: number
  right?: number
  left?: number
  bottom?: number
  size?: number
  padding?: number
}

const PopUp = ({
  children,
  top,
  left,
  right = 0,
  bottom = 0,
  size = 32,
  padding = 4,
  ...rest
}: PopUpProps) => {
  const { colors } = useTheme()
  const [showConfig, setShowConfig] = useToggle()
  const settingsRef = useRef(null)
  const componentFatherPosition = useRef<
    ViewProps & { x: number; y: number; width: number; height: number }
  >({ x: 0, y: 0, width: 0, height: 0 })

  useLayoutEffect(() => {
    if (settingsRef.current) {
      settingsRef.current?.measure(
        (x: number, y: number, width: number, height: number) => {
          componentFatherPosition.current = {
            x,
            y,
            width,
            height,
          }
        },
      )
    }
  }, [])
  return (
    <StyledView
      ref={settingsRef}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      height={size}
      width={size}
      padding={padding}
      {...rest}
    >
      {showConfig && (
        <Suspense fallback={<ActivityIndicator />}>
          <ConfigContent
            content={children}
            componentFatherPosition={componentFatherPosition}
          />
        </Suspense>
      )}
      <Icon
        icon={Settings}
        color={colors.text}
        size={size}
        onPress={setShowConfig}
      />
    </StyledView>
  )
}

const StyledView = styled.View<{
  bottom?: number
  right?: number
  top?: number
  left?: number
  height: number
  width: number
  padding: number
}>`
  position: absolute;
  padding: ${(props) => props.padding}px;
  width: ${(props) => props.width + props.padding * 2}px;
  height: ${(props) => props.height + props.padding * 2}px;
  ${(props) => props.top !== undefined && `top: ${props.top}px;`}
  ${(props) => props.bottom !== undefined && `bottom: ${props.bottom}px;`}
  ${(props) => props.left !== undefined && `left: ${props.left}px;`}
  ${(props) => props.right !== undefined && `right: ${props.right}px;`}
`

export default PopUp
