import React from "react";


export default function Button({text}) {
  return (
    <button className=" transition ease-in-out duration-500 text-white justify-self-center self-end m-12 p-3
    border-solid w-fit rounded-full border-[1px] hover:bg-black/40">
      {text}
    </button>
  )
}