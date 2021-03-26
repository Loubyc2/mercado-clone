import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';

import "./Home.css";

// Images
import { imgsData } from './data';

import data from './data'

function Home() {
    const [showCategories, setShowCategories] = useState(true)

    const handleCategories = () => {
        setShowCategories(!showCategories)
    }
    return (
        <div className="home">

            {/* Home Carousel */}

            <div className="carousel slide" id="home-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="4" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgsData.carousel_1} className='d-block w-100' alt="carousel-img" />
                    </div>
                    <div className="carousel-item ">
                        <img src={imgsData.carousel_2} className='d-block w-100' alt="carousel-img" />
                    </div>
                    <div className="carousel-item ">
                        <img src={imgsData.carousel_3} className='d-block w-100' alt="carousel-img" />
                    </div>
                    <div className="carousel-item">
                        <img src={imgsData.carousel_4} className='d-block w-100' alt="carousel-img" />
                    </div>
                    <div className="carousel-item ">
                        <img src={imgsData.carousel_5} className='d-block w-100' alt="carousel-img" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="paymentMethod">
                <div className="paymentMethod-content">
                    <img src={imgsData.payMethod} alt="payment-img" />
                    <Link to="/">
                        <p>Jiska 12 vèsman san enterè <br /> <span>Gade plis</span></p>
                    </Link>
                </div>
            </div>

            {/* Home Content */}

            <div className="home__content">

                <div className="home__offer">
                    <div className="home__offer-content">

                        <h5>Likidasyon</h5>
                        <div className='home__offer-items'>
                            {
                                data.map(item => {
                                    return (
                                        <div className="home__offer-item">
                                            <div>
                                                <img src={item.img} alt="" />
                                                <div className='home__offer-item-text'>
                                                    <p className="home__offer-text-price">{item.price}  <span >{item.descount}</span></p>
                                                    <p className="home__offer-text-description">{item.desciption}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <Link to='/' className='home__offer-seeMore'><p>Gade tout</p> <span><BiIcons.BiChevronRight /></span></Link>
                    </div>
                </div>

                <div className="home__create-account">
                    <h5>Kreye yon kont epi amelyore eksperyans ou</h5>
                    <button type="button" className='btn btn-primary w-100 my-3'>Kreye kont</button>
                    <p>Ou deja gen yon kont? <Link to='/'><span>Antre</span></Link></p>
                </div>

                <div className="home__band">
                    <Link to='/' className="home__band-link">
                        <div className='d-flex flex-column justify-content-between'>
                            <div className='home__band-text'>
                                <span>back to school</span>
                                <p>Rantre lekòl avèk sa ki pi bon an</p>
                            </div>
                            <Link><span>Gade plis</span></Link>
                        </div>
                        <img src={imgsData.backToSchool} alt="" />
                    </Link>
                </div>

                <div className="home__band home__band-2 mt-3">
                    <Link to='/' className="home__band-link">
                        <div className='d-flex flex-column justify-content-between'>
                            <div className='home__band-text'>
                                <span>outdoor</span>
                                <p>tout sa w bezwen</p>
                            </div>
                            <Link><span>Gade plis</span></Link>
                        </div>
                        <img src={imgsData.allDoYouNeed} alt="" />
                    </Link>
                </div>
                <div className="home__officialShop">
                    <div className="home__officialShop-title">
                        <div className='d-flex justify-content-between my-1 px-1'>
                            <p className='text-uppercase'>boutik ofisyèl</p>
                            <Link to='/'>  <span>Gade plis</span></Link>
                        </div>
                        <div className="home__officialShop-content">
                            <div className="home__officialShop-img">
                                <img src={imgsData.background01_officialMark} alt="" />
                                <div className="home__officialShop-mark">
                                    <img src={imgsData.mark01} alt="" />
                                    <p>Nikson</p>
                                </div>
                            </div>
                            <div className="home__officialShop-img">
                                <img src={imgsData.background02_officialMark} alt="" />
                                <div className="home__officialShop-mark">
                                    <img src={imgsData.mark02} alt="" />
                                    <p>Huawei</p>
                                </div>
                            </div>
                            <div className="home__officialShop-img">
                                <img src={imgsData.background03_officialMark} alt="" />
                                <div className="home__officialShop-mark">
                                    <img src={imgsData.mark03} alt="" />
                                    <p>HP</p>
                                </div>
                            </div>
                            <div className="home__officialShop-img">
                                <img src={imgsData.background04_officialMark} alt="" />
                                <div className="home__officialShop-mark">
                                    <img src={imgsData.mark04} alt="" />
                                    <p>Sony</p>
                                </div>
                            </div>
                            <div className="home__officialShop-img">
                                <img src={imgsData.background05_officialMark} alt="" />
                                <div className="home__officialShop-mark">
                                    <img src={imgsData.mark05} alt="" />
                                    <p>Adidas </p>
                                </div>
                            </div>
                            <div className="home__officialShop-img">
                                <img src={imgsData.background06_officialMark} alt="" />
                                <div className="home__officialShop-mark">
                                    <img src={imgsData.mark06} alt="" />
                                    <p>Baby Infanti</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__band">
                    <Link to='/' className="home__band-link">
                        <div className='d-flex flex-column justify-content-between'>
                            <div className='home__band-text'>
                                <span>Hogar week</span>
                                <p>Televizyon w ap chèche a</p>
                            </div>
                            <Link><span>Gade plis</span></Link>
                        </div>
                        <img src={imgsData.smartTv} alt="" />
                    </Link>
                </div>
                <div className="home__band mt-3">
                    <Link to='/' className="home__band-link">
                        <div className='d-flex flex-column justify-content-between'>
                            <div className='home__band-text'>
                                <span>back to school</span>
                                <p>Bonjan zouti</p>
                            </div>
                            <Link><span>Gade plis</span></Link>
                        </div>
                        <img src={imgsData.toolDrill} alt="" />
                    </Link>
                </div>
                <div className="home__collection">
                    <p>Koleksyon: <span>Sipèmache</span> <Link to='/' onClick={handleCategories}>{showCategories ? <BiIcons.BiChevronDown /> : <BiIcons.BiChevronUp />}</Link> </p>
                    <div className={showCategories ? "showCategories" : "home__collection-categories"}>
                        <Link to='/'><div>Sipèmache</div></Link>
                        <Link><div>Antrepremè</div></Link>

                    </div>
                    <div className="collection-img">
                        <div>
                            <img src={imgsData.collection_1} alt="" />
                        </div>
                        <div>
                            <img src={imgsData.collection_2} alt="" />
                        </div>
                        <div>
                            <img src={imgsData.collection_3} alt="" />
                        </div>
                        <div>
                            <img src={imgsData.collection_4} alt="" />
                        </div>
                        <div>
                            <img src={imgsData.collection_5} alt="" />
                        </div>
                        <div>
                            <img src={imgsData.collection_6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="home__popular-categories">
                    <p className='my-3 '>Kategori popilè</p>
                    <div className='home__popular-categories-wrapper '>
                        <div>
                            <FiIcons.FiSmartphone />
                            <p>Telefòn Selilè</p>
                        </div>
                        <div>
                            <GiIcons.GiGamepadCross />
                            <p>Jwèt Videyo</p>
                        </div>
                        <div>
                            <BiIcons.BiMicrophone />
                            <p>Elektonik, Odyo ak Videyo</p>
                        </div>
                        <div>
                            <FaIcons.FaCouch />
                            <p>Mèb Kay</p>
                        </div>
                        <div>
                            <GiIcons.GiSteeringWheel />
                            <p>Akseswa pou Machin</p>
                        </div>
                        <div>
                            < RiIcons.RiFootballLine />
                            <p>Spò ak Egzèsis </p>
                        </div>
                    </div>

                </div>
                <div className="home__seeMoreCategories">
                    <Link to='/'>Gade plis kategori</Link>
                </div>
            </div>
            <div className="home__carousel02">
                <div className="carousel slide" id="carousel-02" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imgsData.payment_img} alt="payment-img" />
                            <h1>Peye avèk kat oubyen kash</h1>
                            <p>Avèk Mercado Pago, peye an vèsman epi pwofite avantaj finansye bank ou ba w, oubyen peye avèk kash. Toujou sekirize!</p>
                            <Link to='/'>Ki jan pou w peye avèk Mercado Pago</Link>
                        </div>
                        <div className="carousel-item">
                            <img src={imgsData.shipping_img} alt="payment-img" />
                            <h1>Livrezon gratis a pati 119.990</h1>
                            <p>Sèlman anrejistre w nan Mercado Libre epi w ap genyen livrezon gratis sou plizyè milyon pwodui.</p>
                            <Link to='/'>Aprann plis konsènan benefis sa</Link>
                        </div>
                        <div className="carousel-item">
                            <img src={imgsData.protected_img} alt="payment-img" />
                            <h1>Acha pwoteje</h1>
                            <p>Peye avèk Mercado Pago epi n ap akonpanye w jiskaske w resevwa sa w achte a. E si se pa sa w te espere a, n ap remèt ou lajan w. </p>
                            <Link to='/'>Ki jan pou w pwoteje w</Link>
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-02" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-02" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-02" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
