import React from "react"
import styles from "../styles/Home.module.css"
import { AiOutlineTwitter } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr"
import { IoLogoInstagram } from "react-icons/io"
import Link from "next/link"


const Footer = () => {
  return (  
        <footer className
="bg-lawgrid_blue sm:p-6 absolute w-full">
            <div className={`max-w-7xl mx-auto px-4 ${styles.gridtemp} pt-[40px]`}>
                    <div className
={` text-white ${styles.lawgridTemp} `}>
                        <a href="https://flowbite.com/" className
="flex items-center ">
                            <img src="/static/lawgrid_white.png" className
="mr-3 h-8" alt="FlowBite Logo"/>
                        </a>
                        <div className="mb-10 py-6 text-lg">We provide critical digital infrastructure to facilitate the Nigerian legal industry in a technological era.</div>
                        <div className="text-[18px]  text-cream duration-500 cursor-pointer hover:underline flex mt-10 mb-10 ">
                            <div className="bg-[#001C38] p-1 h-[25px] w-[25px] flex justify-center items-center rounded " > <AiOutlineTwitter /> </div>
                            <div className="bg-[#001C38] p-1 h-[25px] w-[25px] flex justify-center items-center mx-2  rounded">  <GrFacebookOption /> </div>
                            <div className="bg-[#001C38] p-1 h-[25px] w-[25px] flex justify-center items-center  rounded"> <IoLogoInstagram /> </div>
                        </div>
                    </div>
                    <div className="text-white grid tablet:ml-24 grid-cols-2 ">
                        <div className={styles.comp}>
                            <h1 className="font-bold text-[15px]">Company</h1>
                            <ul className="my-5">
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline">About</li>
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline" >Contact</li>
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline" >Pricing</li>
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline" >Careers</li>
                            </ul>
                        </div>
                        <div className={styles.comp}>
                            <h1 className="font-bold text-[15px]">Get Started</h1>
                            <ul className="my-5">
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline" >Grid Social</li>
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline" >Lawyer&apos;s Diary</li>
                                <li className="hover:text-cream duration-500 cursor-pointer hover:underline" >Contact Sales</li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className={`bg-[#001c38] p-4 flex flex-col items-center text-[12px] text-[#CBCBCB] ${styles.footerCred} `}>
                <div className="">© LawGrid Ng 2022 | All rights reserved {" "}<span className="mx-2">|</span><Link className="ml-2 hover:text-cream duration-500 cursor-pointer hover:underline" href="/#">Terms of Service</Link> <Link className="hover:text-cream duration-500 cursor-pointer hover:underline ml-2" href="/#">Privacy Policy</Link></div>
            </div>
        </footer>
  )
}

export default Footer