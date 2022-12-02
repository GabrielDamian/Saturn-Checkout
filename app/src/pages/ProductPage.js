import React, {useState, useEffect } from 'react';
import NavbarCore from '../components/navBar/NavBar';
import './style/ProductPage.css';
import { facilitiesItems } from './Home';
import { FacilitiesItem } from './Home';
import {
    BrowserRouter as Router,
    useLocation,
    useNavigate  

} from "react-router-dom";
import { products } from '../core/products';
import {extractCart,
    completeDeleteFromCart,
    deleteFromCart,
    addToCart} from './../core/cartActions';

const FakeDetails = [
    'sdasdas dasdasdas',
    'sdg4fw4c4 sdfsdf sf',
    'aferg3c4vgfwedsd sdf sdf',
    'sdg4fw4c4 sdfsdf sf',
]

const FakeImages = [
    'https://s13emagst.akamaized.net/products/23916/23915241/images/res_ff9114f3a5fdc498af2ee28159220782.jpg?width=450&height=450&hash=D289308DDC9AB11A8E026CCBBC1E1825',
    'https://s13emagst.akamaized.net/products/38832/38831683/images/res_359101b0c866c30bfa42fb9a397687dc.jpg?width=450&height=450&hash=631AB4F0658B986645CD5373A24A43A6',
    'https://s13emagst.akamaized.net/products/38832/38831683/images/res_08e464c3b14deb2f8f152f05264ca5b6.jpg?width=450&height=450&hash=C7848FA7C079FF7200EAFC0D4DC8C76A',
]
const FakeSpecificatii =[
    {
        name: 'Greutate',
        value: '120g'
    },
    {
        name: 'Greutate',
        value: '120g'
    },
    {
        name: 'Greutate',
        value: '120g'
    },
    {
        name: 'Greutate',
        value: '120g'
    }
]
const ProductPage = ()=>{
    useEffect(()=>{
        document.title = 'Ghazal Ambalaje Acasa'
    },[])
    const navigate = useNavigate();
    const search = useLocation().search;
    let extractProduct = ()=>{
        const id = new URLSearchParams(search).get('id');
        console.log("id:",id)

        if(id === null || id === undefined) {
            return null
        }
         
        let found = null
        products.forEach((el, index)=>{
    
            if(el.id.toString() === id)
            {
                found = {...el}
            }
        })
    
        console.log("found:", found)
        document.title = found.title
        return found
    }

    const [productData, setProductData] = useState(null);
    useEffect(()=>{
        setProductData(extractProduct())
    },[])

    useEffect(()=>{
        console.log("update:", productData)
    },[productData])


    const [howMany, setHowMany] = useState(null);
    const addToCartLocal = ()=>{
        if(howMany !== null)
        {
            console.log("how many:", howMany)
            console.log("how many:", typeof howMany)
            addToCart(productData.id, parseInt(howMany))
            navigate('/checkout')
        }
        else 
        {
            addToCart(productData.id, 1);
            navigate('/checkout')

        }
        // 
    }
    const handleSelectChange = (e)=>{
        setHowMany(e.target.value);
    }
    return(
        <>
            <NavbarCore/>
            {
                productData === null ? 
                <p>Product not found</p>
                :
                <div className='product-page-container'>
                <div className='product-page-container-padding'>
                    <div className='product-page-container-padding-categories'>
                        <span>{productData.title}</span>
                    </div>
                    <div className='product-page-container-padding-top'>
                        <div className='product-page-container-padding-top-images'>
                            <div className='product-page-container-padding-top-images-big'>
                                <img src={productData.img}/>
                            </div>
                            <div className='product-page-container-padding-top-images-more'>
                            {
                                [productData.img].map((el)=>{
                                    return <ImageGallery source={el}/>
                                })
                            }
                            </div>
                        </div>
                        <div className='product-page-container-padding-top-details'>
                            <div className='product-page-container-padding-top-details-shop'>
                            {
                                    facilitiesItems.map((el)=>{
                                        return <FacilitiesItem {...el}/>
                                    })
                            }
                            </div>

                            <div className='product-page-container-padding-top-details-top'>
                            {
                                FakeDetails.map((el)=>{
                                    return <DetailsItem data={el}/>
                                })
                            }
                            </div>

                            <div className='product-page-container-padding-top-details-bot'>
                                <div className='product-page-container-padding-top-details-bot-padding'>
                                    <div className='product-page-container-padding-top-details-bot-padding-price'>
                                        <p className='price-container'>{productData.price.first}.{productData.price.second} RON</p>
                                        <p className='desc-container'>Vândut și livrat de: Bit Online</p>
                                    </div>
                                    <div className='product-page-container-padding-top-details-bot-padding-buy'>
                                        <div className='product-page-container-padding-top-details-bot-padding-buy-btn'>
                                            <button onClick={addToCartLocal}>Adauga in cos</button>
                                        </div>      
                                        <div className='product-page-container-padding-top-details-bot-padding-buy-bucs'>
                                            <select
                                                    onChange={handleSelectChange}
                                                >
                                                <option value="null">Cantitate:</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='product-page-container-padding-desc'>
                        <div className='product-page-container-padding-desc-title'>
                            <span>Descriere</span>
                        </div>
                        <div className='product-page-container-padding-desc-content'>
                            <span>{productData.title}</span>
                        </div>
                    </div>
                    <div className='product-page-container-padding-desc'>
                        <div className='product-page-container-padding-desc-title'>
                            <span>Specificatii</span>
                        </div>
                        <div className='product-page-container-padding-desc-specificatii'>
                        {
                            productData.specificatii.map((el)=>{
                                return <SpecificatieItem name={el[0]} value={el[1]} />
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            }
           
        </>
    )
}

const DetailsItem = ({data})=>{
    return(
        <div className='product-page-container-padding-top-details-top-item'>
            <img src="/media/icons/checked.png"/>
            <span>{data}</span>
        </div>
    )
}
const ImageGallery = ({source})=>{
    return(
        <div className='product-page-container-padding-top-images-more-item'>
            <img src={source} />
        </div>
    )
}
const SpecificatieItem = ({name,value})=>{
    return(
        <div className='product-page-container-padding-desc-specificatii-item'>
            <div className='product-page-container-padding-desc-specificatii-item-left'>
                <span>{name}</span>
            </div>
            <div className='product-page-container-padding-desc-specificatii-item-right'>
                <span>{value}</span>
            </div>
        </div>
    )
}
export default ProductPage;