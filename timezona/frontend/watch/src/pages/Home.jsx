import React from 'react'
import Hero from '../components/hero/Hero'
import Arrival from '../components/arrival/Arrival'
import Products from '../components/products/Products'
import Choice from '../components/choice/Choice'
import Watchh from '../components/watch/Watchh'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Arrival/>
      <Products/>
      <Choice/>
      <Watchh/>

    </div>
  )
}

export default Home