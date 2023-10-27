import React from 'react'
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Comentarios(){
    return(
        <>
         <Header/>
         <div class="box1 c1">
           <div id='sinopsec'>
                <p className='descriptionc'>
                Nesta nova versão de Batman, Bruce Wayne está em seu segundo ano atuando como o vigilante mascarado 
                na cidade de Gotham. Ao investigar uma série de assassinatos praticados pelo vilão Charada, Batman e 
                o comissário Gordon se deparam não apenas  com uma rede de corrupção envolvendo altos cargos públicos, 
                mas também com revelações que ameaçam a integridade da memória de Thomas Wayne.

                A partir de uma abordagem estilizada já característica de seus trabalhos anteriores, Matt Reeves constrói 
                o filme como uma espécie de pesadelo pessoal do protagonista. O cineasta deixa de lado um possível realismo 
                que marcou os filmes dirigidos por Christopher Nolan e nos oferece uma adaptação mais subjetiva e ambígua.
                </p>
            </div>
        </div>
        <Footer/>
        </>
    )

}
export default Comentarios;