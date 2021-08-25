import React, { Component } from "react";
//import './login.sass';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './validator';
import logo from './logo1.png';
import voice_order from './voice_order.png'
import "./login.css";
import PropTypes from 'prop-types';
import '../../globalData';
import Signup from './Signuo';
//import Navbar from "./Navbar";
//import App from  '../../App';
//import {  Redirect } from 'react-router-dom';
//import MainPage from "./MainPage";
//import Maintoolbar from "./Maintoolbar";
//import {ReactDom,BrowserRouter} from 'react-dom';
//import { withRouter } from 'react-router-dom';
//import {  FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
//import {Route,BrowserRouter,} frm "react-router-dom";


class Login extends Component {
   // const [details,setDetails] = useState({uname,paw});

    constructor(props) {
        super(props)

        this.state = {
           uname:'',
           psw:'',
           errors: {},
           formSubmitted: false, // Indicates submit status of login form
           loading: false ,// Indicates in progress state of login form
           signup:'',
            
        }
    }
    
    onClickListener=() =>{
        alert("Uname");
        global.userName=this.state.uname;
         this.validateLoginForm();
         this.login();
         this.props.onchange(!this.state.formSubmitted);
       
        }
 
   
    validateLoginForm = (e) => {

        alert("Uname");
        let errors = {};
        this.validateLoginForm();
       
        if (isEmpty(this.state.uname)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(this.state.uname)) {
            errors.email = "Please enter a valid email";
        }
     
        if (isEmpty(this.state.psw)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(this.state.psw)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(this.state.psw, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            
          return true;
        } else {
            this.setState({
                errors: errors,
                
            });
        }
    }
    static contextTypes = {
        router: PropTypes.object,
      }
      

    login = (e) => {
       
        //e.preventDefault();
        
       
        global.login=true;
        global.userName=this.state.uname;
        alert("Uname1");
        let errors = this.validateLoginForm();
        alert("Uname2");
       
        if(errors === true){
            
           //this.onClickListener(!this.formSubmitted); 
           alert("Invalid user name or password"); 
        } else {
         
            this.setState({
                
                errors: errors,
                formSubmitted: false
            });
            
        }
    }

    render() {
        if(this.state.signup)
        {
        return (<div>
                <div className="voiceOrder"> 
                <img src={voice_order} alt="Logo" width='300'height='200' align="center"/> 
                A voice disorder occurs when voice quality, pitch, and loudness differ or are inappropriate for an individual's age, gender, cultural background, or geographic location (Aronson & Bless, 2009; Boone, McFarlane, Von Berg, & Zraik, 2010; Lee, Stemple, Glaze, & Kelchner, 2004). A voice disorder is present when an individual expresses concern about having an abnormal voice that does not meet daily needs—even if others do not perceive it as different or deviant (American Speech-Language-Hearing Association [ASHA], 1993; Colton & Casper, 1996; Stemple, Glaze, & Klaben, 2010; Verdolini & Ramig, 2001).
A number of different systems are used for classifying voice disorders. For the purposes of this document, voice disorders are categorized as follows:
Organic — voice disorders that are physiological in nature and result from alterations in respiratory, laryngeal, or vocal tract mechanisms
Structural — organic voice disorders that result from physical changes in the voice mechanism (e.g., alterations in vocal fold tissues such as edema or vocal nodules; structural changes in the larynx due to aging)
Neurogenic — organic voice disorders that result from problems with the central or peripheral nervous system innervation to the larynx that affect functioning of the vocal mechanism (e.g., vocal tremor, spasmodic dysphonia, or paralysis of vocal folds)
Functional — voice disorders that result from improper or inefficient use of the vocal mechanism when the physical structure is normal (e.g., vocal fatigue; muscle tension dysphonia or aphonia; diplophonia; ventricular phonation)

</div>
                <div  className="LoginPage">
                <form onSubmit={this.login}>
                    
                     <div class="img1">
                         <img src={logo} alt="Logo" width='350'height='200' align="center"/> 
                        <br></br>
                        <label htmlFor="name"><b>Username:</b></label> 
                        <input type="text" id ="LoginUsername"
                            onChange={e=>{
                                this.setState(
                                    {
                                        uname:e.target.value

                                    } );
                                }} 
                        placeholder="Enter Username"  name="uname" required/> <br></br>
                        <label for="psw"><b>Password:</b></label><b></b>
                        <input type="password"  id ="LoginUsername"
                            onChange={e=>{
                                this.setState(
                                    {
                                        psw:e.target.value

                                    } );
                                }} 
                        placeholder="Enter Password" size="50" name="psw" required/><br></br>
                        <button type="submit" onClick={this.onClickListener}>Login</button><br></br>
                        {/* <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label> */}
                        <button type="submit" id ='submit3' 
                        onClick={e=>{
                           this.setState(
                               {
                                 signup:'true'
                   
                               } );
                           }}
                        
                        
                        
                    
  
       >Sign Up</button>
                    </div>
                 
                       
                        
                </form>
          
            </div>
            </div>
        )
        }
        else
        {
            <Signup/>
        }
    }
}
export default Login;