"use client"

import { generateReceipt } from "@/utils/generateReceipt"

export default function PaymentSuccess(){

function downloadReceipt(){

generateReceipt({
name:"Rahul Sharma",
email:"rahul@email.com",
amount:"2000",
txn:"TXN12345678",
date:new Date().toLocaleDateString()
})

}

return(

<div className="payment-success">

<h1>Payment Successful 🎉</h1>

<p>
Thank you for supporting Ethan Racing.
</p>

<button onClick={downloadReceipt}>
Download E-Receipt
</button>

</div>

)

}