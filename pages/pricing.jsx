import React from "react"
import { GiCheckMark } from "react-icons/gi"
import { pricingList } from "../lib/data"

const PricingList = () => {
  return (
    <>
    <div className=" mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 tablet:px-8 content-center">
      <h2 className="text-3xl text-center font-bold text-black sm:leading-tight sm:text-5xl">
        Pricing plans for LawGrid 
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-center m-8 mx-auto">
        choose an affordable plan that&apos;s packed with the best feature for encouraging your ego, creating 
        customers loyalty and driving success
      </p>
    </div>
    <div className="max-w-7xl mx-auto grid tablet:grid-cols-3 tablet:gap-0 gap-12 py-24 px-4 sm:px-6 lg:px-8  ">
      {pricingList.map(list =>(
        <div key={list.title} className="border border-slate-200 shadow-lg p-8 bg-white rounded relative flex flex-col">
          <h3 className="text-lg font-semibold leading-5">{list.title}</h3>
          {list.mostpopular &&(
            <p className="absolute -translate-y-1/2 top-0 bg-cream text-white px-3 py-0.5 text-sm font-semibold tracking-wide shadow-md rounded ">Most Popular</p>
          )}
          <p className="mt-4 text-sm text-lawgrid_blue leading-6" >{list.description}</p>
          {list.price && <div className="mt-4 -mx-6 rounded p-6 ">
            <p className="text-sm font-bold text-slate-500 flex items-center">
              <span>{list.currency}</span>
              <span className ="ml-3 text-lawgrid_blue text-4xl ">{list.price}</span>
              <span className="ml-1.5">{list.frequency}</span>
            </p>
          </div>}
         
          <ul className="mt-6 space-y-4 flex-1">
           { /* Feature */}
            {list.features.map(feature => (
              <li key={feature} className="text-sm text-lawgrid-blue leading-6 flex">

                <GiCheckMark className="h-5 w-5 text-cream shrink-0" />
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
           {/*Call to Action */}
           <a href="#" className={`block  mt-8 px-6 py-4 text-sm font-semibold leading-4 text-center rounded 
            ${
              list.mostpopular
              ? " text-white hover:bg-[#f5a418] bg-cream shadow-lg"
              : "text-[##f5a418] bg-[#fcf5e8] hover:bg-[#f7e1ba]"
            }

          `} 
          >
            {list.cta}
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default PricingList