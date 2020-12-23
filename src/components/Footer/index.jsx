import React from 'react'
import {Instagram,Facebook, Twitter} from '@material-ui/icons'

import './footer.css'

function Footer() {
    return (
        <footer id='footer'>
            <div className="footer-right-side">
                <a className='logo-footer' href='#'>Molokai</a>
                <p className='email-footer'>molokai@gmail.com</p>
                <div className="address-footer">
                    <p>Praia mole, 272</p>
                </div>
            </div>
            <div className="footer-left-side">
                <ul className="social-media">
                    <li className="social-media-item"><a href='#'><Instagram fontSize="large" /></a></li>
                    <li className="social-media-item middle-item"><a href='#'><Facebook fontSize="large" /></a></li>
                    <li className="social-media-item"><a href='#'><Twitter fontSize="large" /></a></li>
                </ul>
                <p>&copy; 2020 Molokai.</p>
            </div>
        </footer>
    )
}

export default Footer
