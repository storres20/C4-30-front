import React from 'react';
import "./estilos/sliderinfinito.scss";


export default function SliderInfinito() {
  return (
    <section>
      <div className="bodySlider">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
                <img className='slideImg' src="https://i.ibb.co/5TRsPJm/promo1.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
                <img className='slideImg' src="https://i.ibb.co/mBWQGHp/promo2.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
                <img className='slideImg' src="https://i.ibb.co/dQwcBhj/promo3.png" height="200" width="550" alt="" />
            </div>

            {/* Repetir */}

            <div className="slide">
                <img className='slideImg' src="https://i.ibb.co/5TRsPJm/promo1.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
                <img className='slideImg' src="https://i.ibb.co/mBWQGHp/promo2.png" height="200" width="550" alt="" />
            </div>
            <div className="slide">
                <img className='slideImg' src="https://i.ibb.co/dQwcBhj/promo3.png" height="200" width="550" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
