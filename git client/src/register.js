import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './register.css';
export function Register(){
    return(
      <div className="a">
        <div className="text-center pt-5  ">
            <div className="mt-4">
                <input type='text' className="rname" id="rname" placeholder="name" name="rname"/> 
            </div >
            <div className="mt-4">
                <input type='email' className="remail" name="remail" id="remail" placeholder="email"/>
            </div>
            <div className="mt-4">
                <input type='number' className="rph" name="rph" id="rph" placeholder="phone number"/>
            </div>
            <div className="mt-4">
                <input type='password' className="createpass" id="createpass" name="pass" placeholder="create password"/>
            </div>
            <div className="mt-4">
            <input type='text' className="fadd" name="fadd" id="fadd" placeholder="address"/>
            </div>
            <div className="mt-4">
              <Link to='/'><button type="button" className="mr-5 " name="rlogin" id="rlogin">Login</button></Link> 
                <button type="submit" className="rsubmit" id="rsubmit" name="rsubmit">submit</button>
            </div>
        </div>
      </div>
    );
}