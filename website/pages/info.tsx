import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { Layout } from '../src/components/Layout/Layout'
import { HeadMeta } from '../src/components/Meta/HeadMeta'
import {
  MDXLangCode,
  Translation,
  translations,
} from '../src/types/translations'

const Info: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  code,
}) => {
  const { query } = useRouter()
  const lang = query.lang ? (query.lang as Translation) : 'en'

  const LangMDXComponent = useMemo(() => getMDXComponent(code[lang]), [
    code,
    lang,
  ])

  return (
    <>
      <HeadMeta />
      <Layout>
        <div className="mdx">
          <LangMDXComponent />
        </div>
      </Layout>
    </>
  )
}

export default Info

export const getStaticProps: GetStaticProps = async () => {
  const mdxCode: MDXLangCode = { en: '', srp: '' }
  for (const translation of translations) {
    const result = await bundleMDX({
      file: `./i18n/${translation}/info.mdx`,
      cwd: process.cwd() + process.env.NEXT_PUBLIC_BUILD_SUBFOLDER,
    })
    mdxCode[translation] = result.code
  }

  return { props: { code: mdxCode } }
}
