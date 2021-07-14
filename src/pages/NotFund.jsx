import React from 'react'
import NotFoundStyle from '../components/styles/NotFound.module.css';
import Logo from '../images/24.gif'
import {Link} from 'react-router-dom'

export const NotFund = () => {
   return (
      <div>

         <div className={NotFoundStyle.container}>
            <div className={NotFoundStyle.notFoundImgContainer}><img src={Logo} alt=""/></div>
            <div className={NotFoundStyle.notFoundTextContainer}><h3>Not Found</h3><p>Go Back To: <Link to='/css-module-practice/'>Index</Link></p></div>
         </div>

      </div>
   )
}
