import { FCC } from '../../../types/FCC'

import styles from './marquee.module.css'

export const Marquee: FCC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  )
}
