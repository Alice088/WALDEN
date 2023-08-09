import React from "react";

export default function TemplateCardForSlider1({text, img, alt}) {
  return (
    <div className="Container__Card--minimalism">
      <img src={img} alt={alt} />
      <p>{text}</p>   
    </div>
  )
}