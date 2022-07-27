import { useTranslation, LanguageSwitcher } from 'next-export-i18n'
import { FC } from 'react'

import styles from './languagePicker.module.css'

export const LanguagePicker: FC = () => {
  const { t } = useTranslation()
  return (
    <nav className={styles.container}>
      {t('ui.languageSwitcher')}{' '}
      <LanguageSwitcher lang="srp" className="link">
        Српски
      </LanguageSwitcher>{' '}
      | <LanguageSwitcher lang="en">English</LanguageSwitcher>
    </nav>
  )
}
