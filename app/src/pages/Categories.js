import React from 'react';
import { products } from '../core/products';
import './style/tempProduct.css';


const Categories = ()=>{

    let extractProducts = (source)=>{
        let arr = []
        Object.keys(source).forEach((category)=>{
            source[category].products.forEach((el)=>{
                let temp = {...el}
                temp.category = category
                arr.push(temp)
            })
        })

        return arr
    }

    const adaugaCos = (product)=>{
        let prev = localStorage.getItem('saturn-products')
        console.log("prev:", prev)
        if(prev == null)
        {
            let products = [
                {
                    id: product.id,
                    bucs: 1
                }
            ]
            localStorage.setItem('saturn-products',JSON.stringify(products))
        }
        else 
        {
            let prevProducts = JSON.parse(prev)
            let updatedProducts = []
            console.log("parsed:", prevProducts)
            let existaDeja = false
            prevProducts.forEach((el)=>{
                if(el.id == product.id)
                {
                    existaDeja = true
                }
            })


            if(existaDeja == true)
            {
                updatedProducts = prevProducts.map((el)=>{
                    if(el.id == product.id)
                    {
                        return {
                            id: el.id,
                            bucs: el.bucs + 1
                        } 
                    }
                    else 
                    {
                        return el
                    }
                })
            }
            else 
            {
                updatedProducts = [...prevProducts]
                updatedProducts.push({
                    id: product.id,
                    bucs: 1
                })
            }

            console.log("updated produscts:",updatedProducts)

            localStorage.setItem('saturn-products',JSON.stringify(updatedProducts))

        }
    }
    return(
        <div className='product-container'>
            {
                extractProducts(products).map((el)=>{
                    return(
                        <div className='product-el'>
                            <p>Name: {el.name}</p>
                            <p>categpry: {el.category}</p>
                            <p>marime: {el.marime}</p>
                            <p>model: {el.model}</p>
                            <p>type: {el.type}</p>
                            <p>pret: {el.pret}</p>
                            <button onClick={()=>adaugaCos(el)}>Adauga in cos:</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Categories;