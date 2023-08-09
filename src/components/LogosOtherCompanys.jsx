import React from "react";

export default function LogosOtherCompanys({text, img, alt}) {
  return (
  <section className="LogosOtherCompanys">
      <img src={img} alt={alt}/>

      <q>{text}</q>
    </section>
  )
}
