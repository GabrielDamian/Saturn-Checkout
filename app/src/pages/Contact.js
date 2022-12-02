import React,{useEffect} from 'react';
import NavbarCore from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import '../index.css';

const Contact = ()=>{
    useEffect(()=>{
        document.title = "Contact Ghazal Ambalaje"
    },[])
    return(
        <>
            <NavbarCore />
                <div className='generic-page-container'>
                    <div className='generic-page-container-padding'>
                        <p>Contact</p>
                    </div>
                    <Footer />
                </div>
        </>

    )
}
export default Contact;