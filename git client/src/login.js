import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './login.css';
export function Login(){
    return(
       <div className='con'>
        <div className='text-center pt-5'>
           <div>
               <input type='text' id='name' className='name mt-4' name='name' placeholder='user id'/>
           </div>
           <div>
            <input type='password' id='password' className='password mt-5' placeholder='password' name='password'/>
           </div>
           <div>
           <Link to='/register'><button type='button' id='siginup' className='signup mr-5'>Signup</button></Link>
            <button type='submit' id='submit' className='submit mt-3 ' placeholder='Login'>Login</button>
           </div>
        </div>
       </div>
    );
}