import React from 'react';
import { Link } from 'react-router-dom';

import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/gr';

import './Header.css'

// Image

import logoHeader from '../../img/logo__small@2x.png';

function Header() {
    return (
        <div className="header ">
            <div className="header__top">
                <span className="header__logo"><img src={logoHeader} alt="logo-header" /></span>
                <div className="input-search">
                    <span><BiIcons.BiSearch /></span>
                    <input type="text" placeholder="Chèche pwodui, mak ak lòt ankò" />
                </div>
                <Link to="/" className="header__top-menu"> <span ><AiIcons.AiOutlineMenu /></span></Link>
                <Link to="/" className="header__top-cart"> <span ><FiIcons.FiShoppingCart /></span></Link>
            </div>
            <div className="header__bottom">
                <Link to="/">
                    <div className="header__bottom-location">
                        <p><span><IoIcons.GrLocation /></span> Rantre kote w ye</p>
                    </div>
                    <span><BiIcons.BiChevronRight /></span>
                </Link>
            </div>
        </div>
    )
}

export default Header
