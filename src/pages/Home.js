
import Card from '../components/Card';
import './Home.css';
import Header from '../components/Header';
import Slider1 from '../pages/Slider1';
import Footer from '../pages/Footer';
import { useRef, useState } from 'react';



function Home({ setItem, setTotalPrice }) {

const searchFood = useRef("")
const [items, setItems] = useState([])

  const searchHandler = (event) => {
    // event.preventDefault()
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f60a594c74144952be9396e96c406002&query=${searchFood.current.value}`)
    .then(response => response.json())
    .then(data => {
      (data.results).forEach(item => {
        const modifiedData = {
          ...item,
          price: Math.floor(Math.random() * (100 - 20 + 1) + 30)

        }
       console.log(data.results)
        setItems(prevItems => [...prevItems,modifiedData])
      });
    })

  }

  return (
    <>
      <Header></Header>
      <Slider1></Slider1>
      <br></br>
      <br></br>
      <div className='cardsbackground' style={{ padding: "20px" }}>
      <h2 style={{display:"flex",justifyContent:"center",color:"white",fontFamily:"TimesNewRoman"}}>Search for food items</h2>
        <form className="d-flex" role="search" style={{ margin: "20px auto", width: "50%", display: "flex", justifyContent: "center", textAlign: "center" }}>
          <input className="form-control me-2" type="text" placeholder="Search for a dish" aria-label="Search" style={{ padding: "15px 10px" }} ref={searchFood}/>
          <button className="btn btn-warning searchfood" type="button" onClick={searchHandler} >Search</button>
        </form>

        {items.map(item => <Card item={item} key={item.id} setItem={setItem} setTotalPrice={setTotalPrice}/>)}

      </div>
      <Footer className="footer"/>

    </>);
}

export default Home;