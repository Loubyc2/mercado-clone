import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import logoFooter from '../../img/logo__small@2x.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__banner">
                <div className="footer__banner-img">
                    <img src={logoFooter} alt="" />
                </div>
                <h5>Achte e vann avèk aplikasyon an</h5>
            </div>
            <div className="footer__menu">
                <div className="footer__menu-left">
                    <ul>
                        <Link to='/'>
                            <li> Kont mwen</li>
                        </Link>
                        <Link to='/'>
                            <li>Istoryal</li>
                        </Link>
                        <Link to='/'>
                            <li>Favori</li>
                        </Link>
                        <Link to='/'>
                            <li>Kategori</li>
                        </Link>
                        <Link to='/'>
                            <li>Èd</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer__menu-right">
                    <ul>
                        <Link to='/'>
                            <li>Acha mwen yo</li>
                        </Link>
                        <Link to='/'>
                            <li>Likidasyon</li>
                        </Link>
                        <Link to='/'>
                            <li>Magazen ofisyèl</li>
                        </Link>
                        <Link to='/'>
                            <li>Mercado Pwen</li>
                        </Link>
                        <Link to='/'>
                            <li>Vann</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="footer__account">
                <p> <Link to='/'>Antre</Link>| <Link to='/'>Kreye yon kont</Link></p>
            </div>
        </div>
    )
}

export default Footer
