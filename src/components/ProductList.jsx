import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/shopCart/productSlice'
import { addToCart } from '../features/shopCart/cartSlice'

function ProductList() {
    // const [product,setProduct] = useState([])   //because we rename item to product

    const {items:product,status}= useSelector((state)=>state.products)


    const dispatch = useDispatch()
    useEffect(()=>{

        // ===> Simple we do this nut now we using RTK 

        // const fetchProduct = async() =>{
        //     const response=await fetch('https://fakestoreapi.com/products');
        //     const data = await response.json() 
        //     // console.log(data);
        //     // setProduct(data)
        // }
        // fetchProduct()


        if(status === 'idle'){
            dispatch(fetchProducts())
        }
    },[status])

    if(status==='loading') return <p>Loading....</p>
    if(status==='failed') return <p>Something went wrong..!!</p>

  return (
    <>
        <Navbar/>
        <div className='grid grid-cols-4 gap-5   max-w-[1400px] mx-auto mt-5'>
            { product.map((data,id)=>{
                return (
                    <div key={id} className='bg-white p-3 rounded-md shadow-md text-center  transition-transform transform hover:scale-[1.05] border relative'>
                        <div className='w-[90%] h-[200px] flex justify-center mx-auto'>
                            <img src={data.image} alt="img"  />
                        </div>
                        <div className='space-y-3 mt-3'>
                        <h2 className='text-lg font-semibold'>{data.title.length > 20?`${data.title.slice(0,20)}..`: data.title}</h2>
                        <p className='text-md font-semibold'>Price:${data.price}</p>
                        
                        <button className='btn' onClick={()=>dispatch(addToCart(data))}>Add to Cart</button>   

                        </div>
                    </div>
                )
            })
            }
        </div>
    </>
  )
}

export default ProductList