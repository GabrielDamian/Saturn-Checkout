import React, { useEffect } from 'react';
import './style/SuccessPayment.css';
import { useNavigate } from 'react-router-dom';

const SuccessPayment = ()=>{
    useEffect(()=>{
        document.title = "Success Payment"
    },[])
    const navigate = useNavigate();

    const handleHomeRedirect = ()=>{
        navigate('/')
    }
    return(
        <div className='succes-payment-container'>
            <img src="/media/icons/success.png"/>
            <span>Plata efectuata cu succes!</span>
            <button onClick={handleHomeRedirect}>Continua cumparaturile</button>
        </div>
    )
}
export default SuccessPayment;