import React,{useState, useEffect} from 'react';
import NavbarCore from '../components/navBar/NavBar';
import './style/CartPage.css';
import { 
    extractCart,
    completeDeleteFromCart,
    deleteFromCart,
    addToCart
} from '../core/cartActions';

import { products } from '../core/products';
import Footer from '../components/footer/Footer';

import StripeContainer from '../StripeComponents/StripeContainer';

export const calculatePrice = (first, second)=>{
    let secondCalculated = null;
    if(parseInt(second) >= 0 && parseInt(second) <= 9)
    {
        secondCalculated = parseInt(second) / 10
    }
    else if(parseInt(second) >= 10 && parseInt(second) <=99)
    {
        secondCalculated = parseInt(second) / 100
    }
    else if(parseInt(second) >= 100 && parseInt(second) <=999)
    {
        secondCalculated = parseInt(second) / 1000
    }
    return parseInt(first) + secondCalculated
}

const calculateTotalPrice = (productsParam, userType)=>{
    let pretTotal = 0
    let adaugPersoanaJuridica = 3; //x%
    productsParam.forEach((product)=>{
        pretTotal += product["Bucati"] * calculatePrice(product.price.first,product.price.second).toFixed(2)
    })

    pretTotal = pretTotal.toFixed(2)
    pretTotal = parseFloat(pretTotal)

    if(userType == 'persoanaJuridica')
    {
        let adaos = (3/100)*pretTotal
        console.log("adaos:", adaos)
        pretTotal += adaos
    }
    console.log("pret ")
    pretTotal = pretTotal.toFixed(2)
    return pretTotal
}

const CartPage = ()=>{

    useEffect(()=>{
        document.title = "Checkout - Ghazal Ambalaje"
    },[])
    const [cartProducts, setCartProducts] = useState([]);

    const extractProductData = (mapParam)=>{

        let finalProducts = []
        Object.keys(mapParam).forEach((productId)=>{
            products.forEach((el)=>{
                if(el.id === parseInt(productId))
                {
                    let productPayload = {...el}
                    productPayload["Bucati"] = mapParam[productId]
                    finalProducts.push(productPayload)
                }
            })
        })

        return finalProducts
    }

    const refreshCart = ()=>{
        setCartProducts(extractProductData(extractCart()))
    }
    useEffect(()=>{
        // setCartProducts(extractCart())
        refreshCart();
    },[])

    const [exitPoint, setExitPoint] = useState(false);

    const handleExitPointClick = ()=>{
        //daca cosul este gold, exit
        if(cartProducts.length == 0)
        {
            return 
        }
        setExitPoint(true);
    }
    

    const [type, setType] = useState('persoanaFizica')
    
    return(
        <>
            <NavbarCore/>
            <div className='cart-container'>
                <div className='cart-container-padding'>
                    <div className='cart-container-padding-top'>
                        <div className='cart-container-content'>
                            <div className='cart-container-header'>
                                <CartItemRow
                                    imagine={null}
                                    nume={"Nume"}
                                    action={null}
                                    cantitate={"Cantitate"}
                                    pretUnitar={"Pret unitar"}
                                    pretTotal={"Pret total"}
                                />
                            </div>
                            <div className='cart-container-items'>
                            {
                                cartProducts.map((el)=>{
                                    return (
                                        <CartItemRow 
                                            refreshCart={refreshCart}
                                            productId={el.id}
                                            imagine={el.img}
                                            nume={el.title}
                                            cantitate={el.Bucati}
                                            action={"ok"}
                                            pretUnitar={calculatePrice(el.price.first,el.price.second)}
                                            pretTotal={(calculatePrice(el.price.first,el.price.second) * el.Bucati).toFixed(2) }
                                        />)
                                })
                            }
                            </div>
                        </div>
                        <div className='cart-container-cart'>
                            <div className='cart-container-cart-headline'>
                                <span>Finalizeaza Cumparaturile:</span>
                            </div>
                            <div className='cart-container-cart-headline-total'>
                                <span className='cart-container-cart-headline-total-adaos'>
                                    {
                                        type == 'persoanaJuridica' ? '+3%':''
                                    }
                                </span>
                                <span>
                                    <b>Total:</b> 
                                    {calculateTotalPrice(cartProducts, type)}
                                    </span>
                            </div>  
                            <div className='cart-container-cart-headline-action'>
                                <button className='continua-cumparturile'>Continua cumparaturile</button>
                            </div>
                            <div className='cart-container-cart-headline-action'>
                                <button
                                    onClick={handleExitPointClick}
                                    className='finalizeaza-comanda'>Finalizeaza comanda</button>
                            </div>
                        </div>
                    </div>
                    <div className='cart-container-padding-bot'>
                        <span>Finalizeaza Comanda</span>
                    </div>
                    {
                        exitPoint == true ?
                        <CollectCheckoutData 
                            totalPrice={calculateTotalPrice(cartProducts, type)} 
                            products={cartProducts}
                            type={type}
                            setType={setType}
                            />
                        :
                        null
                    }
                </div>
                <Footer />
            </div>  
            
        </>
    )
}

