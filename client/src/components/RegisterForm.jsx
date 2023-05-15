import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/apiCalls'
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {



    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const formReset = () => { setFirstname(''); setLastname(''); setPassword(''); setUsername('') }
    const dispatch = useDispatch()
    const { isFetching, isSuccess, error } = useSelector((state) => state.user)
    console.log(error)
    const navigate = useNavigate();
    const handleClick = async (e) => {

        e.preventDefault();
        register(dispatch, { firstname, lastname, username, password });
        navigate('/login')
    }


    return (
        <>
            <div className='container w-screen h-screen realative flex flex-col justify-center items-center  max-w-[100vw]'>
                <img className="w-screen z-[-10] absolute h-screen object-cover opacity-60" src="https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="background" />
                <div className='wrapper sm:max-w-[700px] flex flex-col gap-y-[20px] p-[20px] mt-[20px]  z-[10] bg-white/90'>
                    <h1 className='title text-center md:text-left text-black text-[24px]'>CREATE AN ACCOUNT</h1>
                    <form action="/auth/register" method='POST' className='flex flex-row justify-center md:justify-normal flex-wrap gap-y-[20px] gap-x-[20px]'>
                        <input onChange={(e) => setFirstname(e.target.value)} className='w-[90%] max-w-[300px] md:max-w-[100%] md:w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px]  focus:outline-none inline-block' type="text" placeholder='firstname' name="firstname" />
                        <input onChange={(e) => setLastname(e.target.value)} className='w-[90%] max-w-[300px] md:max-w-[100%] md:w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px]  focus:outline-none inline-block' type="text" placeholder='lastname' name="lastname" />
                        <input onChange={(e) => setUsername(e.target.value)} className='w-[90%] max-w-[300px] md:max-w-[100%] md:w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px]   focus:outline-none inline-block' type="email" placeholder='username' name="username" />
                        <input onChange={(e) => setPassword(e.target.value)} className='w-[90%] max-w-[300px] md:max-w-[100%] md:w-[300px] h-[50px]  border-2 border-solid border-gray-200 p-[10px] rounded-[5px]   focus:outline-none inline-block' type="password" placeholder='password' hidden name="password" />
                    </form>
                    <p className="acknowlegment ">
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </p>
                    <button type="submit" onClick={handleClick} className=" bg-[#928DB5]/80 hover:bg-[#928DB5] w-[40%] px-[15px] py-[20px] transition-all ease-in duration-300 ">CREATE</button>
                </div>
            </div>
        </>
    )
}

export default RegisterForm