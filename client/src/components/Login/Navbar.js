import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
//import { Button } from "../Button"
import './Navbar.css';
import logo from './stscp.png';
import "../../globalData";
//import { findAllInRenderedTree } from 'react-dom/test-utils';
//import Signup from './Signup';
//import Login from './Login';

class Navbar extends Component {
    
    state = { clicked: false }
    state={
        clicked:false
       
            }

   
    onClickListener=() =>{
    
    this.setState({ clicked: !this.state.clicked }) 
     this.props.onchange(!this.state.clicked)
    }
    onSignOut=() =>{
    
        //this.setState({ clicked: !this.props.formSubmitted }) 
         this.props.onchange(!this.props.formSubmitted)
        } 
    


    render() {
        return(<div>
            {(this.state.clicked)}
            
            <nav className="NavbarItems">
                <img src={logo} alt="Logo" width='100'height='80' align="center"/> 
                <h1 className="navbar-logo">SPIEL<i className="fab fa-react"></i></h1>
                 <h1>{global.userName}</h1>
              <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
             
                { 
                    /*(!this.state.formSubmitted)?
                        (  
                             (!this.state.clicked)?
                            (<Button onClick={this.onClickListener}>SignUp</Button>):
                            (<Button onClick={this.onClickListener}>Login</Button>)
                        )
                        
                    (<Button onClick={this.onSignOut}>SignOut</Button>)*/
            
                }
            
            </nav>
            
         
            
            
            </div>
        )
    }
}

export default Navbar;
