import React, { FC } from 'react'

import { useSelectionContext } from '../../../state/selection/hooks'

import styles from './visualization.module.css'

const stringifyIndent = 2
export const Visualization: FC = () => {
  const data = useSelectionContext('data')
  return (
    <main className={styles.visualization}>
      Visualization
      <blockquote style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(data, null, stringifyIndent)}
      </blockquote>
    </main>
  )
}
