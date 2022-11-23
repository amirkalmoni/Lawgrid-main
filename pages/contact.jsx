import { MailIcon, PhoneIcon, PinIcon } from "Icons";
import React from "react";


const Contact = () => {
  return (
    <div className="py-[64px]">
      <section className="flex flex-col tablet:flex-row max-w-7xl mx-auto px-4 tablet:px-8 gap-x-12">
        <div className="tablet:w-[40%] mb-8 -z-5">
          <h1 className="text-4xl font-semibold">Contact us</h1>
          <p className="text-lg">We provide critical digital infrastructure to facilitate the Nigerian legal industry in a technological era. We&apos;d love to hear from you.</p>
          <p className="flex items-center mt-4 -ml-3">
            <PinIcon className="w-[24px]"/>
            <span className="text-gray-600">1234 North Avenue Luke Lane, IN 360001</span>
          </p>
          <p className="flex items-center mt-4 -ml-3">
            <PhoneIcon/>
            <span className="text-gray-600">+234 (803)-015-2238</span>
          </p>
          <p className="flex items-center mt-4 -ml-3">
            <MailIcon/>
            <span className="text-gray-600">hello@lawgrid.ng</span>
          </p>
        </div>
        <div className="grow">
          <form action="submit">
            <div className="flex flex-col">
              <div className="flex w-full gap-x-2">
                <div className="flex flex-col w-[50%]">
                  <label className="font-medium" htmlFor="First Name">First Name</label>
                  <input className="shadow-sm p-2 border border-gray-300 rounded-lg" type="name" placeholder="e.g Adewale"/>
                </div>
                <div className="flex flex-col grow">
                  <label className="font-medium" htmlFor="Last Name">Last Name</label>
                  <input className="border border-gray-300 rounded-lg shadow-sm p-2" type="text" placeholder="e.g Martins"/>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-medium" htmlFor="Email Address">Email Address</label>
                <input className="border border-gray-300 rounded-lg shadow-sm p-2" type="email" placeholder="e.g Adewalemartins@gmail.com"/>
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-medium" htmlFor="Email Address">Phone Number</label>
                <input className="border border-gray-300 rounded-lg shadow-sm p-2" type="phonenumber" placeholder="e.g +234 803 584 9943"/>
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-medium" htmlFor="Company">Company</label>
                <input className="border border-gray-300 rounded-lg shadow-sm p-2" type="text" placeholder="e.g Company XYZ"/>
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-medium" htmlFor="message">Message</label>
                <textarea className="p-2 border border-gray-300 rounded-lg " id="message" name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea>
              </div>
              <div className="flex mt-4">
                <button className="px-12 h-12 bg-lawgrid_blue text-white hover:text-cream font-semibold btn font-Poppins w-full tablet:w-auto">SEND</button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Contact;