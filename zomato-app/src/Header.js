import React, { Component } from 'react';
import "./header.css";
import Button from 'react-bootstrap/Button';













export default class Header extends Component {
    render() {
        return (
            <>
            <div id="header">
                <div id="icon"> 
                Zomato
                </div>
             
           
           
          
                <div id="social">
               
     

{/* <SocialIcon  url="https://www.instagram.com"/>
<SocialIcon url="https://www.facebook.com"/>
<SocialIcon url="https://www.youtube.com"/> */}

<button >
          <span className="	glyphicon glyphicon-log-in"></span>LogIn
        </button>
        <button>
          <span className="	glyphicon glyphicon-user"></span>SignUp
        </button>
      </div>


   </div>
       


   </>
        );
    };
}
