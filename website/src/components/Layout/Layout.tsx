import React, { FC } from 'react'

import { LanguagePicker } from '../Language/LanguagePicker'

import { Error } from './Error/Error'
import { Header } from './Header/Header'
import styles from './layout.module.css'
import { Menu } from './Menu/Menu'
import { Navigation } from './Navigation/Navigation'
import { VisualizationContainer } from './Visualization/VisualizationContainer'

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      {/* <LanguagePicker /> */}
      <Header />
      <Navigation />
      <VisualizationContainer />
      <Menu />
      <Error />
    </div>
  )
}
