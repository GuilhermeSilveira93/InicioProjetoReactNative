import React from 'react'

import Center from '@components/ui/Center'
import P from '@components/ui/P'

import colors from '@constants/colors'

import HomeLogo2 from '../../assets/svgs/free-svgrepo-com.svg'
import HomeLogo from '../../assets/svgs/home-svgrepo-com.svg'
export const Home = () => {
  return (
    <Center>
      <HomeLogo width={100} height={100} fill={colors.dark.primaria} />
      <HomeLogo2 width={100} height={100} />
      <P>Olá !</P>
      <P>Comece seu projeto comigo !</P>
    </Center>
  )
}
export default Home
