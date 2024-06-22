import React from 'react';
import { Link } from 'react-router-dom'
import { routes } from "../Routes/routes";

const Footer = () => {
  return (
    <>
    <div className='footerHome'>
    <Link to={routes.home} className='footerLink'><h4>Volver al Inicio</h4></Link>
    </div>
    <footer>
      <a href="https://www.digitalhouse.com/" className='dhHouse'><img src="/images/DH.png" alt='DH-logo'/></a>
        <div className='icons'>
        <a href="https://www.facebook.com"><img src="/images/ico-facebook.png" alt='FB-logo' className='icon' /></a>
        <a href="https://www.instagram.com/"><img src="/images/ico-instagram.png" alt='IG-logo' className='icon' /></a>
        <a href="https://www.tiktok.com/"><img src="/images/ico-tiktok.png" alt='TK-logo' className='icon' /></a>
        <a href="https://www.whatsapp.com/"><img src="/images/ico-whatsapp.png" alt='WPP-logo' className='icon' /></a>
        </div>
    </footer>
    </>
  )
}

export default Footer
