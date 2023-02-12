import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'



const ProductList = ({ CAT }) => {
    const location = useLocation()
    console.log(location)
    const cat = location.pathname.split('/')[2]
    console.log(cat)
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("Newest")
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter, [e.target.name]: value
        })
    }
    return (
        <>
            <Announcement />
            <Navbar />
            <div className='contianer flex flex-wrap justify-between items-center sm:w-screen h-[20vh]'>
                <div className='filter flex flex-col sm:flex-row'>
                    <span className='filterText text-[20px] font-normal ml-5 sm:ml-10 m-auto'>
                        Filter Products:
                    </span>
                    <select name="Color" onChange={handleFilters} id="Filter" className=' ml-5 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                        <option value="Colors" disabled >Colors</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                    </select>

                    <select name="Size" onChange={handleFilters} id="Sort" className=' ml-5 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                        <option value="Size" disabled >Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                    </select>
                </div>
                <div className='filter flex flex-col items-center sm:flex-row h-[99px] sm:h-[50px]'>
                    <span className='filterText text-[20px] font-normal ml-0 sm:ml-10'>
                        Sort Products:
                    </span>
                    <select name="Sort" onChange={(e) => setSort({ [e.target.name]: e.target.value })} id="Sort" className=' ml-5 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                        <option value="Newest">Newest</option>
                        <option value="(asc)">Price (asc)</option>
                        <option value="(desc)">Price (desc)</option>
                    </select>
                </div>
            </div>
            <h1 className='title text-5xl font-bold text-center'>{CAT}</h1>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </>

    )
}

export default ProductList