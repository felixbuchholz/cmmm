import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import { Menu } from './Menu/Menu'
import { Navigation } from './Navigation/Navigation'
import { useUpdateQueryWithContext } from './Visualization/hooks/useUpdateQueryWithContext'

const DynamicVisualization = dynamic(() =>
  import('./Visualization/Visualization').then(it => it.Visualization)
)

export const MainIndex: FC = () => {
  useUpdateQueryWithContext()
  return (
    <>
      <Navigation />
      <DynamicVisualization />
      <Menu />
    </>
  )
}