const CartItemRow = (props)=>{
    
    const itemRowAddToCart = ()=>{
        addToCart(props.productId, 1)
        props.refreshCart()
    }
    const itemRowDeleteToCart = ()=>{
        deleteFromCart(props.productId,1)
        props.refreshCart()
    }
    const itemRowClearFromCart = ()=>{
        completeDeleteFromCart(props.productId);
        props.refreshCart()
    }
    return (
        <div className='cart-container-item'>
            <div className='cart-container-imagine'>
                {props.imagine == null ? "Image": <img src={props.imagine}/>}
            </div>
            <div className='cart-container-nume'>
                <span>{props.nume}</span>
            </div>
            <div className='cart-container-actions'>
            {
                props.action == null ?
                "Adauga"
                :
                <>
                <ActionsItem icon="/media/icons/plus.png" callback={itemRowAddToCart}/>
                <ActionsItem icon="/media/icons/minus.png" callback={itemRowDeleteToCart}/>
                <ActionsItem icon="/media/icons/exit.png" callback={itemRowClearFromCart}/>
                </>
            }
            </div>
            <div className='cart-container-cantitate'>
                <span>{props.cantitate}</span>
            </div>
            <div className='cart-container-pret-unitar'>
                <span>{props.pretUnitar}</span>
            </div>
            <div className='cart-container-pret-total'>
                <span>{props.pretTotal}</span>
            </div>
        </div>
    )
}

const ActionsItem = ({icon, callback})=>{
    return(
        <div
            onClick={()=>callback()} 
            className='cart-container-actions-btn'>
            <img src={icon}/>
        </div>
    )
}

export const userTypes = {
    persoanaFizica:[
        ["Nume", "text"],
        ["Prenume", "text"],
        ["E-Mail", "text"],
        ["Telefon", "number"],
    ],
    persoanaJuridica:[
        ["Nume", "text"],
        ["Prenume", "text"],
        ["E-Mail", "text"],
        ["Telefon", "number"],
        ["Denumire Firma", "text"],
        ["Cod fiscal (CUI)", "number"],
        ["Nr. Reg. Com.", "number"],
    ]
}
export const locationFieldsInit =["Tara", "Judet", "Localitate", "Adresa"]

const CollectCheckoutData = ({products, totalPrice,type,setType})=>{
    
    // const [type, setType] = useState('persoanaFizica')
    const handleTypeClick = (newType)=>{
        if(newType === 'persoanaFizica')
        {
            setType('persoanaFizica')
        }
        else  if(newType === 'persoanaJuridica')
        {
            setType('persoanaJuridica')
        }
    }
    useEffect(()=>{
        personaTypeSet(type);
    },[type])

    const personaTypeSet = (newUserType)=>{
        let newObject = {}
        userTypes[newUserType].forEach((el)=>{
            newObject[el[0]] = ''
        })
        setUserFields(newObject);
    }

    const [userFields, setUserFields] = useState({})

    const initLocationFields = ()=>{
        let newObj = {}
        locationFieldsInit.forEach((el)=>{
            initLocationFields[el] = ''
        })   
        return newObj
    }
    const [locationFields, setLocationFields] = useState(initLocationFields())

    const handleFieldUpdate = (newValue,field, parentObject)=>{
        if(parentObject == 'user data')
        {
            setUserFields((prev)=>{
                let copy = {...prev}
                copy[field] = newValue
                return copy
            })
        }
        else if(parentObject == 'user location')
        {
            setLocationFields((prev)=>{
                let copy = {...prev}
                copy[field] = newValue
                return copy
            })
        }
    }

    const collectPayload = ()=>{
        let collectPayload = {
            totalPrice: totalPrice,
            tipClient: type,
            userFields: userFields,
            locationFields: locationFields,
            products: products
        }
        return collectPayload
    }
    return(
        <div className='collect-checkout-data'>
            <div className='collect-checkout-data-type'>
                <button 
                    onClick={()=>handleTypeClick('persoanaFizica')}
                    style={{
                        backgroundColor: type == 'persoanaFizica' ? '#89c149': '#d8d8d8'
                    }}    
                >Persoana Fizica</button>

                <button 
                    onClick={()=>handleTypeClick('persoanaJuridica')}
                    style={{
                        backgroundColor: type == 'persoanaJuridica' ? '#89c149': '#d8d8d8'
                    }}    
                    >Persoana Juridica</button>
            </div>
            <div className='collect-checkout-data-user-data'>
            {
                Object.keys(userFields).map((el)=>{
                    return <InputElement 
                                name={el} 
                                value={userFields[el]}
                                parent="user data"
                                handleFieldUpdate={handleFieldUpdate}
                                />
                })
            }
            </div>
            <div className='collect-checkout-data-destination'>
                <div className='collect-checkout-data-header'>
                    <span>ADRESA DE FACTURARE</span>
                </div>
                <div className='collect-checkout-data-items-row'>
                    {
                        locationFieldsInit.map((el)=>{
                            return <InputElement 
                                        name={el} 
                                        value={locationFields[el]}
                                        parent="user location"
                                        handleFieldUpdate={handleFieldUpdate}
                                        />
                        })
                    }
                </div>
            </div>
            <div className='collect-checkout-data-payment-area'>
                {/* <Checkout /> */}
                <StripeContainer collectPayload={collectPayload}/>
            </div>
            
            {/* <div className='collect-checkout-data-finish-payment'>
                <button onClick={handleMainExit}>Finalizeaza Comanda</button>
            </div> */}
        </div>
    )
}

const InputElement = ({name, value, parent, handleFieldUpdate})=>{
    const handleInputChange = (e)=>{
        handleFieldUpdate(e.target.value, name, parent)
    }
    return (
        <div className='collect-checkout-data-row-element'>
            <div className='collect-checkout-data-row-element-label'>
                <span>{name}</span>
            </div>
            <div className='collect-checkout-data-row-element-input'>
                <input 
                    type="text" 
                    value={value} 
                    placeholder={name}
                    onChange={handleInputChange}
                    ></input>
            </div>
        </div>
    )
}
export default CartPage;
