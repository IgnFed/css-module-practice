import React from 'react';

import IndexStyle from '../components/styles/HeroSectionIndexPage.module.css';
import {NavBar} from '../components/NavBar.jsx';
import {IndexPageCard} from '../components/IndexPageCardSection.jsx'
import {HeroSectionIndexPage} from '../components/HeroSectionIndexPage.jsx'
import {MiniProfile} from '../components/MiniProfile.jsx'

import TextForCards from '../textForElements/IndexPageCardSectionText.js'


export const Index = () => {
   return (
      <div>
         <NavBar/>

         <div>
            <MiniProfile/>
         </div>

         <section className={IndexStyle.heroSection}>
            <HeroSectionIndexPage />
         </section>

         <section className ={IndexStyle.presentationCardsSection}>
            <div><IndexPageCard content={TextForCards.card_1} /></div>
            <div><IndexPageCard content={TextForCards.card_2} /></div>
            <div><IndexPageCard content={TextForCards.card_3} /></div>
         </section>

      </div>
   )
}
