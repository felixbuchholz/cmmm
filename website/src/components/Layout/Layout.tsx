import React from 'react'

import { FCC } from '../../types/FCC'

import { Error } from './Error/Error'
import { Header } from './Header/Header'
import styles from './layout.module.css'

export const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Error />
    </div>
  )
}
