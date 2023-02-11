import { Add, Remove } from "@material-ui/icons"
import { useState } from "react"
import { bag } from '../assets'


const ShoppingCart = () => {

    const [amount, setAmount] = useState(1)

    return (
        <div className="container w-screen h-[100%] xl:h-screen max-w-[100vw]">
            <div className="wrapper p-[10px] sm:p-[20px]">
                <h1 className="title  text-4xl font-light text-center">YOUR BAG</h1>
                <div className="top flex items-center justify-between p-[20px]">
                    <button className=" topButton p-[10px] cursor-pointer font-bold h-[60px] bg-white border-2 border-black border-solid  hover:bg-gray-50 transition-all ease-in duration-300">CONTINUE SHOPPING</button>
                    <div className="topTexts hidden sm:block">
                        <span className="topText underline cursor-pointer mx-[10px]">Shopping Bag(4)</span>
                        <span className="topText underline cursor-pointer mx-[10px]">Your Wishlist(0)</span>
                    </div>
                    <button className={`topButton p-[10px] cursor-pointer font-bold h-[60px] bg-black text-white  hover:bg-black/80 transition-all ease-in duration-300`} type="filled">CHECKOUT NOW</button>
                </div>
                <div className="bottom flex flex-col xl:flex-row justify-between">
                    <div className="info grow-[3] ">
                        <div className="product flex flex-col lg:flex-row justify-between my-[10px]  ">
                            <div className="productDetails grow-[2] flex">
                                <img className="w-[200px]" src="https://cdn-images.farfetch-contents.com/18/47/55/81/18475581_40501654_300.jpg" alt="" />
                                <div className="details p-[20px] flex flex-col justify-around">
                                    <span className="prodname"><b>Product:</b>DOLCE & GABANA logo-jacquard ruched tulle dress</span>
                                    <span><b>ID:</b> 16758965789</span>
                                    <div className={`prodColor w-[20px] h-[20px] rounded-full bg-orange-500`} props={'orange'}></div>
                                    <span><b>SIZE:</b> S, M, L, XL</span>
                                </div>
                            </div>
                            <div className="priceDetails grow-[1] flex items-center font-bold flex-col">
                                <div className="prodAmountCont flex flex-row items-center mb-[20px]">
                                    <Add className="cursor-pointer" />
                                    <div className="prodAmount text-[24px] mx-[15px] my-[5px]">1</div>
                                    <Remove className="cursor-pointer" />
                                </div>
                                <div className="prodPrice font-thin text-[30px]  ">$ 800</div>
                            </div>

                        </div>
                        <div className="hr border-none h-[1px] bg-[#eeee]"></div>

                        <div className="product flex flex-col lg:flex-row justify-between my-[10px]  ">
                            <div className="productDetails grow-[2] flex">
                                <img className="w-[200px]" src={bag} alt="" />
                                <div className="details p-[20px] flex flex-col justify-around">
                                    <span className="prodname"><b>Product:</b>MICHAEL MICHAEL KORS Valerie Small Logo Satchel</span>
                                    <span><b>ID:</b> 16345367357</span>
                                    <div className={`prodColor w-[20px] h-[20px] rounded-full bg-brown`} props={'brown'}></div>
                                    <span><b>SIZE:</b> MEDIUM</span>
                                </div>
                            </div>
                            <div className="priceDetails grow-[1] flex items-center  flex-col">
                                <div className="prodAmountCont flex flex-row items-center font-bold mb-[20px]">
                                    <Add className="cursor-pointer" />
                                    <div className="prodAmount text-[24px] mx-[15px] my-[5px]">1</div>
                                    <Remove className="cursor-pointer" />
                                </div>
                                <div className="prodPrice font-thin text-[30px]  ">$ 129</div>
                            </div>

                        </div>
                    </div>
                    <div className="summary grow-[1] border-solid border-[.5px] border-lightgray  p-[20px] xl:h-[50vh]">
                        <h1 className="summaryTitle font-extralight text-2xl ">
                            ORDER SUMMARY
                        </h1>
                        <div className="summaryItem my-[30px] flex justify-between">
                            <span className="summaryText">
                                Subtotal
                            </span>
                            <span className="summaryItemPrice">
                                $ 80
                            </span>
                        </div>

                        <div className="summaryItem my-[30px] flex justify-between">
                            <div className="summaryText">
                                Estimated Shipping
                            </div>
                            <div className="summaryItemPrice">
                                $ 10.60
                            </div>
                        </div>

                        <div className="summaryItem my-[30px] flex justify-between">
                            <div className="summaryText">
                                Discount
                            </div>
                            <div className="summaryItemPrice">
                                $ -16.00
                            </div>
                        </div>

                        <div className="summaryItem my-[30px] flex justify-between font-bold text-[24px]">
                            <div type="total" className="summaryText ">
                                Total
                            </div>
                            <div className="summaryItemPrice">
                                $ 80
                            </div>
                        </div>
                        <button className="w-full p-[10px] bg-black text-white  hover:bg-black/80 transition-all ease-in duration-300">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart