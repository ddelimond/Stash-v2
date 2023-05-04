import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { slider1, slider2, slider3 } from '../assets/index'
import { useState, useEffect } from 'react';
import { sliderItems } from '../data';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const SliderContainer = styled.section`
transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};  
`




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') { setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2) } else { setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0) }
    }

    return (
        <div className=" container hidden sm:flex w-screen overflow-hidden  max-w-full  relative">
            <Arrow direction="left" onClick={() => handleClick('left')} className="flex justify-center absolute  opacity-80 left-[1rem] z-10 cursor-pointer bottom-[0%] top-0 m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowBackIosIcon />
            </Arrow>
            <SliderContainer slideIndex={slideIndex} className={` m-0 flex h-full`}>
                {sliderItems.map((slide) => {
                    return (
                        <div key={slide.id} className={`slide flex w-screen ${slide.bg}  items-center  h-[60vh]`}>
                            <div className=' ImgContainer grow  flex justify-center h-full'>
                                <img className='h-full ml-5' src={slide.img} />
                            </div>
                            <div className=' InfoContainer   p-12 flex flex-col'>
                                <h1 className='text-[70px] font-bold'>{slide.title}</h1>
                                <p className='font-5 my-12 max-w-lg  tracking-[.3rem]'>{slide.desc}</p>
                                <Link to="/products">
                                    <button className='cursor-pointer p-3 text-xl bg-transparent border-2 w-[150px] border-black  '>SHOP NOW</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
                }
            </SliderContainer>
            <Arrow direction="right" onClick={() => handleClick('right')} className="flex justify-center absolute  opacity-80 cursor-pointer z-10 bottom-0 top-0 right-[1rem] m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowForwardIosIcon />
            </Arrow>
        </div >
    )
}

export default Slider