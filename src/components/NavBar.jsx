import React from 'react'
import {Link} from 'react-router-dom'
import NavBarStyle from './styles/NavBar.module.css'
import Logo from '../images/Logo.jpg'


export const NavBar = () => {
   return (
      <div>

         <nav className={NavBarStyle.navBarContainer}>
            <div className={NavBarStyle.navBarLogoElements}>
               <Link to='/'>
                  <div className={NavBarStyle.logoImgContainer}><img src={Logo} alt="" /></div>
                  <div className={NavBarStyle.logoTitleContainer}><h2>Video Storage!</h2></div>
               </Link>
            </div>
            <div className ={NavBarStyle.navBarLinksContainer}>
               <ul>
                  <li id={NavBarStyle.logIn}><Link to="SignIn"><i className="fas fa-sign-in-alt"></i>SignIn</Link></li>
                  <li id={NavBarStyle.logOut} ><Link to="SignUp"><i className="fas fa-user-plus"></i>SignUp</Link></li>
               </ul>
            </div>
         </nav>
      </div>
   )
}