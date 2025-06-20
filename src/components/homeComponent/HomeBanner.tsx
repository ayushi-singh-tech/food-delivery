import React from 'react'
import "./HomeBanner.scss"

const HomeBanner:React.FC= () => {
  return (
    <div className='home_banner'>
        <div className="bg-layout"></div>
        <div className="banner_content">
          <div className="left_content">
            <div className="title">Celebrate Love at Gourment grove</div>
            <div className="text">Treat your special someone to our exclusive valentine's menu</div>
          </div>
          <div className="right_content">
            <div className="cart_button">Go to cart</div>
          </div>
        </div>

      
    </div>
  )
}

export default HomeBanner
