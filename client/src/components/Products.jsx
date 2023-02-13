import Product from './Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const CAT = cat?.split('')?.map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('')

    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await axios.get(CAT ? `http://localhost:3000/products?category=${CAT}` : 'http://localhost:3000/products')

                setProducts(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [cat])

    const halfProd = products.filter((item, index) => index > products.length / 2)



    useEffect(() => {

        cat && setFilteredProducts(
            products?.filter(item =>
                Object.entries(filters)?.every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );

    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "Newest") {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "(asc)") {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);


    return (
        <div className='container flex just items-center max-w-[100vw]  flex-col p-5'>
            <h1 className='font-bold text-4xl m-x-auto m-y-[20px] text-center'>{cat || 'Products'}</h1>
            <div className='flex flex-row justify-center items-center flex-wrap'>
                {cat
                    ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                    : products
                        .slice(0, 12)
                        .map((item) => <Product item={item} key={item._id} />)}
            </div>
        </div>
    )
}

export default Products