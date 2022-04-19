import React from 'react';
import { Link } from 'react-router-dom';
import "./sliderinfinito.scss";


export default function SliderInfinito() {
  return (
    <div>
      <div className="bodySlider">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <Link to="/promociones">
                <img className='slideImg' src="https://i.ibb.co/5TRsPJm/promo1.png" height="200" width="550" alt="" />
              </Link>
            </div>
            <div className="slide">
              <Link to="/promociones">
                <img className='slideImg' src="https://i.ibb.co/mBWQGHp/promo2.png" height="200" width="550" alt="" />
              </Link>
            </div>
            <div className="slide">
              <Link to="/promociones">
                <img className='slideImg' src="https://i.ibb.co/dQwcBhj/promo3.png" height="200" width="550" alt="" />
              </Link>
            </div>

            {/* Repetir */}

            <div className="slide">
              <Link to="/promociones">
                <img className='slideImg' src="https://i.ibb.co/5TRsPJm/promo1.png" height="200" width="550" alt="" />
              </Link>
            </div>
            <div className="slide">
              <Link to="/promociones">
                <img className='slideImg' src="https://i.ibb.co/mBWQGHp/promo2.png" height="200" width="550" alt="" />
              </Link>
            </div>
            <div className="slide">
              <Link to="/promociones">
                <img className='slideImg' src="https://i.ibb.co/dQwcBhj/promo3.png" height="200" width="550" alt="" />
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
