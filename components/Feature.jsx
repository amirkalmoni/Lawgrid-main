import Image from 'next/image'
import React from 'react'
import GooglePlay from '../public/static/googlePlay.png'
import AppStore from '../public/static/appStore.png'
import { ImCheckmark } from 'react-icons/im'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Feature = () => {
  return (
    <div id="video-section" className="w-full py-[124px] bg-lawgrid_blue">
      <section className="flex flex-col desktop:flex-row justify-between max-w-7xl px-4 mx-auto gap-y-12">
        <div>
          <h3 className="py-2 text-white font-normal">
            Bespoke tools for the modern lawyer
          </h3>
          <h2 className="text-3xl tablet:text-3xl font-semibold mb-4 text-white max-w-lg">
            Find out how we bridge the gap between lawyers and the court system.
          </h2>
          <div>
            <ul className="flex flex-col gap-y-8">
              <li className="flex gap-x-4 text-white">
                <span className="text-cream">
                  <ImCheckmark />
                </span>
                <p>Digital Legal Solutions by Lawyers, For Lawyers.</p>
              </li>
              <li className="flex gap-x-4 text-white">
                <span className="text-cream">
                  <ImCheckmark />
                </span>
                <p>Digital Legal Solutions by Lawyers, For Lawyers.</p>
              </li>
              <li className="flex gap-x-4 text-white">
                <span className="text-cream">
                  <ImCheckmark />
                </span>
                <p>Digital Legal Solutions by Lawyers, For Lawyers.</p>
              </li>
            </ul>
          </div>
          <div className="max-w-lg mx-auto  tablet:flex pt-5 tablet:items-center tablet:gap-6">
            <div className=" flex flex-col items-center ">
              <Image
                src={AppStore}
                width={185}
                height={175}
                alt="AppStoreLogo"
              />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={GooglePlay}
                width={223}
                height={250}
                alt="GooglePlayLogo"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto self-end">
          <ReactPlayer
            className="site-video"
            url="https://www.youtube.com/watch?v=qWYWW_dsFWc&ab_channel=NWLROnline"
          />
          {/* <Image alt="device" className="text-center" src='/static/device_with_app.png' width={900} height={300}/> */}
        </div>
      </section>
    </div>
  )
}

export default Feature
