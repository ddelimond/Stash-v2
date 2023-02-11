import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {



    return (

        <div className='container flex flex-col  sm:flex-row w-screen max-w-full justify-evenly sm:mt-5 '>
            {categories.map((item) => <CategoryItem key={item.id} item={item} />)}
        </div>

    )
}
export default Categories