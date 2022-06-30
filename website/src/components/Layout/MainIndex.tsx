import React, { FC } from 'react'

import { Menu } from './Menu/Menu'
import { Navigation } from './Navigation/Navigation'
import { Visualization } from './Visualization/Visualization'

export const MainIndex: FC = () => {
  return (
    <>
      <Navigation />
      <Visualization />
      <Menu />
    </>
  )
}
