import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import CartCard from '../components/CartCard'
import Header from '../components/Header'
import './Cart.css'

const Cart = ({ items, numOfItems, totalprice, setTotalPrice }) => {
  const navigate = useNavigate()
  const ordernow = ( ) =>{
    if (numOfItems !== 0){
        navigate('/success')
    }
  }
  return (
    <>
    <Header />
    <div className='cartmaindiv'>
        <div className=' display'>
            <h2 style={{textAlign:"center",marginTop:"20px", backgroundColor:"white",fontFamily:"TimesNewRoman"}}><u>Cart Items</u></h2>
            {items.map(item => <CartCard item={item} key={item.id} setTotalPrice={setTotalPrice}/>)}
        </div>

        <div className='totalamount' style={{padding:"20px 40px", justifyContent:"center"}}>
            <h2 style={{textAlign:"center",marginBottom:"20px",fontFamily:"TimesNewRoman",}}><u>Cart Value</u></h2>

            <table>
              <tr>
                <td style={{fontSize:"20px"}}><b>No. of Items : </b></td>
                <td><b>{numOfItems}</b></td>
                </tr>
              <tr>
                <td style={{fontSize:"20px"}}><b>Total Price : </b></td>
                <td><b>{totalprice}</b></td>
                </tr>
            </table>

            <button className='btn btn-primary' style={{backgroundColor:"orange", border:"none",margin:"20px 0 0 150px"}} onClick={ordernow}>Order</button>
        </div>
    </div>
    </>
  )
}


export default Cart