import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { DrawerNavigationOptions } from '@react-navigation/drawer'
import { DrawerCustomContent } from '@components/DrawerCustomContent'
import { idioma } from '@ct/idioma/Idioma'
import { DefaultTheme } from 'styled-components/native'

export default function TabLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerCustomContent {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
    </Drawer>
  );
}
const getDrawerOptions = (
  label: string,
  colors: DefaultTheme['colors']
): DrawerNavigationOptions => ({
  drawerActiveBackgroundColor: colors.primaria,
  drawerInactiveBackgroundColor: colors.background,
  drawerActiveTintColor: colors.text2,
  drawerInactiveTintColor: colors.text,
  drawerLabel: idioma.t(label),
  headerTitle: idioma.t(label),
  title: idioma.t(label),
  drawerItemStyle: {
    borderRadius: 8,
    marginBottom: 8,
  },
})