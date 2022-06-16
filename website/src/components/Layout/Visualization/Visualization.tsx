import React, { FC } from 'react'

import { useSelectionContext } from '../../../state/selection/hooks'

import styles from './visualization.module.css'

const stringifyIndent = 2
export const Visualization: FC = () => {
  const data = useSelectionContext('data')
  return (
    <main className={styles.visualization}>
      <h2>Visualization</h2>
      <em>Last resolved data:</em>
      <blockquote style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(data, null, stringifyIndent)}
      </blockquote>
    </main>
  )
}
