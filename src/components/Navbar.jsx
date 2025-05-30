import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {

  const cartItems = useSelector((state)=>state.cart.items)
  return (
    <div className='bg-[#3D3D3D]'>

        
        <nav className='max-w-[1400px] mx-auto px-[5%] py-4 flex justify-between items-center'>
            <h1 className='text-3xl text-white'>ShoppingCart</h1>
            <div className='text-xl text-white flex items-center'>
                <SignedOut>
                  <SignInButton>Sign in</SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link to="/">Home</Link>
                  <Link to="/cart" className="relative">
                      Cart 
                      {cartItems.length > 0 && (
                        <span className="h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-white text-sm absolute top-[-9px] right-[-20px]">
                          {cartItems.length}
                        </span>
                      )}
                  </Link> 
                  <UserButton/>
                </SignedIn>           
            </div>
        </nav>

    </div>
  )
}

export default Navbar