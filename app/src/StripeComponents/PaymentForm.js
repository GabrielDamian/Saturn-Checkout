import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useEffect, useRef, useState } from 'react'
import './PaymentForm.css';
import { useNavigate } from 'react-router-dom';
import {userTypes,locationFieldsInit} from '../pages/CartPage';
import {clearCart} from '../core/cartActions';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm({collectPayload}) {
    const navigate = useNavigate();

    const [success, setSuccess ] = useState(false)
    
    useEffect(()=>{
        console.log("Plata efectuata cu succes");
        if(success == true)
        {
            setTimeout(()=>{
                navigate('/success')
                clearCart();
            },1000)
        }
    },[success])

    const stripe = useStripe()
    const elements = useElements()

    const [fieldCheck, setFieldCheck] = useState('');
    let genericFailMsg = "Nu s-a putut efectua plata. Te rugam sa incerci mai tarziu."
    const handleFieldsCheck = (payload)=>{
        let minimumPayment = 2
        if(payload['totalPrice'] == undefined ||payload['totalPrice'] < 2)
        {
            setFieldCheck(`Suma minima este de ${minimumPayment} Lei`)
            return false
        }
        console.log("fields chek payload:", payload)
        console.log("ref_1:", locationFieldsInit)
        console.log("ref_2:", userTypes)
        let tipClient = payload["tipClient"]
        if(tipClient)
        {
            console.log("case 1")
            let passTest = true
            userTypes[tipClient].forEach((el)=>{
                //user fields are campurile deja declarate in obiect
                Object.keys(payload["userFields"]).forEach((clientField)=>{
                    if(payload["userFields"][clientField] == undefined || payload["userFields"][clientField] == '' || payload["userFields"][clientField] == ' ')
                    {
                        console.log("1.1")
                        setFieldCheck("Te rugam sa completezi campul "+clientField)
                        passTest = false
                    }
                })
            })
            if(passTest == false)
            {
                return false
            }

            passTest = true
            
            locationFieldsInit.forEach((locationField)=>{
                if(payload["locationFields"][locationField] == undefined || payload["locationFields"][locationField] == '' || payload["locationFields"][locationField] == ' ')
                {
                    setFieldCheck("Te rugam sa completezi campul "+ locationField)
                    passTest = false
                }
            })
            if(passTest == false)
            {
                return false
            }
        }
        else 
        {
            console.log("case 2")
            setFieldCheck(genericFailMsg)
            return false
        }
        console.log("case 3")
        setFieldCheck('')
        return true
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(handleFieldsCheck(collectPayload()) == false)
        {
            console.log("Fields check failed!")
            return
        }
        else 
        {
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    
        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: collectPayload().totalPrice,
                    id,
                    payload: {...collectPayload()}
                })

                if(response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
                setFieldCheck(genericFailMsg)

            }
        } else {
            console.log(error.message)
            setFieldCheck("Datele cardului sunt incomplete!")
        }
        
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <div className="pay-checkout-button-container">
                    <span className="pay-checkout-check">{fieldCheck}</span>
                    <button className="pay-checkout-button">Plateste Comanda</button>
                </div>
            </form>
        </>
    )
}
