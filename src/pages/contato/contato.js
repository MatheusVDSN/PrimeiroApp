import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contato(){
    return (
        <>
            <Header />
            <div className="box1 c1">
                <div className="box2 c1">
                    <div className="contact-box c1">
                        <h1>Entre em contato</h1>
                            
                                <h2>Email:</h2>                            
                                <h3>&nbsp;&nbsp;&nbsp;Thebatman@gotham.com</h3>
                             
                                <h2>Telefone:</h2>
                                <h3>&nbsp;&nbsp;&nbsp;0800 873 9127</h3>
                            
                                <h2>Redes Sociais:</h2>
                                <h3>&nbsp;&nbsp;&nbsp;Instagram</h3>
                                <h3>&nbsp;&nbsp;&nbsp;Facebook</h3>
                    </div>
                    </div>
                    </div>
                    <div>
                  
                </div>
            <Footer />
        </>
    )
}

export default Contato;