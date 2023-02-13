import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  font-weight: 500;
  
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/" + id);
                setProduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })
        );
    };
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor className={`${c === 'white' ? 'border-2 border-black/10 border-solid' : ''} transform-all ease-in duration-300 hover:scale-125`} color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button className="rounded-[5px] transition-all border-teal-500 border-solid border-2 hover:bg-teal-500 hover:text-white ease-in duration-300" onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default Product;























//     const location = useLocation()
//     const id = location.pathname.split('/')[3]

//     const [product, setProduct] = useState({})



//     useEffect(() => {

//         const getProducts = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:3000/products/${id}`)

//                 setProduct(res.data)

//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         getProducts()
//     }, [id])

//     console.log(product)


//     const [itemAmount, setItemAmount] = useState(0)


//     const addItem = () => { itemAmount < 10 ? setItemAmount(itemAmount + 1) : setItemAmount(10) }
//     const removeItem = () => { itemAmount > 0 ? setItemAmount(itemAmount - 1) : setItemAmount(0) }

//     return (
//         <div className='wrapper w-screen flex gap-x-5 gap-y-5 flex-wrap p-[50px]'>
//             <div className='imgContainer flex justify-center items-center grow'>
//                 <img src={product.img} alt="" className=' max-w-[450px] w-full  object-cover' />
//             </div>
//             <div className='Info flex   w-[50%] flex-col justify-center grow py-0 px-[50px] '>
//                 <h1 className='title text-4xl font-thin'>{product.title}</h1>
//                 <p className='desc text-xl tracking-wider  max-w-4xl mx-0 my-[20px] truncate'>{product.desc}</p>
//                 <span className='price text-[40px] font-thin'>${product.price}</span>
//                 <div className='filters flex flex-row justify-between  w-full my-[10px]  '>
//                     <div className='colorFilter flex flex-row items-center gap-x-2 '>
//                         <span className='title text-xl '>Colors</span>
//                         <div className='colorsContainer flex gap-x-[10px]'>
//                             {product?.color?.map((col) => { return <div className={` bg-[LightPink] w-[30px] h-[30px]  rounded-[50%]  cursor-pointer transition-all ease-in duration-[400ms] hover:scale-[1.2]`}></div> })}
//                         </div>
//                         {/* ${col === 'white' ? 'border-2 border-black/10 border-solid' : ''} */}
//                     </div>

//                     <div className='sizeFilter my-[10px]'>
//                         <span className='title text-xl '>Size</span>
//                         <select name="Sort" id="Sort" className=' ml-2 mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
//                             {product?.size?.map(s => <option value={`${s}`}>{s}</option>)}
//                         </select>
//                     </div>
//                 </div>

//                 <div className='addToCartContainer flex flex-col  sm:flex-row w-full my-[10px] gap-y-[20px] sm:gap-y-0 justify-between sm:items-center '>
//                     <div className='amountContainer flex items-center font-bold '>
//                         <Remove className='cursor-pointer' onClick={removeItem} />
//                         <span className='amount w-[30px] h-[30px] rounded-[10px] flex justify-center items-center  mx-[5px]  border-solid border-teal-500 border-2'>{itemAmount}</span>
//                         <Add className='cursor-pointer' onClick={addItem} />
//                     </div>

//                     <button className='w-[120px] h-[40px] sm:mr-[45px] rounded-[5px] transition-all border-teal-500 border-solid border-2 hover:bg-teal-500 hover:text-white ease-in duration-300 '>Add To Cart</button>

//                 </div>
//             </div>

//         </div >
//     )
// }

// export default SingleProduct