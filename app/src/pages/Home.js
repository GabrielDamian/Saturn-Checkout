import React, { useState, useEffect } from 'react';
import NavbarCore from '../components/navBar/NavBar.js';
import './style/Home.css';
import LeftBar from '../components/navBar/LeftBar.js';
import { products,filterProducts } from '../core/products.js';
import { useNavigate } from 'react-router-dom';
import {addToCart} from '../core/cartActions';
import Footer from '../components/footer/Footer.js';

export let facilitiesItems = [
    {
        icon: '/media/icons/courier.png',
        content: 'Livrari prin curier in 24h'
    },
    {
        icon: '/media/icons/product-return.png',
        content: 'Retur in 14 zile'
    },
    {
        icon: '/media/icons/sage.png',
        content: 'Plata securizata'
    },
]
let banners = [
    "https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/317721631_112572755015755_8106493127591799392_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=1ySD0yUBUtQAX8Db7ML&_nc_ht=scontent.fotp7-2.fna&oh=00_AfA_bjzxIC3DIUUXJiQsNRkZms2CK1DMzeP85bgwpm2EDg&oe=638E54CB",
    "https://ghazal-ambalaje.ro/static/media/bg-intro.d1502a46057870e42555.png",
]
const Home = ()=>{
    
    useEffect(()=>{
        document.title = 'Ghazal Ambalaje Acasa'
    },[])
    
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [currentCategory, setCurrentCategory] = useState('caserole');
    useEffect(()=>{
        console.log("currentCategory update:", currentCategory)
        setFilteredProducts(filterProducts(products, currentCategory));
    },[currentCategory])


    const handleCategoryChange = (newCategory)=>{
        console.log("new category:", newCategory)
        setCurrentCategory(newCategory);
    }

    const [currentBanner, setCurrentBanner] = useState(0);
    const handleBannerClick = (direction)=>{
        if(direction == 'left')
        {
            if(currentBanner == 0)
            {
                setCurrentBanner(banners.length-1);
            }
            else 
            {
                setCurrentBanner((prev)=>{
                    return prev-1;
                }) 
            }
        }
        else if(direction == 'right')
        {
            if(currentBanner == banners.length -1)
            {
                setCurrentBanner(0);
            }
            else 
            {
                setCurrentBanner((prev)=>{
                    return prev+1;
                })
            }
        }
    }
    return(
        <>
            <NavbarCore />
            <div className='homepage-container'>
                <div className='homepage-container-padding'>
                    <LeftBar handleCategoryChange={handleCategoryChange} />
                    <div className='homepage-container-padding-content'>
                        <div className='homepage-container-padding-content-top'>
                            <div
                                onClick={()=>handleBannerClick("left")} 
                                className='homepage-container-padding-content-top-left'>
                                <img src="/media/icons/left-arrow.png"/>
                            </div>
                            <div
                                onClick={()=>handleBannerClick("right")} 
                                className='homepage-container-padding-content-top-right'>
                                <img src="/media/icons/right-arrow.png"/>
                            </div>
                            <img src={banners[currentBanner]}/>
                        </div>
                        <div className='homepage-container-padding-content-core'>
                            <div className='homepage-container-padding-content-core-desc'>
                                {
                                    facilitiesItems.map((el)=>{ 
                                        return <FacilitiesItem {...el}/>
                                    })
                                }
                            </div>
                            <div className='homepage-container-padding-content-products'>
                            {
                                filteredProducts.map((el)=>{
                                    return <ProductItem {...el}/>
                                })
                            }
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export const FacilitiesItem = ({icon, content})=>{
    return(
        <div className='homepage-container-padding-content-core-desc-item'>
            <img src={icon} />
            <span>{content}</span>
        </div>
    )
}

const ProductItem = (props)=>{
    
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("product item:", props)
    },[])
    
    const handleRedirect = (dest)=>{
        navigate(`/product?id=${dest}`);
    }

    return(
        <div
            onClick={()=>handleRedirect(props.id)} 
            className='home-product-item-container'>
            <div 
                className='home-product-item-container-img'
                style={{
                    backgroundImage: `url(${props.img})`
                }}
                >
                <div
                    onClick={()=>addToCart(props.id,1)} 
                    className='home-product-item-container-img-abs'>
                    <img src="/media/icons/add-to-cart.png"/>
                </div>
            </div>
            <div className='home-product-item-container-desc'>
                <div className='home-product-item-container-desc-name'>
                    <span>{props.title}</span>
                </div>
                <div className='home-product-item-container-desc-price'>
                    <span className='home-product-item-container-desc-price-1'>
                        {props.price.first}.{props.price.second} Lei
                    </span>
                    <span className='home-product-item-container-desc-price-2'>TVA inclus</span>
                </div>
            </div>
        </div>
    )
}
export default Home;