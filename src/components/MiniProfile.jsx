import React from 'react';
import MiniProStyle from './styles/MiniProfile.module.css';
import kurumi from '../images/kurumi.jpg';

export const MiniProfile = () => {
   return (
      <>
         <div className={MiniProStyle.profileContainer}>
            <div className={MiniProStyle.content}>
               <div className={MiniProStyle.imgContainer}><img src={kurumi} alt="" /></div>
               <div className={MiniProStyle.options}>
                  <ul>
                     <li>  <a href="#">   <i className="fas fa-user"></i> Profile</a>  </li>
                     <li>  <a href="#">   <i className="fas fa-photo-video"></i>My Videos</a>  </li>
                     <li>  <a href="#">   <i className="fas fa-plus-square">  </i>New Video</a>  </li>
                     <li>  <a href="#">   <i className="fas fa-sign-out-alt"> </i>LogOut</a> </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}