import React from 'react'
import "./Home.css";
import product from './product';

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img
            className="home_image"
            src="https://www.freepik.com/free-psd/fashion-sale-facebook-social-media-banner-template_12963795.htm#query=fashion%20facebook%20cover&position=15&from_view=keyword"
            alt=""
            />
            <div className="home_row">
              <Product 
                title="The lean startup"
                price={29.99}
                image="https://www.freepik.com/free-psd/metal-cosmetic-container-packaging-mockup_25273614.htm#query=product&position=47&from_view=search"
                rating={5}
              />
              <Product />
            </div>

            <div className="home_row">
              <Product />
              <Product />
              <Product />
            </div>

            <div className="home_row">
              <Product />
            </div>
        </div>
    </div>
  );
}

export default Home