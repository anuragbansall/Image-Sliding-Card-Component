import React, { useState } from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";

function SlideCard() {

    const [val, setVal] = useState(false)
    const handleClick = () => {
        setVal(prevVal => !prevVal)
    }

  return (
        <div className="relative w-[80%] sm:w-[25rem] h-[12rem] rounded bg-zinc-500 flex overflow-hidden">
            <img src={img1} className={`w-full h-full object-cover shrink-0 ${val ? "-translate-x-[100%]" : "-translate-x-0"} transition-all duration-500`} />
            <img src={img2} className={`w-full h-full object-cover shrink-0 ${val ? "-translate-x-[100%]" : "-translate-x-0"} transition-all duration-500`} />
            <span className={`text-4xl bg-[#dadada7b] text-zinc-700 p-1 sm:p-2 rounded-full absolute z-10 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${val ? "rotate-180" : "rotate-0"} transition-all duration-500`} onClick={handleClick}>
                <FaLongArrowAltRight />
            </span>
        </div>
  )
}

export default SlideCard