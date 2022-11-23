import React from 'react';
import Grid from '@components/Grid';
import { values } from "../lib/data"
import AltHero from "@components/AltHero";
import AboutCol from "@components/AboutCol";
// import Stats from "@components/Stats"
import Marquee from "@components/Marquee";
import { marqueeData } from "@lib/data";
import Founder from "@components/Founder";

const about = () => {
  return (
    <div className="text-lg scroll-smooth">
      <AltHero/>
      <AboutCol/>
      <Marquee
       data={marqueeData}
      />
      <Founder/>
      {/* <Stats/> */}
      <Grid
        data={values}
        title="What matters to us"
        subTitle="OUR VALUES"
      />
    </div>
  )
}

export default about;