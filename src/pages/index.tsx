import React, { useMemo } from 'react'
import { Link, type PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import ImageMDX from '../content/image/index.mdx'
import Image from '../components/image/Image'
import ImageText from '../components/image/ImageText'

import MainNav from '../components/nav/main'
import SEO from '../components/seo'
import { useAboutMdx } from '../hooks/useAboutMdx'

export const shortcodes = { Link, ImageText, Image }

const Index: React.FC<PageProps> = () => {
  const aboutMdx = useAboutMdx()

  const header = useMemo(() => {
    return <ImageMDX className={`flex flex-col lg:flex-row`} {...aboutMdx} />
  }, [aboutMdx])

  return (
    <div>
      <MainNav />
      <MDXProvider components={shortcodes}>{header}</MDXProvider>
    </div>
  )
}

export default Index

export const Head = () => <SEO />
