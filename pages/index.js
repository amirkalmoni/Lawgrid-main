import Stats from '../components/Stats'
import Layout from '@components/Layout'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import { features } from '../lib/data'
import Feature from '../components/Feature'
import LawThink from '../components/LawThink'
import Faq from '../components/Faq'
import localFont from '@next/font/local'
import Subscribe from '@components/Subscribe'

import { getStaticPage, queries } from '../data'

export default function Home({ data }) {
   console.log("Dataaaaaa", data)
  return (
    <div className="text-lg">
      <Hero />
      <Stats />
      <Grid
        title="LawGrid is a new digital solution
        that helps lawyers"
        subTitle="WHY LAWGRID ?"
        data={features}
      />
      <Feature />
      <LawThink />
      <Faq />
      <Subscribe />
    </div>
  )
}

export async function getStaticProps({ preview, previewData }) {
  const pageData = await getStaticPage(
    `
    *[_type == "page" && _id == ${queries.homeID}] | order(_updatedAt desc)[0]{
      hasTransparentHeader,
      modules[]{
        ${queries.modules}
      },
      title,
      seo
    }
  `,
    {
      active: preview,
      token: previewData?.token,
    }
  )

  return {
    props: {
      data: pageData,
    },
  }
}
