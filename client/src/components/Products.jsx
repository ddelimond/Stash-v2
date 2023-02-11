import Product from './Product'
import { popularProducts } from '../data'

const Products = ({ CAT }) => {
    return (
        <div className='container flex just items-center max-w-[100vw]  flex-col p-5'>
            <h1 className='font-bold text-4xl m-auto text-center'>{CAT}</h1>
            <div className='flex flex-row justify-center items-center flex-wrap'>
                {popularProducts.map((item) =>
                    <Product key={item.id} item={item}></Product>
                )}
            </div>
        </div>
    )
}

export default Products