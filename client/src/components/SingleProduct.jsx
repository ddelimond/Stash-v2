import { Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import { single4 } from '../assets/index'
import { useState } from 'react'

const SingleProduct = (props) => {

    const style = {
        marginRight: '45px',
        padding: '',
    }

    const [itemAmount, setItemAmount] = useState(0)


    const addItem = () => { itemAmount < 10 ? setItemAmount(itemAmount + 1) : setItemAmount(10) }
    const removeItem = () => { itemAmount > 0 ? setItemAmount(itemAmount - 1) : setItemAmount(0) }

    return (
        <div className='wrapper w-screen flex gap-x-5 gap-y-5 flex-wrap p-[50px]'>
            <div className='imgContainer flex justify-center items-center grow'>
                <img src={single4} alt="" className=' max-w-[450px] w-full sm:h-[90vh] object-cover' />
            </div>
            <div className='Info flex   w-[50%] flex-col justify-center grow py-0 px-[50px] '>
                <h1 className='title text-4xl font-thin'>Colorblock Corduroy Shacket</h1>
                <p className='desc text-xl tracking-wider  max-w-4xl mx-0 my-[20px] truncate'>A corduroy shacket featuring a colorblock design, basic collar, chest patch pockets, dropped long sleeves, button-front closures, and a vented dolphin hem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eveniet quo ipsam non dicta.</p>
                <span className='price text-[40px] font-thin'>$20</span>
                <div className='filters flex flex-row justify-between  w-full my-[10px]  border-2 border-black border-solid'>
                    <div className='colorFilter flex flex-row items-center gap-x-2 '>
                        <span className='title text-xl '>Colors</span>
                        <div className='colorsContainer flex gap-x-[10px]'>
                            <div className={`w-[30px] h-[30px] rounded-[50%]  bg-[#C68E17] cursor-pointer transition-all ease-in duration-[400ms] hover:scale-[1.2]`} color={"#C68E17"}></div>
                            <div className='w-[30px] h-[30px] rounded-[50%] bg-[#adcfe6] cursor-pointer transition-all ease-in duration-[400ms] hover:scale-[1.2]' color={"#adcfe6"} ></div>
                            <div className='w-[30px] h-[30px] rounded-[50%] bg-[#ffd0d7] cursor-pointer  transition-all ease-in duration-[400ms] hover:scale-[1.2] ' color={"#ffd0d7"}></div>
                        </div>
                    </div>

                    <div className='sizeFilter my-[10px]'>
                        <span className='title text-xl '>Size</span>
                        <select name="Sort" id="Sort" className=' ml-2 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                </div>

                <div className='addToCartContainer flex flex-col  sm:flex-row w-full my-[10px] gap-y-[20px] sm:gap-y-0 justify-between sm:items-center '>
                    <div className='amountContainer flex items-center font-bold '>
                        <Remove className='cursor-pointer' onClick={removeItem} />
                        <span className='amount w-[30px] h-[30px] rounded-[10px] flex justify-center items-center  mx-[5px]  border-solid border-teal-500 border-2'>{itemAmount}</span>
                        <Add className='cursor-pointer' onClick={addItem} />
                    </div>

                    <button className='w-[120px] h-[40px] sm:mr-[45px] rounded-[5px] transition-all border-teal-500 border-solid border-2 hover:bg-teal-500 hover:text-white ease-in duration-300 '>Add To Cart</button>

                </div>
            </div>

        </div>
    )
}

export default SingleProduct