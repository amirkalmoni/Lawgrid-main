import React from 'react'
import Image from 'next/image'
import { GrFacebookOption } from 'react-icons/gr'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const Founder = () => {
  return (
    <div className="w-full py-[64px] bg-lawgrid_blue">
      <section className="flex flex-col-reverse desktop:flex-row justify-between max-w-7xl px-4 mx-auto gap-y-12 gap-x-12 items-center">
        <div className="tablet:px-8 tablet:w-3/6">
          <h4 className="text-cream font-medium mb-1 text-center">
            WHO WE ARE
          </h4>
          <h2 className="text-3xl tablet:text-4xl font-semibold mb-2 text-center text-white">
            The LawGrid Story
          </h2>
          <div className="tablet:max-w-4xl text-[20px] leading-8 text-white text-center">
            <p>
              Having navigated the Nigerian legal landscape for years, LawGrid
              was birthed to curb administrative, infrastructural, and
              communication gaps between practicing lawyers or law firms, and
              the court system. Delayed access to information together with
              communication gaps between courts and lawyers, lead to a waste of
              time and resources and ultimately create bottlenecks in the
              courtroom. We seek to solve these challenges, one lawyer at a
              time.
            </p>
            <p className="mt-4">
              At LawGrid, it is our desire to provide solutions that aid
              efficient legal practices prior to, during, and after courtroom
              sessions. Our primary purpose is to enable fluid interaction with
              the courts and ensure seamless information dissemination. We
              believe in the power of technology as an enabler. It is why we
              leverage it to cater to the needs of lawyers towards facilitating
              access to information on case status while also aiding effective
              collaboration with Court Registrars.
            </p>
          </div>
        </div>
        <div className="max-w-xl py-8 mx-auto text-center">
          <Image
            alt="device"
            className="text-center shadow-xl"
            src="/static/founder-photo.png"
            width={400}
            height={200}
          />
          <h3 className="mt-4 font-semibold text-3xl text-white">
            Ese Samuels
          </h3>
          <p className="mt-2 text text-gray-600">C.E.O & Co-Founder</p>
          <hr className="w-8 m-auto mt-2 mb-2 border-t-8 border-lawgrid_blue" />
          <div className="flex justify-between gap-x-2 w-4/12 m-auto">
            <a className="text-cream bg-[#001c38] hover:bg-[#3b5998] p-2 rounded-lawgrid">
              <GrFacebookOption />
            </a>
            <a className="text-cream bg-[#001c38] hover:bg-[#3b5998] p-2 rounded-lawgrid">
              <FaLinkedin />
            </a>
            <a className="text-cream bg-[#001c38] hover:bg-[#3b5998] p-2 rounded-lawgrid">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Founder
