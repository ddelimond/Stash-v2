import React from 'react'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import axios from 'axios'

const CategoryItem = ({ item }) => {


    return (
        <div>
            <Card variant='outlined' className=' container flex justify-center relative sm:h-[70vh] sm:w-[31.5vw] grow'>

                <img src={item.img} alt="category image" className=' w-full sm:h-full object-cover' />
                <div className='Info  absolute flex flex-col justify-center items-center top-[40%]'>
                    <h1 className='title font-bold text-2xl text-white'>{item.title}</h1>
                    <Link to={`/products/${item.cat}`}>
                        <button className='bg-white hover:text-black transition-all ease-in-out duration-1500 text-gray-400 rounded-sm p-2 cursor-pointer '>SHOP NOW</button>
                    </Link>
                </div>
            </Card>
        </div>
    )
}
export default CategoryItem