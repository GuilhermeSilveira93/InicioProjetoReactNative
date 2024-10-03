import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import {
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectPortal,
  SelectBackdrop,
  SelectContent as SelectContentGlue,
} from '@gluestack-ui/themed'

const SelectContentStyled = styled(SelectContentGlue).attrs((props) => ({}))``

export const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <SelectPortal>
      <SelectBackdrop />
      <SelectContentStyled>
        <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
        </SelectDragIndicatorWrapper>
        <ScrollView
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SelectContentStyled>
    </SelectPortal>
  )
}
