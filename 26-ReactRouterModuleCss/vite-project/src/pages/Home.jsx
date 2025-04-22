import React from 'react'
import Featureds from '../components/featureds/Featureds'
import Plans from '../components/plans/Plans'
import Customer from '../components/customer/Customer'

const Home = () => {
  return (
    <div>
      <Featureds/>
        <Plans/>
        <Customer/>
    </div>
  )
}

export default Home