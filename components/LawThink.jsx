import React from 'react'
import Image from 'next/image'
import img1 from '../public/static/placeholder.png';
import styles from '../styles/Home.module.css'



const LawThink = () => {
  return (
    <div className="max-w-7xl mx-auto pt-[64px] pb-4 px-4"  >
      <div>
        <h2 className="max-w-5xl mx-auto px-8 text-3xl tablet:text-4xl text-center font-bold">Transform Your Law Practice by communicating better with the courts</h2>
            <div className="pt-12" > 
              <div className = "flex flex-col gap-x-6 tablet:flex-row justify-between">
                <div className="mx-auto">
                  <Image src={img1} width={600} height={700} alt="placeholder"/>
                </div>
                <div className="w-full desktop:w-[50%]">
                  <h3 className="py-2 text-lawgrid_blue font-medium"> Think Digital; Think LawGrid.</h3>
                  <h3 className="text-2xl font-bold"> View Nationwide Cases in One Stop</h3>
                  <div className="py-4"><p > There are two kinds of Lawyers: Those who have to travel miles to review cause cases or miss out as a result of last-minute changes, and those who use LawGrid. Those who work by chance, and those who leverage technology to work smarter. LawGrid’s users enjoy a centralized portal to access Nationwide cases in Nigeria online anywhere they are. With this feature, they are informed about daily Court Lists without having to physically find out in Court Our real-time case calendar grants you a first seat to what is happening in the courtroom. This feature also notifies you with any update regarding cases you are working on within your state and beyond.</p></div>
                  <button className="bg-lawgrid_blue text-[13px] text-bold text-white btn py-2 px-5 font-medium hover:text-cream">LEARN MORE</button>
                </div>
              </div>
              <div className = "pt-24 flex flex-col gap-x-6 tablet:flex-row-reverse  justify-between">
                <div className="mx-auto">
                  <Image src={img1} width={600} height={700} alt="placeholder"/>
                </div>
                <div className="w-full desktop:w-[50%]">
                  <h3 className="py-2 text-lawgrid_blue font-medium"> Think Digital; Think LawGrid.</h3>
                  <h3 className="text-2xl font-bold"> Request Documents With A Click</h3>
                  <div className="py-4"><p > Lawyers who live in the past have to tirelessly prepare hand-written applications, stamp it, file it in court, and spend weeks following up for updates. Our users work smarter with LawGrid. With the click of a button, they can request court documents from the comfort of their homes or offices. With our “Request Court Documents” feature, you can easily request for court documents and have them provided to you. This feature digitizes and streamlines the current process, making it a lot easier for lawyers to procure court documents.</p></div>
                  <button className="bg-lawgrid_blue btn text-[13px] text-bold text-white  py-2 px-5 font-medium hover:text-cream">LEARN MORE</button>
                </div>
              </div>   
            <div className="pt-24 flex flex-col gap-x-6 tablet:flex-row justify-between" >
                <div className="mx-auto">
                  <Image src={img1} width={600} height={700} alt="placeholder"/>
                </div>
                <div className="w-full desktop:w-[50%]">
                  <h3 className={`py-2 ${styles.txtHeader} text-[#213559]`}> Think Digital; Think LawGrid.</h3>
                  <h3 className={`text-2xl py-1 ${styles.subTxt} font-bold`}> Reschedule Cases Overnight</h3>
                  <div className={`py-4 ${styles.txtDetail}`}><p > Ever had to travel to another city only to find out that your case has been moved? Quit living in the past. LawGrid allows you to make requests for Cases to be rescheduled without having to make endless calls and unnecessary visits. Either party can make an online request in the stipulated 48 hours, have it considered and be provided feedback with ease.</p></div>
                  <button className="bg-lawgrid_blue btn text-[13px] text-bold text-white  py-2 px-5 font-medium hover:text-cream">LEARN MORE</button>
                </div>
              </div>
            </div>
      </ div>
    </div>
  )
}

export default LawThink 