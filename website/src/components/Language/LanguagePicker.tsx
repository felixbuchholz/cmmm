import { useTranslation, LanguageSwitcher } from 'next-export-i18n'
import { FC } from 'react'

export const LanguagePicker: FC = () => {
  const { t } = useTranslation()
  return (
    <nav>
      {t('ui.languageSwitcher')}{' '}
      <LanguageSwitcher lang="srp">srp</LanguageSwitcher> |{' '}
      <LanguageSwitcher lang="en">en</LanguageSwitcher>
    </nav>
  )
}
