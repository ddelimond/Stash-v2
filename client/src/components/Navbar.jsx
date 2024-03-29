import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux'
import { resetCart } from '../redux/cartRedux'
import { publicRequest } from '../requestMethods';



const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(resetCart())
        dispatch(logout())
    }
    const search = async (e) => {
        // const prod = await publicRequest.get('/products')
        // const products = [...prod.data]
        // const searchedProducts = [...products].filter(product => {
        //     if (product.title.toLowerCase().includes(e.target.value.toLowerCase)) { return product }
        //     else if (product.categories.some(prod => prod.toLowerCase().includes(e.target.value.toLowerCase()))) { return product }
        //     else if (product.color.some(prod => prod.toLowerCase().includes(e.target.value.toLowerCase()))) { return product }
        // }

        // )
        // console.log(searchedProducts)
    }

    return (
        <>
            <div className=" h-15">
                <div className="flex justify-between px-[10px] py-p[0px] sm:py-5 sm:px-2 items-center" >
                    <div className='flex flex-row items-center '>
                        <span className='hidden sm:inline text-sm cursor-pointer'>EN</span>
                        <div className='flex border-black/20  border-2 p-1 sm:ml-6 border-solid  '>
                            <input onChange={search} type="text" className='focus:outline-none w-[50px] sm:w-[150px]' placeholder='Search' />
                            <SearchIcon className='text-[gray]/40' />
                        </div>
                    </div>
                    <Link to='/'>
                        <h1 className=' w-full cursor-pointer items-center text-3xl font-bold text-center grow'>

                            <img className='w-[100px] sm:w-[150px] m-auto' src={logo} alt="logo" />
                        </h1>
                    </Link>

                    <div className=' sm:hidden'>
                        <MenuIcon />
                    </div>
                    <span className=' hidden sm:flex flex-row gap-x-4 sm:text-sm ml-[10px] mr-2 sm:justify-end justify-center items-center'>
                        {user ? <button onClick={handleClick} className='sm:text-sm text-[12px] w-[50px] text-center cursor-pointer '>LOGOUT</button> : <Link to='/login' className='sm:text-sm text-[12px] w-[50px] text-center cursor-pointer '>SIGN IN</Link>}
                        <Link to='/register' className='sm:text-sm text-[12px] w-[60px] text-center cursor-pointer'>REGISTER</Link>

                        <div className='text-sm cursor-pointer'>
                            <Badge badgeContent={quantity} color="error" className='cursor-pointer'>
                                <Link to="/cart">
                                    <ShoppingCartOutlinedIcon />
                                </Link>

                            </Badge>
                        </div>
                    </span>
                </div>
            </div>

        </>

    )
}

export default Navbar