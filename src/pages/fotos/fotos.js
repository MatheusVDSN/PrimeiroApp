import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './styles.css'

function Fotos(){
    return (
        <>
            <Header />
    
            <div class="box1 c1">
                <div class="box2 c1">
                    <div class="fotos-box c1">
                        <div class="fotos foto1"></div>
                        <div class="fotos foto2"></div>
                        <div class="fotos foto3"></div>
                        <div class="fotos foto4"></div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Fotos;