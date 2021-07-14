import React from 'react'
import IndexCardStyle from './styles/IndexPageCard.module.css'
import ImageTest from '../images/kurumi.jpg'

export const IndexPageCard = (props) => {
   const {title, text, left} = props.content
   return (
      <div>
         
         {
         left ?
            
            (
               <div className={IndexCardStyle.cardContainerLeft}>
                     <div className={IndexCardStyle.imgContainer}>
                        <img src={ImageTest} alt=""/>
                     </div>
                     <div className={IndexCardStyle.contentContainer}>
                        <div className={IndexCardStyle.title}>
                           <h3>{title}</h3>
                        </div>
                        <div className={IndexCardStyle.text}>
                           {text}
                        </div>

                     </div>
               </div>

            )
            :
            (
                  <div className={IndexCardStyle.cardContainerRight}>
                     <div className={IndexCardStyle.contentContainer}>
                        <div className={IndexCardStyle.title}>
                           <h3>{title}</h3>
                        </div>
                        <div className={IndexCardStyle.text}>
                           {text}
                        </div>
                     </div>
                     <div className={IndexCardStyle.imgContainer}>
                        <img src={ImageTest} alt="" />
                     </div>

                  </div>

            )
            
            

         }

      </div>
   )
}
