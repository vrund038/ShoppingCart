import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { applyTempUpdates, removeCart, updateTempQuantity } from '../features/shopCart/cartSlice'

const Cart = () => {
    const dispatch=useDispatch()
    const {items:cartItems,tempItems,totalPrice} =useSelector((state) =>state.cart)
    const navigate = useNavigate()
    // const handleRemoveItem = (id) =>{
    //     dispatch(removeCart(id))
    // }

    const handleUpdateQuantity=(id,quantity)=>{
        dispatch(updateTempQuantity({id,quantity}))
    }

    const handleApplyUpdates = (id) =>{
        dispatch(applyTempUpdates(id))
    }

  return (
    <>  

        <div className='w-[800px] px-8 py-[4%] mx-auto shadow-lg mt-20 border rounded-md'>
            {cartItems.length ===0?(   <div className='flex flex-col justify-center items-center space-y-4'>
                    <h2 className='text-2xl font-bold'>Your Cart is empty</h2>
                    <button className='btn' onClick={()=>navigate('/')}>Back To Home</button>
                </div> 
            ):(   <div className='bg-white rounded-lg p-8 space-y-3'>
                    <h2 className='text-2xl font-bold'>Your Cart</h2>
                    {cartItems.map((item)=>(
                            <div key={item.id} className='flex border-b-2 py-4 gap-4'>
                                <img src={item.image} alt="img" height={100} width={100}/>
                                    <div className=''>
                                        <h3 className='font-semibold text-lg'>{item.title}</h3>
                                        <p className='font-medium'>Price:${item.price.toFixed(2)}</p>
                                        <div className='flex gap-2 py-2'>
                                            <input type="number" min="1" className='w-[60px] mr-2 p-1 border border-gray-400 rounded' value={tempItems.find((tempItem)=>tempItem.id === item.id)?.quantity || item.quantity}
                                            onChange={(e)=>handleUpdateQuantity(item.id,parseInt(e.target.value))}
                                            />
                                            <button className='btn' onClick={()=>handleApplyUpdates(item.id)}>Update</button>
                                            <button className='btn' onClick={()=>dispatch(removeCart(item.id))}>Remove</button>
                                        </div>
                                    </div>  
                            </div>
                        ))
                    }

                        <div className='pt-5'>
                            <h3 className='flex justify-end font-semibold text-lg'>Total: ${totalPrice.toFixed(2)}</h3>
                            <button className='w-full btn' onClick={()=>navigate("/")}>Back to shopping</button>
                        </div>
                </div>
            )
        }
        </div>
    </>
  )
}

export default Cart
