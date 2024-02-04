import React, { useState } from 'react'

const CartCard = ({ item, setTotalPrice }) => {

  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(prevcount => prevcount + 1)
    setTotalPrice(prevValue => prevValue + item.price)
  }

  const decrement = () => {
    if(quantity > 1){
      setQuantity(prevcount => prevcount - 1)
      setTotalPrice(prevValue => prevValue + item.price)
    }
  }

  return (
    <div className='home1' >
      <div className="card card1" style={{ width: '18rem' }}>
        <img className='dumpic' src={item.image} alt="dumbiryani" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <div style={{display:"flex",backgroundColor:"white" ,margin:" 8% 30%"}}>
            <button className='btn btn-primary' style={{backgroundColor:"orange", border:"none"}} onClick={decrement}>-</button>
            <h5 style={{padding:"0 20px", marginTop:"3%"}}>{quantity}</h5>
            <button className='btn btn-primary' style={{backgroundColor:"orange", border:"none"}} onClick={increment}>+</button>
          </div>

          <h5>₹{(item.price) * quantity}</h5>
        </div>

        <div className="card-body">
          
        </div>
      </div>
    </div>
  )
}

export default CartCard