import Image from "next/image"
import React, {useState, useEffect, useRef} from 'react'
import { heroData } from "../lib/data"
import { ImPlay2 } from "react-icons/im"



// console.log(heroData)
let count = 0;
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef()

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation)
        // startSlider()
        const interval = setInterval(() => {
            handleOnNextClick(); 
            slideRef.current.classList.add("fade-anim");
        }, 7000);
        return () => clearInterval(interval);
    }, [])

    const removeAnimation = ()=>{
        slideRef.current.classList.remove("fade-anim");
    }

    const startSlider = ()=>{
       
    }

    const handleOnNextClick = ()=>{
        count = (count + 1) % heroData.length;
        setCurrentIndex(count)
    }

    const handleOnPrevClick = ()=> {
        const limit = heroData.length;
        count = (currentIndex + limit - 1) % limit;
        setCurrentIndex(count) 
    }

  return (
    <div ref={slideRef} className="w-full py-[14px] tablet:py-[104px] h-[100vh] tablet:h-auto">
        <section className="grid grid-cols-1 tablet:grid-cols-2 max-w-7xl px-2 tablet:px-12 mx-auto gap-y-12 items-center pt-20 tablet:pt-8">
            <div className="w-full text-center tablet:text-left">
                <h1 id="hero-text" className="text-center tablet:text-left text-3xl tablet:text-5xl font-semibold text-lawgrid_blue">{heroData[currentIndex].title}</h1>
                <p className=" tablet:text-left tablet:max-w-sm mt-5 tablet:mt-4 text-[20px] ">{heroData[currentIndex].subTitle}</p>
                <div className="flex flex-col tablet:flex-row  items-center gap-x-1 mt-2 tablet:mt-4 justify-center tablet:justify-start">
                    <button className="bg-lawgrid_blue text-sm btn text-center text-white hover:text-cream mt-5 px-8 h-14 font-semibold font-Poppins shadow-lawgrid shadow-blue-500/5">Get started</button>
                    <a href="#video-section" className="btn px-8 h-14 font-meduim flex items-center tablet:text-left mt-5 gap-x-2 font-semibold text-sm font-Poppins text-lawgrid_blue">
                        <span>Watch Video</span>
                        <div><span ><ImPlay2 size={30} /></span></div>
                    </a>

                </div>
                
            </div>
            <div className="text-center w-full mx-auto max-w-xl">
                <Image priority alt="device" src={heroData[currentIndex].image} width={1200} height={450}/>
            </div>
        </section>
    </div>
  )
}

export default Hero