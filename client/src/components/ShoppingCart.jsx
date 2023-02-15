import { Add, Remove } from "@material-ui/icons"
import { useState } from "react"
import { bag } from '../assets'
import { useSelector } from "react-redux"
import styled from "styled-components"


const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;


const ShoppingCart = () => {

    const [amount, setAmount] = useState(1)

    const cart = useSelector(state => state.cart)
    console.log(cart)

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
                        {cart.products.map(product => (
                            <div className="product flex flex-col lg:flex-row justify-between my-[10px]  ">
                                <div className="productDetails grow-[2] flex">
                                    <img className="w-[200px]" src={product.img} alt="product image" />
                                    <div className="details p-[20px] flex flex-col justify-around">
                                        <span className="prodname"><b>Product:</b>{product.title}</span>
                                        <span><b>ID:</b>{product._id}</span>
                                        <Color color={product.color}></Color>
                                        <span><b>SIZE:</b> {product.size}</span>
                                    </div>
                                </div>
                                <div className="priceDetails grow-[1] flex items-center font-bold flex-col">
                                    <div className="prodAmountCont flex flex-row items-center mb-[20px]">
                                        <Add className="cursor-pointer" />
                                        <div className="prodAmount text-[24px] mx-[15px] my-[5px]">{product.quantity}</div>
                                        <Remove className="cursor-pointer" />
                                    </div>
                                    <div className="prodPrice font-thin text-[30px]  ">$ {product.price}</div>
                                </div>

                                <div className="hr border-none h-[1px] bg-[#eeee]"></div>
                            </div>
                        ))}
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
                                ${cart.total}
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
                                $ {cart.total + 10.60}
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