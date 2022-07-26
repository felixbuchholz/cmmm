import { useTranslation } from 'next-export-i18n'
import Head from 'next/head'
import { FC } from 'react'

import { basePath } from '../../utils/environment'

export const HeadMeta: FC = () => {
  const { t } = useTranslation()
  return (
    <Head>
      <meta property="og:url" content="https://cmmm.eu/belgrade/" />

      <title>{t('site.title')}</title>
      <meta property="og:title" content={t('site.title')} key="title" />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:image" content={`${basePath}/cmmm-192x192.png`} />
      <link rel="icon" href={`${basePath}/cmmm-32x32.png`} />
      <link rel="icon" href={`${basePath}/cmmm-192x192.png`} />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta property="og:type" content="website" />
    </Head>
  )
}

// Prikaz priuštovosti stanova za iznajmljivanje i kupovinu u Beogradu na osnovu broja članova domaćinstva i njihovim primanjima
const description =
  'Overview of the housing affordability for renting and buying apartments in Belgrade, based on the household size and household income'

const keywords =
  'stanovanje, Beograd, priuštivost, nepriuštivost, iznajmljivanje, kupovina, nekretnine, tržište nekretnina, housing, Belgrade, affordability, unaffordability, renting, buying, real-estate, real-estate-market'
