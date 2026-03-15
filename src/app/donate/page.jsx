"use client"

import { useState } from "react"

export default function DonatePage(){

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
amount:""
})

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e){

e.preventDefault()

window.location.href =
`/payment?name=${form.name}&amount=${form.amount}`

}

return(

<div className="payment-page">

<h1>Support Ethan Racing</h1>

<form className="payment-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone"
onChange={handleChange}
required
/>

<input
type="number"
name="amount"
placeholder="Donation Amount (₹)"
onChange={handleChange}
required
/>

<button type="submit">
Proceed to Payment
</button>

</form>

</div>

)

}