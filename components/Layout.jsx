import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeadSEO from './head-seo'

const Layout = ({ children, site = {}, page = {}, schema }) => {
  return (
    <div className="font-Founders_Grotesk">
      <HeadSEO site={site} page={page} schema={schema} />
      <Header data={site.header} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
