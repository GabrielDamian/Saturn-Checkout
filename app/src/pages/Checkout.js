import React,{useState,useEffect} from 'react';
import { products } from '../core/products';
import StripeContainer from '../StripeComponents/StripeContainer';
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
  } from "react-router-dom";
const Checkout = ()=>{

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        let products = localStorage.getItem('saturn-products')
        if(products == null)
        {
            console.log("empty checkout")
        }
        else 
        {
           let extract = JSON.parse(products)
           setData(extract)
        }
    },[])

    const totalPrice = ()=>{
        let counter = 0

        let rawProducts = []
        Object.keys(products).map((el)=>{
            products[el].products.forEach((el_product)=>{
                rawProducts.push(el_product)
            })
        })

        data.forEach((product_to_find)=>{
            rawProducts.forEach((el)=>{
                if(el.id == product_to_find.id)
                {
                    counter += product_to_find.bucs * Number(el.pret);
                }
            })
        })
        setTotal(counter);
    }

    useEffect(()=>{
        if(data.length > 0)
        {
            totalPrice();
        }
    },[data])

    const payCheckout = async ()=>{
        console.log("final:", data)

        let formatData = data.map((el)=>{
            return{
                id: el.id,
                quantity: el.bucs
            }
        })

        console.log("Format data:",formatData)

        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: formatData})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });

    }

    return(
        <>
            <p>Checkout</p>
            <>
            {
                data.map((el)=>{
                    return(
                        <p>Produs: {el.id} - {el.bucs} bucati</p>
                    )
                })
            }
            </>
            <p>Total: {total} RON</p>
            <button onClick={payCheckout}>Plateste</button>
            <>
                <StripeContainer />
            </>
        </>
    )
}
export default Checkout;