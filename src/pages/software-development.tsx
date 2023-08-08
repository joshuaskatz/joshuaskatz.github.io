import React from 'react'
import { PageProps } from 'gatsby'
import MainNav from '../components/nav/main'
import Sidebar from '../components/nav/sidebar'

import { shortcodes } from '.'
import Technologies from '../content/technologies/index.mdx'
import Portfolio from '../content/portfolio/index.mdx'

import { MDXProvider } from '@mdx-js/react'
import { useTechnologiesMdx } from '../hooks/useTechnologiesMdx'
import { useAboutMdx } from '../hooks/useAboutMdx'
import { usePortfolioMdx } from '../hooks/usePortfolioMdx'
import SEO from '../components/seo'

const SoftwareDev: React.FC<PageProps> = ({ location }) => {
  const technologiesMdx = useTechnologiesMdx()
  const portfolioMdx = usePortfolioMdx()
  const aboutMdx = useAboutMdx()

  return (
    <div>
      <MainNav />
      <div className="flex flex-row ">
        <div className="w-940">
          <MDXProvider components={shortcodes}>
            <Technologies {...technologiesMdx} />
            <Portfolio {...portfolioMdx} />
          </MDXProvider>
        </div>
        <div>
          <Sidebar sections={['technologies', 'portfolio']} aboutMdx={aboutMdx} isSoftwareDev />
        </div>
      </div>
    </div>
  )
}

export default SoftwareDev

export const Head = () => <SEO />
