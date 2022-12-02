import React,{useEffect} from 'react';
import NavbarCore from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import '../index.css';

const Despre = ()=>{
    useEffect(()=>{
        document.title = "Despre Ghazal Ambalaje"
    },[])
    return(
        <>
            <NavbarCore />
                <div className='generic-page-container'>
                    <div className='generic-page-container-padding'>
                        <p>Despre</p>
                    </div>
                    <Footer />
                </div>
        </>

    )
}
export default Despre;