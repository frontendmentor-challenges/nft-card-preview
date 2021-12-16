import image from "../images/image-equilibrium.jpg"
import avatar from "../images/image-avatar.png"
import iconClock from "../images/icon-clock.svg"
import iconEthereum from "../images/icon-ethereum.svg"
import iconEye from "../images/icon-view.svg";

import { useState } from 'react'

export default function Card({id, name, message, value, timeLeft}) {
  const [display, setDisplay] = useState('hidden')
  return (
    <div className="pb-10 rounded-xl m-auto flex flex-col gap-6 bg-gray-900 p-6 text-blue-300/80 max-w-[350px]">
      <div className="relative">
        <img className="transition-all duration-150 cursor-pointer active:brightness-200" onMouseDown={() => setDisplay('block')} onMouseUp={() => setDisplay(('hidden'))} src={image} alt="" />
        <img className={display + " absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "} src={iconEye} alt="" />
      </div>
      <h2 className="transition-all duration-150 active:text-green-500 cursor-pointer text-xl text-white font-bold">Equilibrium #{id}</h2>
      <p>{message}</p>
      <div className="flex justify-between">
        <span className="flex gap-2 text-green-500 font-bold"><img src={iconEthereum} alt=""/><span>{value} ETH</span></span>
        <span className="flex gap-2"><img src={iconClock} alt=""/><span>{timeLeft} left</span></span>
      </div>
      <hr className="opacity-30"/>
      <div className="flex items-center max-h-4 text-sm gap-2">
        <img className="w-8 border-white border-[1px] rounded-full" src={avatar} alt="" /><span className="">Creation of <span className="transition-all duration-150 text-white cursor-pointer active:text-green-500">{name}</span></span>
      </div>
    </div>
  )
}