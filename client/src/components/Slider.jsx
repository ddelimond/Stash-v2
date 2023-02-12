import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { slider1, slider2, slider3 } from '../assets/index'
import { useState, useEffect } from 'react';
import { sliderItems } from '../data';




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') { setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2) } else { setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0) }
    }

    return (
        <div className=" container hidden sm:flex w-screen overflow-hidden  max-w-full relative">
            <div className="flex justify-center absolute  opacity-80 left-[1rem] z-10 cursor-pointer bottom-[0%] top-0 m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowBackIosIcon onClick={() => handleClick('left')} />
            </div>
            <div className={`wrapper transition-all ease duration-[1500ms] m-0    translate-x-[${slideIndex * -100}vw] flex h-full`}>
                {sliderItems.map((slide) => {
                    return (
                        <div key={slide.id} className={`slide flex w-screen ${slide.bg}  items-center  h-[60vh]`}>
                            <div className=' ImgContainer grow  flex justify-center h-full'>
                                <img className='h-full ml-5' src={slide.img} />
                            </div>
                            <div className=' InfoContainer   p-12 flex flex-col'>
                                <h1 className='text-[70px] font-bold'>{slide.title}</h1>
                                <p className='font-5 my-12 max-w-lg  tracking-[.3rem]'>{slide.desc}</p>
                                <button className='cursor-pointer p-3 text-xl bg-transparent border-2 w-[150px] border-black  '>SHOP NOW</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="flex justify-center absolute  opacity-80 cursor-pointer z-10 bottom-0 top-0 right-[1rem] m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowForwardIosIcon onClick={() => handleClick('right')} />
            </div>
        </div >
    )
}

export default Slider