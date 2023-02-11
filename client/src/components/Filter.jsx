import React from 'react'

const Filter = () => {
    return (
        <div className='contianer flex flex-wrap justify-between items-center sm:w-screen h-[20vh]'>
            <div className='filter flex flex-col sm:flex-row'>
                <span className='filterText text-[20px] font-normal ml-5 sm:ml-10 m-auto'>
                    Filter Products:
                </span>
                <select name="Filter" id="Filter" className=' ml-5 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                    <option value="Colors" disabled selected>Colors</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                </select>

                <select name="Sort" id="Sort" className=' ml-5 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                    <option value="Size" disabled selected>Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div className='filter flex flex-col items-center sm:flex-row h-[99px] sm:h-[50px]'>
                <span className='filterText text-[20px] font-normal ml-0 sm:ml-10'>
                    Sort Products:
                </span>
                <select name="Sort" id="Sort" className=' ml-5 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                    <option value="Newest">Newest</option>
                    <option value="Price (asc)">Price (asc)</option>
                    <option value="Price (desc)">Price (desc)</option>


                </select>

            </div>

        </div>
    )
}

export default Filter