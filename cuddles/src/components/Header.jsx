import React from 'react';
import '../styles/Header.css';
import headerImage from '../assets/headerImage.png'
import bottomImage from '../assets/bottom.jpg'


const Header = () => {

  return (
     <div className='headerContainer'>
         <div className='headerStyle'>
         <h3>De Soyza Maternity Hospital - Colombo</h3>      
         </div>
         <div>
            <img src={headerImage} className='imageStyle' alt='header'/>
         </div>
         <div>
            <img src={bottomImage} className='bottomImage' alt='bottom'/>
         </div>
         
     </div>
  )
}

export default Header
