"use client"
import { useState, useEffect} from "react"


export default function CarSlider({ images }: { images: string[] }) {

const [index,setIndex] = useState(0)

const next = () => {
setIndex((prev)=> (prev+1) % images.length)
}

const prev = () => {
setIndex((prev)=> (prev-1+images.length) % images.length)
}

useEffect(()=>{
const interval = setInterval(()=>{
setIndex((prev)=> (prev+1) % images.length)
},4000)

return ()=>clearInterval(interval)

},[images])



return (

<div className="car-slider">

<button className="slider-arrow left" onClick={prev}>❮</button>

<div className="slider-image-wrapper">
<img src={images[index]} className="slider-image"/>
</div>

<button className="slider-arrow right" onClick={next}>❯</button>

</div>


)
}

