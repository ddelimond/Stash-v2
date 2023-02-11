import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { logo } from '../assets';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { payments } from '../assets';

const Footer = () => {
    return (
        <div className='container  flex flex-col  sm:flex-row p-5 max-w-[100vw]'>
            <div className='left flex flex-col  items-center sm:items-start justify-center sm:mb-0 grow'>
                <div className='logo'>
                    <img src={logo} alt="logo" className='w-[30%] m-auto sm:m-0' />
                </div>
                <div className='desc my-5 max-w-[380px]'>
                    Stash is a family of brands and businesses, making it possible for customers around the world to express themselves through fashion and design, and to choose a more sustainable lifestyle.
                </div>
                <div className='socialContainer flex flex-row items-center gap-x-[10px] '>
                    <div className='icon h-10 w-10 rounded-[50%] flex justify-center items-center cursor-pointer text-white bg-[#E4405F] '>
                        <InstagramIcon />
                    </div>
                    <div className='icon h-10 w-10 rounded-[50%] flex justify-center items-center cursor-pointer text-white bg-[#55ACEE] '>
                        <TwitterIcon />
                    </div>
                    <div className='icon h-10 w-10 rounded-[50%] flex justify-center items-center cursor-pointer text-white bg-[#E60023]' >
                        <PinterestIcon />
                    </div>
                </div>
            </div>
            <div className='center grow hidden sm:block '>
                <h3 className=' titile font-bold mb-8 text-center'>Useful Links</h3>
                <ul className='list m-0 p-0 flex text-center flex-wrap'>
                    <li className='listitem  w-[50%] mb-2'>Home</li>
                    <li className='listitem  w-[50%] mb-2 '>Cart</li>
                    <li className='listitem w-[50%] mb-2'>Men's Fashion</li>
                    <li className='listitem w-[50%] mb-2'>Women's Fashion</li>
                    <li className='listitem w-[50%] mb-2'>Acessories</li>
                    <li className='listitem w-[50%] mb-2'>My Account</li>
                    <li className='listitem w-[50%] mb-2'>Order Tracking</li>
                    <li className='listitem w-[50%] mb-2'>Wishlist</li>
                    <li className='listitem w-[50%] mb-2'>Terms</li>
                </ul>
            </div>
            <div className='right grow flex justify-center flex-col p-5'>
                <h1 className='titile font-bold mb-8 text-center'>Contact</h1>
                <div className='contactItem mb-2 flex items-center sm:items-start'>
                    <RoomIcon className='m-2' /> 999 N High St Columbus Ohio 43209
                </div>
                <div className='contactItem mb-2 flex items-center'>
                    <PhoneIcon className='m-2' /> 1+ 614 567 8779
                </div>
                <div className='contactItem mb-2 flex items-center'>
                    <EmailIcon className='m-2' /> stashcustomerservice@support.com
                </div>
                <div className='payments px-2'>
                    <img src={payments} className='w-[80%]' alt="payment methods" />
                </div>

            </div>

        </div >
    )
}

export default Footer