import Carousel from './Carousel'
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                    <Carousel />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home