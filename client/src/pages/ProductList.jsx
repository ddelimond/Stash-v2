import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;



const ProductList = ({ CAT }) => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("Newest")
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters, [e.target.name]: value
        })
    }

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
        scrollToTop()
    }, [cat])
    return (
        <>
            <Announcement />
            <Navbar />
            <FilterContainer>
                <Filter className=''>
                    <span className='filterText text-[20px] font-normal ml-5 sm:ml-10 m-auto'>
                        Filter Products:
                    </span>
                    <select name="Color" onChange id="Filter" className=' ml-5 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                        <option value="Colors" disabled >Colors</option>
                        <option value="white">white</option>
                        <option value="=black">black</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                        <option value="red">red</option>
                        <option value="pink">pink</option>
                        <option value="green">green</option>
                        <option value="brown">brown</option>
                        <option value="navy">navy</option>
                        <option value="gray">gray</option>
                    </select>

                    <select name="Size" onChange className=' ml-5 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                        <option value="Size" disabled >Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
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
                </Filter>
                <Filter className=''>
                    <span className='filterText text-[20px] font-normal ml-0 sm:ml-10'>
                        Sort Products:
                    </span>
                    {/* (e) => {setSort({ [e.target.name]: e.target.value }); console.log(sort) } */}
                    <select name="Sort" onChange className=' ml-5 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                        <option value="Newest">Newest</option>
                        <option value="(asc)">Price (asc)</option>
                        <option value="(desc)">Price (desc)</option>
                    </select>
                </Filter>
            </FilterContainer>
            <h1 className='title text-5xl font-bold text-center'>{CAT}</h1>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </>

    )
}

export default ProductList