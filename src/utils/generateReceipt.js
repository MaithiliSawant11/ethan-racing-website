import { jsPDF } from "jspdf"

export function generateReceipt(data){

const doc = new jsPDF()

doc.setFontSize(18)
doc.text("Ethan Racing", 20, 20)

doc.setFontSize(14)
doc.text("Donation Receipt", 20, 30)

doc.setFontSize(12)

doc.text(`Name: ${data.name}`,20,50)
doc.text(`Email: ${data.email}`,20,60)
doc.text(`Amount: ₹${data.amount}`,20,70)
doc.text(`Transaction ID: ${data.txn}`,20,80)
doc.text(`Date: ${data.date}`,20,90)

doc.text("Thank you for supporting Ethan Racing!",20,110)

doc.save(`Ethan-Racing-Receipt-${data.txn}.pdf`)

}