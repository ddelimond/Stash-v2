import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className="container h-[60vh] bg-[#fcf5f5] flex flex-col justify-center items-center text-center max-w-[100vw] ">
            <h1 className="title mb-5 font-bold text-4xl md:text-6xl">Newsletter</h1>
            <div className="desc  mb-5 font-light text-[24px] max-w-[550px] tracking-wider text">Never miss out on our latest deals, sign up for our bi-weekly newsletter!</div>
            <div className="inputContainer md:w-[50%] h-10 bg-white flex justify-between pl-[10px]">
                <input type="text" placeholder='john.doe@gmail.com' className='focus:outline-none grow-[8] mx-auto' />
                <button className='font-bold transition-all ease-in-out grow duration-300 bg-[#928DB5]/80 text-white hover:bg-[#928DB5]/60 p-2'>
                    <SendIcon />
                </button>

            </div>

        </div>
    )
}

export default Newsletter