"use client"

import { useState } from "react"
import CarSlider from "@/components/CarSlider"
// import Car3DViewer from "@/components/Car3DViewer"

export default function CarsPage(){

const cars = [

{
name:"ER 1.0",
weight:"300 kg",
images:[
"/Cars/ER 1.0/ER1-1.jpg",
"/Cars/ER 1.0/ER1-2.jpg",
"/Cars/ER 1.0/ER1-3.jpg"
],
specs:[
["Chassis","Tubular Space Frame"],
["Suspension","Double Wishbone"],
["Steering","Rack and Pinion"],
["Brakes","Hydraulic Disc Brakes"],
["Engine","KTM 390"],
["Drivetrain","Chain Drive"],
["Electronics","Basic ECU"],
["Aerodynamics","None"]
]
},

{
name:"ER 2.0",
weight:"305 kg",
images:[
"/Cars/ER 2.0/ER2-1.jpg",
"/Cars/ER 2.0/ER2-2.jpg",
"/Cars/ER 2.0/ER2-3.jpg"
],
specs:[
["Chassis","Improved Space Frame"],
["Suspension","Double Wishbone"],
["Steering","Rack and Pinion"],
["Brakes","Disc Brakes"],
["Engine","KTM 390"],
["Drivetrain","Chain Drive"],
["Electronics","Improved ECU"],
["Aerodynamics","Minimal Aero"]
]
},

{
name:"ER 3.0",
weight:"298 kg",
images:[
"/Cars/ER 3.0/ER3-1.jpg",
"/Cars/ER 3.0/ER3-2.jpg",
"/Cars/ER 3.0/ER3-3.jpg"
],
specs:[
["Chassis","Lightweight Space Frame"],
["Suspension","Double Wishbone"],
["Steering","Rack and Pinion"],
["Brakes","Hydraulic Disc"],
["Engine","KTM 390"],
["Drivetrain","Chain Drive"],
["Electronics","Data Logger"],
["Aerodynamics","Front Wing"]
]
},

{
name:"ER 4.0",
weight:"290 kg",
images:[
"/Cars/ER 4.0/ER4-1.jpg",
"/Cars/ER 4.0/ER4-2.jpg",
"/Cars/ER 4.0/ER4-3.jpg"
],
specs:[
["Chassis","Optimized Frame"],
["Suspension","Adjustable Double Wishbone"],
["Steering","Rack and Pinion"],
["Brakes","Hydraulic Disc"],
["Engine","KTM 390"],
["Drivetrain","Chain Drive"],
["Electronics","Telemetry System"],
["Aerodynamics","Front + Rear Wing"]
]
},

{
name:"ER 5.0",
weight:"285 kg",
images:[
"/Cars/ER 5.0/ER5-1.jpg",
"/Cars/ER 5.0/ER5-2.jpg",
"/Cars/ER 5.0/ER5-3.jpg"
],
specs:[
["Chassis","Reinforced Frame"],
["Suspension","Fully Adjustable"],
["Steering","Rack and Pinion"],
["Brakes","Performance Disc"],
["Engine","KTM 390"],
["Drivetrain","6 Speed Sequential"],
["Electronics","Advanced Telemetry"],
["Aerodynamics","Improved Aero Kit"]
]
},

{
name:"ER 6.0",
weight:"278 kg",
images:[
"/Cars/ER 6.0/ER6-1.jpg",
"/Cars/ER 6.0/ER6-2.jpg",
"/Cars/ER 6.0/ER6-3.jpg"
],
specs:[
["Chassis","Lightweight Frame"],
["Suspension","Pushrod Suspension"],
["Steering","Rack and Pinion"],
["Brakes","Ventilated Disc"],
["Engine","KTM 390"],
["Drivetrain","Sequential Gearbox"],
["Electronics","Data Acquisition"],
["Aerodynamics","Full Aero Package"]
]
},

{
name:"ER 7.0",
weight:"270 kg",
images:[
"/Cars/ER 7.0/ER7-1.jpg",
"/Cars/ER 7.0/ER7-2.jpg",
"/Cars/ER 7.0/ER7-3.jpg"
],
specs:[
["Chassis","Optimized Frame"],
["Suspension","Pushrod Suspension"],
["Steering","Rack and Pinion"],
["Brakes","Performance Disc"],
["Engine","KTM 390"],
["Drivetrain","Sequential Gearbox"],
["Electronics","Advanced Data Logger"],
["Aerodynamics","Carbon Aero Kit"]
]
},

{
name:"ER 8.0",
weight:"265 kg",
images:[
"/Cars/ER 8.0/ER8-1.jpg",
"/Cars/ER 8.0/ER8-2.jpg",
"/Cars/ER 8.0/ER8-3.jpg"
],
specs:[
["Chassis","Carbon Reinforced Frame"],
["Suspension","Pushrod Suspension"],
["Steering","Rack and Pinion"],
["Brakes","High Performance Disc"],
["Engine","KTM 390"],
["Drivetrain","Sequential Gearbox"],
["Electronics","Telemetry + Data System"],
["Aerodynamics","Advanced Aero Package"]
]
},

{
name:"ER 9.0",
weight:"260 kg",
images:[
"/Cars/ER 9.0/ER9-1.jpg",
"/Cars/ER 9.0/ER9-2.jpg",
"/Cars/ER 9.0/ER9-3.jpg"
],
specs:[
["Chassis","Advanced Lightweight Frame"],
["Suspension","Pushrod Suspension"],
["Steering","Rack and Pinion"],
["Brakes","Performance Disc"],
["Engine","KTM 390"],
["Drivetrain","Sequential Gearbox"],
["Electronics","Advanced Telemetry"],
["Aerodynamics","Full Aero System"]
]
}

]

const [sortOrder,setSortOrder]=useState("newest")

const orderedCars =
sortOrder === "newest" ? [...cars].reverse() : cars

return(

<section className="cars-page">

<h1 className="cars-title">OUR CARS</h1>
<p className="cars-subtitle">Evolution of Ethan Racing Machines</p>

<div className="car-filter">

<label className="filter-option">
<input
type="radio"
name="carSort"
value="newest"
checked={sortOrder==="newest"}
onChange={()=>setSortOrder("newest")}
/>
Newest First
</label>

<label className="filter-option">
<input
type="radio"
name="carSort"
value="oldest"
checked={sortOrder==="oldest"}
onChange={()=>setSortOrder("oldest")}
/>
Oldest First
</label>

</div>

<div className="cars-container">

{orderedCars.map((car,index)=>(

<div className="car-era" key={index}>

<h2>{car.name}</h2>
<p className="car-weight">Weight : {car.weight}</p>

<CarSlider images={car.images}/>

{/* <Car3DViewer /> */}

<div className="car-specs">

{car.specs.map((spec,i)=>(
<div className="spec" key={i}>
<h4>{spec[0]}</h4>
<p>{spec[1]}</p>
</div>
))}

</div>

</div>

))}

</div>

</section>

)

}