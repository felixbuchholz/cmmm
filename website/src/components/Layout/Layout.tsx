import React, { FC } from 'react'

import { FCC } from '../../types/FCC'
import { LanguagePicker } from '../Language/LanguagePicker'

import { Error } from './Error/Error'
import { Header } from './Header/Header'
import styles from './layout.module.css'
import { Menu } from './Menu/Menu'
import { Navigation } from './Navigation/Navigation'
import { VisualizationContainer } from './Visualization/VisualizationContainer'

export const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* <LanguagePicker /> */}
      <Header />
      {children}
      <Error />
    </div>
  )
}

export const MainIndex: FC = () => {
  return (
    <>
      <Navigation />
      <VisualizationContainer />
      <Menu />
    </>
  )
}
