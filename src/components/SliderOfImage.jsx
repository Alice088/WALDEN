import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function SliderOfImage({head, arrPhoto}) {
  
 return (
  <div className="Container">
    <h4>{head}</h4>

    <div className="Cards">

      <Splide aria-label="Photos" options={{
        type: `loop`,
        fixedHeight: `600px`,
        fixedWidth: `450px`,
        drag: `free`,
        speed: 900
      }}>
        {arrPhoto.map(item => {
          return <SplideSlide key={item.id}>
            <div className="Card">
              <img src={item.src} alt={item.alt} />
              <p>{item.text}</p>   
            </div>
            
          </SplideSlide>
        })}
      </Splide>

    </div>
  </div>
 )
}