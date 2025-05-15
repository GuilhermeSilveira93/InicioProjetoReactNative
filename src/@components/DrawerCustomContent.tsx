import React, { memo } from 'react'
import { View } from 'react-native'

import Button from '@components/Web/button'

import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSession } from '@providers/SessionProvider'

export const DrawerCustomContent = memo(
  (props: DrawerContentComponentProps) => {
    const insets = useSafeAreaInsets()
    const {FirebaseAuthInstance} = useSession()
    return (
      <View style={{flex:1, paddingBottom: insets.bottom}}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={{ padding: 4 }}>
          <Button.ROOT
            justifyContent={'space-between'}
            position={'relative'}
            bottom={0}
            onPress={async ()=>{
              await FirebaseAuthInstance?.signOut()
            }}
          >
            <Button.TEXT>Sair</Button.TEXT>
          </Button.ROOT>
        </View>
      </View>
    )
  }
)
DrawerCustomContent.displayName = 'DrawerCustomContent'
