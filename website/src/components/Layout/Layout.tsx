import React, { FC } from 'react'

import { Error } from './Error/Error'
import { Header } from './Header/Header'
import styles from './layout.module.css'
import { Menu } from './Menu/Menu'
import { Navigation } from './Navigation/Navigation'
import { Visualization } from './Visualization/Visualization'

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
      <Visualization />
      <Menu />
      <Error />
    </div>
  )
}
