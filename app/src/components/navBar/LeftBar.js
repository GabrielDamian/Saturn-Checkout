import React,{useState, useEffect} from 'react';
import './LeftBar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate  
  } from "react-router-dom";

//widht: 30%
const Items = [
    {
        name: 'Pahare',
        items: [
            {
                name: 'Toate',
                raw: 'pahare',
                to: '/pahare'
            },
        ]
    },
    {
        name: 'Caserole',
        items: [
            {
                name: 'Toate',
                raw: 'caserole',
                to: '/caserole'
            },
        ]
    },
    {
        name: 'Produse Curatenie',
        items: [
            {
                name: 'Toate',
                raw: 'curatenie',
                to: '/curatenie'
            },
        ]
    },
    {
        name: 'Farfurii',
        items: [
            {
                name: 'Carton',
                raw: 'farfuriiCarton',
                to: '/farfurii-carton'
            },
            {
                name: 'Bio',
                raw: 'farfuriiBio',
                to: '/farfurii-bio'
            },
        ]
    },
    {
        name: 'Diverse',
        items: [
            {
                name: 'Toate',
                raw: 'diverse',
                to: '/diverse'
            },
        ]
    }
]

const LeftBar = ({handleCategoryChange})=>{
    return(
        <div className='left-bar-container'>
        <div className='left-bar-container-top'>
            <span>Filtreaza dupa categorie</span>
        </div>
        <div className='left-bar-container-content'>
        {
                Items.map((el)=>{
                    return(
                        <div 
                            onClick={()=>{
                                if(el.items.length==1)
                                {
                                    handleCategoryChange(el.items[0].raw)
                                }
                            }}
                            class="dropdown">
                            <span class="dropdown-main">{el.name}</span>
                            <div class="dropdown-abs">
                                {
                                    el.items.map((el_deep)=>{
                                        return(
                                            <div 
                                                class="dropdown-abs-item"
                                                onClick={()=>handleCategoryChange(el_deep.raw)}
                                                >
                                                    <span>{el_deep.name}</span>
                                                    {/* <Link to={el_deep.to}>{el_deep.name}</Link> */}
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
        }
        </div>
        </div>
    )
}

export default LeftBar;