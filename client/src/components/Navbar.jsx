import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { logo } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <>
            <div className=" h-15">
                <div className="flex justify-between px-[10px] py-p[0px] sm:py-5 sm:px-2 items-center" >
                    <div className='flex flex-row items-center '>
                        <span className='hidden sm:inline text-sm cursor-pointer'>EN</span>
                        <div className='flex border-black/20  border-2 p-1 sm:ml-6 border-solid  '>
                            <input type="text" className='focus:outline-none w-[50px] sm:w-[150px]' placeholder='Search' />
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
                        <Link to='/login' className='sm:text-sm text-[12px] w-[50px] text-center cursor-pointer '>SIGN IN</Link>
                        <Link to='/register' className='sm:text-sm text-[12px] w-[60px] text-center cursor-pointer'>REGISTER</Link>

                        <div className='text-sm cursor-pointer'>
                            <Badge badgeContent={quantity} color="secondary" className='cursor-pointer'>
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