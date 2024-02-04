import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  return (

   <>
   
   <header>
   <nav className="navbar navbar-expand-lg bg-light navbartop" >
  <div className="container-fluid">
    <img src='/images/logo.png' style={{width:"80px"}}/>
    <Link className="navbar-brand avakaaititle" to='/' >Avakaai</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
      </ul>

      <div style={{display:"flex", justifyContent:"right"}}>
        <img src='/images/cartpic.png' style={{width:"30px", margin:"0 60%"}} onClick={() => navigate('/cart')}></img>
      </div>

      <button className='btn btn-primary loginbutton' >LOGIN</button>
      <button className='btn btn-primary signupbutton'>SIGNUP</button>

     
    </div>
  </div>
</nav>
   </header>
   
   </>
  )
}

export default Header