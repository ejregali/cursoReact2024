import './footerStyled.css';
import LogoBlanco from '../../assets/img/logoBlanco.svg';


import React from 'react'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="textosFooter">
            <div className="textosIzq">
                <img src={LogoBlanco} alt="" />
                <ul>
                    <li>NEW ARRIVALS</li>
                    <li>ABOUT</li>
                    <li>INFLUENCERS</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                </ul>
                <ul>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>TWITTER</li>
                    <li>LINKEDIN</li>
                </ul>

            </div>
            <div className="textosDer">
                <h1>Stay in the know — we’ll send you offers & more.</h1>
                <button>SING UP</button>
            </div>
      </div>
      <div className="boxFooter">
        <div className="rights">
            <h2>© 2024 Scandle. All right reserved.</h2>
            <h2>Design Made By EjREGALI Agency</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
