import Product from './Product'
import { popularProducts } from '../data'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const CAT = cat?.split('')?.map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('')

    console.log(CAT)



    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await axios.get(CAT ? `http://localhost:3000/products?category=${CAT}` : 'http://localhost:3000/products')
                console.log(res.data)
                setProducts(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [cat])

    const halfProd = products.filter((item, index) => index > products.length / 2)



    useEffect(() => {

        cat &&

            setFilteredProducts(
                products.filter(item =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );

    }, [products, cat, filters]);

    return (
        <div className='container flex just items-center max-w-[100vw]  flex-col p-5'>
            <h1 className='font-bold text-4xl m-auto text-center'>{cat}</h1>
            <div className='flex flex-row justify-center items-center flex-wrap'>
                {cat ? filteredProducts.map((item) =>
                    <Product key={item.id} item={item}></Product>
                ) : halfProd.map(item => <Product key={item.id} item={item}></Product>)
                }
            </div>
        </div>
    )
}

export default Products