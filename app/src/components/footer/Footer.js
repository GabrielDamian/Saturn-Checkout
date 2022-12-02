import React from 'react';
import './Footer.css';


const FooterLinks =[
    {
        header: "Pagini",
        links: [
            ['Cos','/checkout'],
            ['Shop','/'],
            ['Despre','/despre'],
            ['Contact','/contact'],
        ]
    },
    {
        header: "Utile",
        links: [
            ['Termeni','/termeni-si-conditii'],
            ['Politica Retur','/politica-de-retur'],
            ['Politica Cookies','/politica-de-utilizare-cookies'],
            ['Politica Confidentialitate','/politica-de-confidentialitate'],
        ]
    }
]
const Footer = ()=>{
    return (
        <div className='footer-container'>
            <div className='footer-container-padding'>
                <div className='footer-container-top'>
                    <div className='footer-container-top-info'>
                        <div className='footer-container-top-info-logo'>
                            <img src="/media/logo.png"/>
                        </div>
                        <div className='footer-container-top-info-data'>
                            <div className='footer-container-top-info-data-row'>
                                <img src="/media/icons/phone-call.png"/>
                                <span>+40 234 234 234</span>
                            </div>
                            <div className='footer-container-top-info-data-row'>
                                <img src="/media/icons/email.png"/>
                                <span>shop@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    {
                        FooterLinks.map((el)=>{
                            return(<LinksItem {...el}/>)
                        })
                    }
                   
                </div>
                <div className='footer-container-bot'>
                    <div className='footer-container-bot-left'>
                        <span>© 2022 Toate drepturile rezervate GhazalAmbalaje.ro</span>
                    </div>
                    <div className='footer-container-bot-right'>
                        <img src="/media/icons/stripe-secure.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const LinksItem = (props)=>{
    return(
        <div className='footer-container-top-links'>
            <div className='footer-container-top-links-header'>
                <span>{props.header}</span>
            </div>
            <div className='footer-container-top-links-items'>
            {
                props.links.map((el)=>{
                    return(
                        <a href={el[1]}>{el[0]}</a>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Footer;