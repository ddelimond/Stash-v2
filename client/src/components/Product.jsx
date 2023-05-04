import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";




const Product = ({ item }) => {
    return (
        <>
            <div className="container flex justify-center items-center grow rounded-xl border-black/5 border-solid border-2  drop-shadow-sm transition-all ease-in-out duration-[800ms] max-w-[280px] bg-[lightgray]/10  m-2 relative h-[350px]" >
                <img src={item.img} alt="product image" className=" h-full object-cover  z-10" />
                <div className="info flex absolute transition-opacity ease-in-out duration-500 z-20 opacity-0 rounded-xl hover:opacity-100 bg-[lightgray]/30 cursor-pointer  gap-5 top-0 left-0 flex-row justify-center text-[40px] w-full h-full items-center">
                    <div className="icon rounded-[50%] transition-all ease-in-out duration-500 hover:scale-110 hover:bg-[lightblue]/50 bg-white/50 w-[40px] flex justify-center items-center h-[40px]">
                        <ShoppingCartOutlined className="" />
                    </div>
                    <div className="icon rounded-[50%] transition-all ease-in-out duration-500 hover:scale-110 hover:bg-[lightyellow]/50 bg-white/50 w-[40px] flex justify-center items-center h-[40px]">
                        <Link to={`/single/product/${item._id}`}>
                            <SearchIcon />
                        </Link>
                    </div>
                    <div className="icon rounded-[50%] transition-all ease-in-out duration-500 hover:scale-110 hover:bg-[#FDB69F]/50 bg-white/50 w-[40px] flex justify-center items-center h-[40px]">
                        <FavoriteBorderIcon />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Product