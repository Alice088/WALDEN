import React from "react";

export default function TemplateCardForSlider1({text, img, alt}) {
  return (
    <div className="Container__Card--minimalism-2">
      <img src={img} alt={alt} />
      <p>{text}</p> 
    </div>
  )
}