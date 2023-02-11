

const LoginForm = () => {
    return (
        <div className='container w-screen h-screen flex flex-col justify-center items-center bg-[url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] max-w-[100vw]   '>
            <div className='wrapper w-[400px] flex flex-col gap-y-[20px] p-[20px] mt-[20px]  bg-white/90'>
                <h1 className='title text-left text-black text-[24px]'>Sign In</h1>
                <form action="/auth/login" method='GET' className='flex flex-col flex-wrap gap-y-[20px] gap-x-[20px]'>
                    <input className='w-[300px] h-[50px] border-2 border-solid border-gray-200  p-[10px] rounded-[5px] bg-[#FAF9F6]   focus:outline-none inline-block' type="email" placeholder='username' name="username" />
                    <input className='w-[300px] h-[50px]  border-2 border-solid border-gray-200 p-[10px] rounded-[5px] bg-[#FAF9F6]  focus:outline-none inline-block' type="password" placeholder='password' hidden name="password" />
                </form>

                <button type="submit" className="  w-[40%] px-[15px] py-[20px] bg-[rgb(255,184,163)]/80 transition-all ease-in duration-300 hover:bg-[rgb(255,184,163)]">LOG IN</button>
                <a className="hover:text-blue-600 text-black transition-all ease-in duration-300 " href="">DO NOT REMEMBER YOUR PASSWORD?</a>
                <a href="" className="hover:text-blue-600 transition-all ease-in duration-300 text-black">CREATE A NEW ACCOUNT</a>
            </div>
        </div>
    )
}

export default LoginForm