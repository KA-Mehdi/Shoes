import React, { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card';
// import './index.css'
// import data
import products from './db/data';


function App() {
  const [selectedButton, setSelectedButton] = useState(null)
  // input filter
  const [query, setQuery] = useState('')
  
  const handleInputChange = e => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  const filterItems = products.filter( (product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  const handleChange = e => {
    setSelectedButton(e.target.value)
  }
    // buttons filter 
  const handleClick = e => {
    setSelectedButton(e.target.value)
    console.log(e.target.value)
  }

  function filterdData(products, selectedButton, query ){
    let filterdProducts =  products  

      // Filtering Input Items 
      if (query){
        filterdProducts = filterItems
      }
    
      // selected filter
      if(selectedButton) {    
        filterdProducts = filterdProducts.filter(
          (product ) =>
            product.category === selectedButton || 
            product.color == selectedButton || 
            product.company === selectedButton ||
            product.newPrice === selectedButton || 
            product.title === selectedButton 
        );
      }

    return filterdProducts.map(
      ({img, title, star, reviews, newPrice, prevPrice}) => (
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filterdData(products, selectedButton, query)
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
}

export default App;
