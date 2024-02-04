import React, { useState } from 'react'
import { NavItem } from 'react-bootstrap'
import './Card.css'

const Card = ({ item, setItem, setTotalPrice }) => {

  const [dis, setDis] = useState(true)
  

  const cartHandler = () => {
    setItem(prevItem => [...prevItem,item])
    setDis(false)
    setTotalPrice(prevCount => prevCount + item.price)
  }

  return (
    <div className='home1' data-aos='zoom-in-up'>
      <div className="card card1" style={{ width: '18rem' }}>
        <img className='dumpic' src={item.image} alt="dumbiryani" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h5 style={{marginTop:'3%'}}>₹{item.price}</h5>
          <button className='btn btn-danger' id='cartbutton' style={dis ? {backgroundColor:"orange", border:"none",marginTop:'3%'} : {backgroundColor:"grey", border:"none",marginTop:'3%'}} onClick={cartHandler} disabled={!dis}>Add to Cart</button>
        </div>

        {/* <div className="card-body">
          <button className='btn btn-danger' style={{backgroundColor:"orange", border:"none"}} onClick={cartHandler}>Add to Cart</button>
        </div> */}
      </div>
    </div>
  )
}

export default Card