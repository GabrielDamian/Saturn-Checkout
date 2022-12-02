import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useEffect } from "react"
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51M3IIzCLryJM3oFkN4Mxd2LlbLn6kS4kHDUojEc3KUyLKiCcCaxuX1voZbdEN5Gqe4eMgOwgF4ZU9nlyD7FdwA3n00f07lRm6j"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({collectPayload}) {
	useEffect(()=>{
		console.log("deep 1:",collectPayload())
	},[])
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm collectPayload={collectPayload}/>
		</Elements>
	)
}
