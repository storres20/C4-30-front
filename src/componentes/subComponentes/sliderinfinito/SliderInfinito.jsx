import React from 'react';
import "./sliderinfinito.scss";


export default function SliderInfinito() {
  return (
    <div>
      <div className="bodySlider">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className='slideImg' src="https://i.ibb.co/1X7npWT/promo1.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
              <img className='slideImg' src="https://i.ibb.co/8dQpZgy/promo2.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
              <img className='slideImg' src="https://i.ibb.co/nBRcZJd/promo3.png" height="200" width="550" alt="" />
            </div>

            {/* Repetir */}

            <div className="slide">
              <img className='slideImg' src="https://i.ibb.co/1X7npWT/promo1.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
              <img className='slideImg' src="https://i.ibb.co/8dQpZgy/promo2.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
              <img className='slideImg' src="https://i.ibb.co/nBRcZJd/promo3.png" height="200" width="550" alt="" />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
