import Image from "next/image"
import Link from "next/link"
import React, {useState, useEffect, useRef} from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const Stats = ({title=""}) => {
    const [focus, setFocus] = React.useState(false);

    // useEffect(() => {
    //  countUpRef.current.ad
    
    // //   return () => {
    // //     second
    // //   }
    // }, [])
    // const countUpRef = useRef(null);
  return (
    <div className="w-ful text-center">
        <section className="max-w-7xl mx-auto px-4 py-[64px]">
        { title && <div className="">
            <h2 className="text-3xl tablet:text-4xl font-semibold" >{title}</h2>
            </div> }
            <div className={`flex flex-col tablet:flex-row gap-y-24 justify-between max-w-5xl mx-auto ${title ? "mt-24" : ""}`}>
                <div>
                    <h4 className="font-semibold text-3xl">
                        <CountUp start={focus ? 0 : null} end={12} duration={1} redraw={true}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                            }}>
                            <span ref={countUpRef} />
                            </VisibilitySensor>
                            )}
                        </CountUp>+
                        {/* <CountUp end={12} />+ */}
                    </h4>
                    <p className="text-glawgrid_blue">Law Firms in Nigeria</p>
                </div>
                <div>
                    <h4 className="font-semibold text-3xl">
                    <CountUp start={focus ? 0 : null} end={500} redraw={true}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                            }}>
                            <span ref={countUpRef} />
                            </VisibilitySensor>
                            )}
                        </CountUp>
                    </h4>
                    <p className="text-glawgrid_blue">Lawyers on GridSocial</p>
                </div>
                <div>
                    <h4 className="font-semibold text-3xl">
                        <CountUp start={focus ? 0 : null} end={20} duration={2} redraw={true}>
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                            }}>
                            <span ref={countUpRef} />
                            </VisibilitySensor>
                            )}
                        </CountUp>+
                    </h4>
                    <p className="text-glawgrid_blue">Requested documents</p>
                </div>
            </div>
            <div className="mt-6 flex flex-col gap-y-4 items-center justify-center w-full ">
                <Link className="px-4 py-2 text-center text-black rounded-md flex items-center flex-grow-0 gap-x-1 border-2 border-lawgrid_blue text-xs shadow-lawgrid" href="/">
                    <Image alt="device" src="/static/icons8-google.svg" width={20} height={20}/>
                    <span className="pt-1">LEAVE US A REVIEW</span>
                </Link>
                <div className
="flex items-">
                    <svg aria-hidden="true" className
="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className
="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className
="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className
="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className
="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className
="ml-2 text-sm font-medium text-lawgrid_blue dark:text-gray-400 ">From 500+ reviews</p>
                    {/* <p>From 500+ reviews</p> */}
                </div>
                
            </div>
        </section>
        <section>
            
        </section>
    </div>
  )
}

export default Stats