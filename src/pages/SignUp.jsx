import React from 'react'
import styleSignIn from '../components/styles/SignIn.module.css'

export const SignUp = () => {
   return (
      <div className={styleSignIn.SignInContainer}>
         <div className={styleSignIn.formContainer}>
            <form>
               <h1>SignUp</h1>
               <div className={styleSignIn.inputContainer}>
                  <input type="text" name="userName" id="userName" />
                  <label htmlFor="userName">User Name</label>                  
               </div>
               <div className={styleSignIn.inputContainer}>
                  <input type="text" name="password" id="password" />
                  <label htmlFor="password">Password</label>                  
               </div>

               <div className={styleSignIn.inputContainer}>
                  <button className={styleSignIn.SignUpbtn}>SignUp</button>
               </div>
            </form>
         </div>
      </div>
   )
}
