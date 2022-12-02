import React,{useEffect} from 'react';
import NavbarCore from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import '../index.css';

const Termeni = ()=>{
    useEffect(()=>{
        document.title = "Termeni Ghazal Ambalaje"
    },[])
    return(
        <>
            <NavbarCore />
                <div className='generic-page-container'>
                    <div className='generic-page-container-padding'>
                        <p>Termeni</p>
                    </div>
                    <Footer />
                </div>
        </>

    )
}
export default Termeni;
