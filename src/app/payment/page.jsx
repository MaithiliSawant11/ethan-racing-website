"use client"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function PaymentPage(){

const params = useSearchParams()
const router = useRouter()

const name = params.get("name")
const amount = params.get("amount")

function handlePayment(){

/*
Later this will open Razorpay / payment gateway
For now we simulate payment success
*/

setTimeout(()=>{

router.push("/payment-success")

},1500)

}

return(

<div className="payment-gateway">

<h1>Complete Your Payment</h1>

<p>Name: {name}</p>
<p>Amount: ₹{amount}</p>

<h3>Select Payment Method</h3>

<div className="payment-options">

<button onClick={handlePayment}>
UPI
</button>

<button onClick={handlePayment}>
Net Banking
</button>

<button onClick={handlePayment}>
Debit / Credit Card
</button>

</div>

</div>

)

}