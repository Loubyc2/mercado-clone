import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/gr';

import './Header.css'

// Image

import logoHeader from '../../img/logo__small@2x.png';

function Header() {
    const [showHeaderMenu, setShowHeaderMenu] = useState(true)

    const toggleMenu = () => {
        setShowHeaderMenu(!showHeaderMenu)
    }
    return (
        <div className="header ">
            <div className="header__top">
                <span className="header__logo"><img src={logoHeader} alt="logo-header" /></span>
                <div className="input-search">
                    <span><BiIcons.BiSearch /></span>
                    <input type="text" placeholder="Chèche pwodui, mak ak lòt ankò" />
                </div>
                <Link to="/" className="header__top-menu"> <span >{showHeaderMenu ? <AiIcons.AiOutlineMenu onClick={toggleMenu} /> : <AiIcons.AiOutlineClose onClick={toggleMenu} />}</span></Link>
                <Link to="/" className="header__top-cart"> <span ><FiIcons.FiShoppingCart /></span></Link>
            </div>
            <div className={showHeaderMenu ? "header__bottom" : "hide"}>
                <Link to="/">
                    <div className="header__bottom-location">
                        <p><span><IoIcons.GrLocation /></span> Rantre kote w ye</p>
                    </div>
                    <span><BiIcons.BiChevronRight /></span>
                </Link>
            </div>
            <div className={showHeaderMenu ? 'hide' : 'header__menu'}>
                <div className='header__menu-account'>
                    <div className='header__menu-account-user'>
                        <div className='avatar'></div>
                        <div>
                            <h6>Byenvini</h6>
                            <p>Konekte pou w kapab wè acha w yo, favori w yo, elatriye</p>
                        </div>
                    </div>
                    <div className='header__account-btns'>
                        <button className='btn btn-primary px-5'>Antre</button>
                        <button className='btn btn-outline-primary'>Kreye yon kont</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
