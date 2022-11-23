import React from 'react'
import { TrustIcon } from "../Icons"

const Grid = ({data=[], title="", subTitle="", align=""}) => {
  return (
    <div className="py-[64px]">
        <h4 className="max-w-2xl mx-auto px-2 text-sm tablet:text-xl text-center text-lawgrid_blue font-medium">{subTitle}</h4>
        <h2 className="max-w-2xl mx-auto px-8 text-3xl tablet:text-4xl font-semibold text-center mt-2">{title}</h2>
        <section className="max-w-7xl px-4 mx-auto grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 py-8 tablet:py-12 gap-y-4">
            
            {data.map((item, idx)=>(
              
                <Card key={idx} {...item} extraClass={item.id === 1 ? "row-span-2" : ""} align={align}/>
            ))}
        </section>
    </div>
  )
}

export default Grid


const Card = ({extraClass="", title="", description="", align="", icon})=> {
    return(
        <div className={`rounded-lg px-6 shadow-sm py-8 duration:800 ease-in-out`}>
        {icon}
        <h2 className={`text-2xl tablet:text-2xl font-semibold text-lawgrid_blue ${align === 'center' ? "text-center" : ""}`}>{title}</h2>
        <p className={`mt-2 text-gray-700 ${align === 'center' ? "text-center" : ""}`}>{description}</p>
        </div>
    )
}