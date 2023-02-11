import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import Filter from '../components/Filter'



const ProductList = ({ CAT }) => {
    return (

        <>
            <Announcement />
            <Navbar />
            <Filter />
            <h1 className='title text-5xl font-bold text-center'>{CAT}</h1>
            <Products />
            <Newsletter />
            <Footer />
        </>

    )
}

export default ProductList