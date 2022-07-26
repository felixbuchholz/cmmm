/* eslint-disable max-lines-per-function */
import { useTranslation } from 'next-export-i18n'
import Head from 'next/head'
import { FC } from 'react'

import { basePath } from '../../utils/environment'

export const HeadMeta: FC = () => {
  const { t } = useTranslation()
  return (
    <Head>
      <title>{t('site.title')}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />

      <link rel="icon" href={`${basePath}/cmmm-32x32.png`} />
      <link rel="icon" href={`${basePath}/cmmm-192x192.png`} />

      <meta
        name="description"
        // Prikaz priuštovosti stanova za iznajmljivanje i kupovinu u Beogradu na osnovu broja članova domaćinstva i njihovim primanjima
        content="Overview of the housing affordability for renting and buying apartments in Belgrade, based on the household size and household income"
      />
      <meta
        name="keywords"
        content="stanovanje, Beograd, priuštivost, nepriuštivost, iznajmljivanje, kupovina, nekretnine, tržište nekretnina, housing, Belgrade, affordability, unaffordability, renting, buying, real-estate, real-estate-market"
      />

      <meta
        property="og:title"
        content="How (un)affordable is housing in Belgrade?"
        key="title"
      />
      <meta
        property="og:description"
        content="Overview of the housing affordability for renting and buying apartments in Belgrade, based on the household size and household income"
      />
      <meta property="og:image" content={`${basePath}/cmmm-192x192.png`} />

      <meta property="og:url" content="https://cmmm.eu/belgrade/" />
      <meta property="og:type" content="website" />
    </Head>
  )
}
