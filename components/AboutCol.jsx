import React from 'react'
import Image from "next/image"

const AboutCol = () => {
  return (
    <div className="w-full -mt-[35px] tablet:-mt-[60px] mb-12">
    <section className="flex flex-col-reverse desktop:flex-row max-w-8xl justify-center px-4 m-auto gap-y-12 gap-x-10">

      <div className="bg-white px-8 py-8 shadow-md max-w-2xl">
            <hr className="w-8 mb-2 border-t-8 border-lawgrid_blue"/>
            <h2 className="text-3xl tablet:text-4xl font-semibold mb-2">Our Mission</h2>
            <div className="max-w-4xl text-[20px] leading-8">
              <p>Our mission is to provide critical digital infrastructure to facilitate the
              Nigerian legal industry in a technological era.</p>
              {/* <p className="mt-4">At LawGrid, it is our desire to provide solutions that aid efficient legal practices prior to, during, and after courtroom sessions. Our primary purpose is to enable fluid interaction with the courts and ensure seamless information dissemination. We believe in the power of
              technology as an enabler. It is why we leverage it to cater to the needs of lawyers towards facilitating access to information on case status while also aiding effective collaboration with Court Registrars.
              </p> */}
            </div>
        </div>
        <div className="bg-white px-8 py-8 shadow-md max-w-2xl">
            <hr className="w-8 mb-2 border-t-8 border-lawgrid_blue"/>
            <h2 className="text-3xl tablet:text-4xl font-semibold mb-2">Our Vision</h2>
            <div className="max-w-4xl text-[20px] leading-8">
              <p>Our Vision is to become a one-stop-shop for centralized and simplified legal
interaction with the Courtroom in Africa.</p>
              {/* <p className="mt-4">At LawGrid, it is our desire to provide solutions that aid efficient legal practices prior to, during, and after courtroom sessions. Our primary purpose is to enable fluid interaction with the courts and ensure seamless information dissemination. We believe in the power of
              technology as an enabler. It is why we leverage it to cater to the needs of lawyers towards facilitating access to information on case status while also aiding effective collaboration with Court Registrars.
              </p> */}
            </div>
        </div>
        
        {/* <div className="max-w-xl self-end mx-auto">
            <Image alt="device" className="text-center" src='/static/device_with_app.png' width={900} height={300}/>
        </div> */}
    </section>
</div>
  )
}

export default AboutCol