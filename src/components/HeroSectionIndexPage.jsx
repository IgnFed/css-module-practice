import React from 'react'

import IndexStyle from './styles/HeroSectionIndexPage.module.css'

import kurumi from '../images/kurumi.jpg'

export const HeroSectionIndexPage = () => {
   return (
      <div>
            <div className={IndexStyle.heroImgContainer}><img src={kurumi} alt="" /></div>
            <div className={IndexStyle.heroTextContent}>
               <h2>Store Your Videos Here!</h2>
               <h3>You can Store your Videos in this page, to do that, first you need <a to='/SignUp'>Create  a Account</a></h3>
            </div>
      </div>
   )
}
