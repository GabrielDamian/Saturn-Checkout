import React,{useEffect} from 'react';
import NavbarCore from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import '../index.css';

const PoliticaConfidentialitate = ()=>{
    useEffect(()=>{
        document.title = "Politica Confidentialitate Ghazal Ambalaje"
    },[])
    return(
        <>
            <NavbarCore />
                <div className='generic-page-container'>
                    <div className='generic-page-container-padding'>
                        <p>PoliticaConfidentialitate</p>
                    </div>
                    <Footer />
                </div>
        </>

    )
}
export default PoliticaConfidentialitate;

