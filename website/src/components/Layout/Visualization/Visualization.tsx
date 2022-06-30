/* eslint-disable max-lines-per-function */

import React, { FC } from 'react'

import { Infos } from './Infos'
import { Maps } from './Maps'
import styles from './visualization.module.css'

export const Visualization: FC = () => {
  return (
    <main className={styles.container}>
      <Maps />
      <Infos />
    </main>
  )
}
