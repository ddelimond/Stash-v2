

const RegisterForm = () => {
    return (
        <div className='container w-screen h-screen flex flex-col justify-center items-center bg-[url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)] max-w-[100vw]   '>
            <div className='wrapper w-[700px] flex flex-col gap-y-[20px] p-[20px] mt-[20px]  bg-white/80'>
                <h1 className='title text-left text-black text-[24px]'>CREATE AN ACCOUNT</h1>
                <form action="/auth/register" method='POST' className='flex flex-row flex-wrap gap-y-[20px] gap-x-[20px]'>
                    <input className='w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px]  focus:outline-none inline-block' type="text" placeholder='firstname' name="firstname" />
                    <input className='w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px]  focus:outline-none inline-block' type="text" placeholder='lastname' name="lastname" />
                    <input className='w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px]   focus:outline-none inline-block' type="email" placeholder='username' name="username" />
                    <input className='w-[300px] h-[50px]  border-2 border-solid border-gray-200 p-[10px] rounded-[5px]   focus:outline-none inline-block' type="password" placeholder='password' hidden name="password" />
                    <input className='w-[300px] h-[50px]  border-2 border-solid border-gray-200 p-[10px] rounded-[5px]   focus:outline-none inline-block' type="password" placeholder='confirm password' hidden />
                </form>
                <p className="acknowlegment ">
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </p>
                <button type="submit" className=" bg-[#928DB5]/80 hover:bg-[#928DB5] w-[40%] px-[15px] py-[20px] transition-all ease-in duration-300 ">CREATE</button>
            </div>
        </div>

    )
}

export default RegisterForm