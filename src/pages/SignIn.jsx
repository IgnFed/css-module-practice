import React from 'react';
import styleSignIn from '../components/styles/SignIn.module.css'

export const SignIn = () => {


   return (
      <div className={styleSignIn.SignInContainer}>
         <div className={styleSignIn.none}></div>
         <div className={styleSignIn.formContainer}>
            <form>
                  <h1>SignIn</h1>
                  <div className={styleSignIn.inputContainer}>
                     <input type="text" id="fullname" name="fullname" />
                     <label htmlFor="fullname">Fullname</label>
                  </div>
                  <div className={styleSignIn.inputContainer}>
                     <input type="text" id="userName" name="userName" />
                     <label htmlFor="userName">User Name</label>
                  </div>
                  <div className={styleSignIn.inputContainer}>
                     <input type="text" id="password" name="password" />
                     <label htmlFor="password">Password</label>
                  </div>
                  <div className={styleSignIn.inputContainer}>
                     <button className={styleSignIn.SignInbtn}>SignIn</button>
                  </div>
            </form>
         </div>
      </div>
   )
}
