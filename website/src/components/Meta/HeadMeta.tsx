/* eslint-disable max-lines-per-function */
import { useTranslation } from 'next-export-i18n'
import Head from 'next/head'
import { FC } from 'react'

import { basePath } from '../../utils/environment'

const server = process.env.NEXT_PUBLIC_SERVER ?? ''

export const HeadMeta: FC = () => {
  const { t } = useTranslation()
  return (
    <Head>
      <meta property="og:url" content={`${server}${basePath}`} />

      <title>{t('site.title')}</title>
      <meta property="og:title" content={t('site.title')} key="title" />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta
        property="og:image"
        content={`${server}${basePath}/preview-image.jpg`}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="2500" />
      <meta property="og:image:height" content="1313" />
      <meta
        property="og:image:alt"
        content="A side-by-side comparison of available and suitable and affordable housing in Belgrade for a middle-class income"
      />
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
