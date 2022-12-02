import React,{useEffect} from 'react';
import NavbarCore from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import '../index.css';

const PoliticaRetur = ()=>{
    useEffect(()=>{
        document.title = "Politica Retur Ghazal Ambalaje"
    },[])
    return(
        <>
            <NavbarCore />
                <div className='generic-page-container'>
                    <div className='generic-page-container-padding'>
                        <p>PoliticaRetur</p>
                    </div>
                    <Footer />
                </div>
        </>

    )
}
export default PoliticaRetur;
