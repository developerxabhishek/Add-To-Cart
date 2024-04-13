import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function CheckOut() {
  return (
 <>
 <Navbar/>
 <div className="checkout">
    <center><h1>Checkout</h1></center>
    <p>Thanks For Your Order.</p>
    <Link to="/Homepage"><button>Go to Homepage</button></Link>
 </div>
 </>
  )
}
export default CheckOut
