

const SearchedProducts = ({ searchedProducts }) => {
    const prodOptions = searchedProducts.map((item) => <Product item={item} key={item._id} />)
    return (
        <div>
            <h1 className='title text-5xl font-bold text-center'></h1>
            <div className='container flex just items-center max-w-[100vw]  flex-col p-5'>
                <h1 className='font-bold text-4xl m-x-auto m-y-[20px] text-center'>Products</h1>
                <div className='flex flex-row justify-center items-center flex-wrap'>
                    {prodOptions}
                </div>
            </div>
        </div>
    )
}
export default SearchedProducts