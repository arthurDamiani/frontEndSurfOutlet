import React from 'react'
import {Instagram,Facebook, Twitter} from '@material-ui/icons'

import './footer.css'

function Footer() {
    return (
        <footer id='footer' className='footer'>
            <ul className="social-media">
                <li className="social-media-item"><a href='#'><Facebook fontSize="large" /></a></li>
                <li className="social-media-item middle-item"><a href='#'><Instagram fontSize="large" /></a></li>
                <li className="social-media-item"><a href='#'><Twitter fontSize="large" /></a></li>
            </ul>
            <ul className='footer-services'>
                <li className='no-decoration'>Info</li>
                <li>Suporte</li>
                <li>Acompanhe seu pedido</li>
            </ul>
            <ul className='footer-services'>
                <li className='no-decoration'>Formas de pagamento</li>
                <li>Politicas de privacidade</li>
            </ul>
            <p className='copyright'>&copy; Copyright 2021 - Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer
