const express = require("express")
const app = express()
// require("dotenv").config()
const stripe = require("stripe")('sk_test_51M3IIzCLryJM3oFkLoU3JDN7JpIV5ixa5GkK1swuzusEeznGL6Mu5zgAWR4EfL14iHh4qQENrGO0P3aACUH72kwG00eXbkzFJ9')
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	console.log("Test:", amount, id);
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true,
			metadata:{
				field1: 'ceva',
				field2: 'altceva'
			}
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})
