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
	let { amount, id, payload } = req.body

	console.log("raw amount:",amount)
	// Round to 2 decimals
	parsedAmount = amount * 10 * 10 //stripe need integer and divide it by itself

	try {
		const payment = await stripe.paymentIntents.create({
			amount: parsedAmount,
			currency: "RON",
			description: "Spatula company",
			payment_method: id,
			confirm: true,
			metadata:{
				...extractPayload(payload)
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


const extractPayload = (payload)=>{
	console.log("payload deepp:", payload)
	let fields = {}

	// Extract user fields
	fields['FrontEndPrice'] = payload['totalPrice']
	fields['Tip Client'] = payload['tipClient']

	Object.keys(payload['userFields']).forEach((el)=>{
		fields[el] = payload['userFields'][el]
	})
	//Extract user location
	Object.keys(payload['locationFields']).forEach((el)=>{
		fields[el] = payload['locationFields'][el]
	})
	//Extract products
	let index_product_iterator = 0;

	payload.products.forEach((el)=>{
		console.log("PRODUCT__:",el)
		let separator = "_/_"
		let productCore = ""
		// TODO:  add quantity
		productCore += el.id + separator + el.title + separator + "Bucati: " + el["Bucati"]
		fields[index_product_iterator] = productCore
		index_product_iterator +=1
	})

	console.log("test product core:",fields)
	return {...fields}
}