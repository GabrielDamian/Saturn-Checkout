
import {calculatePrice} from '../pages/CartPage';
import { products } from './products';

const LocalStorageId = "GhazalShop_1"

export function addToCart(productId, pieces)
{
    if(localStorage.getItem(LocalStorageId))
    {
        let oldJson = localStorage.getItem(LocalStorageId)
        let parsed = undefined;
        try{
            parsed = JSON.parse(oldJson)
        }
        catch(e)
        {
            return null
        }
        if(parsed[productId])
        {
            //product already exist in the cart
            let productPieces = parsed[productId] + pieces
            let newCart = {...parsed}
            newCart[productId] = productPieces
            let jsonCart = JSON.stringify(newCart)

            localStorage.setItem(LocalStorageId, jsonCart)
        }
        else 
        {
            //cart contains other products
            parsed[productId] = pieces
            let jsonCart = JSON.stringify(parsed)

            localStorage.setItem(LocalStorageId, jsonCart)
        }
    }
    else 
    {
        //cart empty, first product added
        let newObj = {}
        newObj[productId] = pieces
        
        let jsonFormat = JSON.stringify(newObj)
        localStorage.setItem(LocalStorageId, jsonFormat)
    }
}

export function completeDeleteFromCart(productId)
{
    if(localStorage.getItem(LocalStorageId))
    {
        let oldJson = localStorage.getItem(LocalStorageId)
        let parsed = undefined;
        try{
            parsed = JSON.parse(oldJson)
        }
        catch(e)
        {
            return null
        }

        console.log("delete all:", parsed);
        delete parsed[productId]
        console.log("after:", parsed)
        let jsonFormat = JSON.stringify(parsed)
        localStorage.setItem(LocalStorageId, jsonFormat)
    }
    else 
    {
        console.log("Cart is already empty")
    }

}
export function deleteFromCart(productId)
{
    console.log("delete action:")
    console.log(localStorage.getItem(LocalStorageId))
    if(localStorage.getItem(LocalStorageId))
    {
        let oldJson = localStorage.getItem(LocalStorageId)
        let parsed = undefined;
        try{
            parsed = JSON.parse(oldJson)
        }
        catch(e)
        {
            return null
        }

        console.log("parsed cart:", parsed)
        if(parsed[productId] == 1)
        {
            delete parsed[productId]
            let jsonFormat = JSON.stringify(parsed)
            localStorage.setItem(LocalStorageId, jsonFormat)
        }
        else 
        {
            let currentPieces = parsed[productId] - 1
            parsed[productId] = currentPieces
            let jsonFormat = JSON.stringify(parsed)
            localStorage.setItem(LocalStorageId, jsonFormat)
        }
    }
    else 
    {
        console.log("Cart is already empty!")
    }
    
}

export function extractCart()
{
    if(localStorage.getItem(LocalStorageId))
    {
        let cartJson = localStorage.getItem(LocalStorageId)
        let parsedCart = null;
        
        try{
            parsedCart = JSON.parse(cartJson)
        }
        catch(e){
            return []
        }

        return parsedCart
    }
    else 
    {
        return []
    }
}

export function countCartProducts()
{
    if(localStorage.getItem(LocalStorageId))
    {
        let oldJson = localStorage.getItem(LocalStorageId)
        let parsed = undefined;
        try{
            parsed = JSON.parse(oldJson)
        }
        catch(e)
        {
            return null
        }
        let counter = 0;
        Object.keys(parsed).forEach((productId)=>{
            counter += parsed[productId]
        })
        
        return counter;
    }   
    else 
    {
        console.log("Cart is empty, can't count");
        return 0;
    }

}

export function calculateTotalPrice()
{
    if(localStorage.getItem(LocalStorageId))
    {
        let oldJson = localStorage.getItem(LocalStorageId)
        let parsed = undefined;
        try{
            parsed = JSON.parse(oldJson)
        }
        catch(e)
        {
            return null
        }
        let total = 0;
        Object.keys(parsed).forEach((elId)=>{

            let howMany = parsed[elId]
            products.forEach((el)=>{
                if(el.id == elId)
                {
                    let currentPrice = howMany * calculatePrice(el.price.first, el.price.second).toFixed(2)
                    total += currentPrice
                }
            })
        })
        return total.toFixed(2)
    }   
    else 
    {
        console.log("Cart is empty, can't count");
        return 0;
    }

    return 88.88
}

export function clearCart()
{
    if(localStorage.getItem(LocalStorageId))
    {
        let emptyCart = {}
        localStorage.setItem(LocalStorageId,JSON.stringify(emptyCart))
    }
    else 
    {
        console.log("Cart is already empty!")
    }

}

