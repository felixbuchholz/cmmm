import React from 'react'

import { FCC } from '../../types/FCC'
import { LanguagePicker } from '../Language/LanguagePicker'

import { Error } from './Error/Error'
import { Header } from './Header/Header'
import styles from './layout.module.css'

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
