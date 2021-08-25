import React, { Component } from "react";
//import './login.sass';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './validator';
import logo from './logo1.png';
import voice_order from './voice_order.png'
import "./login.css";
import PropTypes from 'prop-types';
import '../../globalData';
import Axios from 'axios';
import MainSpiel from './MainSpiel';
import Navbar from "./Navbar";
import { BiSliderAlt } from "react-icons/bi";



class Login extends Component {
   // const [details,setDetails] = useState({uname,paw});

    constructor(props) {
        super(props)

        this.state = {
           uname:'',
           psw:'',
           errors: {},
           formSubmitted: false, // Indicates submit status of login form
           loading: false, // Indicates in progress state of login form
           loginname:''
            
        }
    }
    onClickListener=(e) =>{
        e.preventDefault();
        // {this.state.loginDetails.map(loginData =>
        //     global.userName=loginData.name,
        //     )}
        //     // global.userName=this.state.name;
        
      
        global.login=true;
         this.login();
        
  
       
        }
 
   
   async validateLoginForm  () {

     
    let errors = {};
       
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
        try{
            let res= await  Axios.post("http://192.168.0.18:3002/login",{uname: this.state.uname,psw:this.state.psw,});
            let userName=await res.data[0].name;
            let id=await res.data[0].id;
            let email_id=await res.data[0].email_id;
            let hospital_id=await res.data[0].hospital_id;
            let role=await res.data[0].role;
            
            global.userName=userName;
            global.id=id;
            global.email_id=email_id;
            global.hospital_id=hospital_id;
            global.role=role;
             
         }
         catch(e){   
    
         }

         Axios.post("http://192.168.0.18:3002/insertLoginDetail",{login_id:global.id,email_id:global.email_id,hospital_id:global.hospital_id
        }).then((response)=>{
            this.setState({PatientDetails:response.data})
        }
        
    
        ).catch(function (error) {
            // handle error
            alert(error);
          })
   
      
    } else {
        if(errors.email && errors.password)
            alert(`${errors.email} and ${ errors.password}`);
        else if (errors.email)
          alert(errors.email)
        else
            alert(errors.password);
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
        
       
        //let errors=[]
        //global.userName=this.state.uname;
      
       let errors=  this.validateLoginForm();
        
    
        
        
         
        // if(errors === true){
        //     return true;
           
        //    alert("Invalid user name or password"); 
        // } else {
        //     //this.onClickListener(); 
        //     alert(global.userName);
            
        //     //this.onClickListener(!this.formSubmitted); 
        //     this.setState={
        //         formSubmitted:true
        //     }
       
            
        // }
        

    }

    render() {
        if (!global.userName)
            {
        return (
        
          <div>
              <Navbar/> <h1>{global.userName}</h1>
                {/* <div className="voiceOrder"> 
                
                      
                <img src={voice_order} alt="Logo" width='300'height='200' align="center"/> 
                A voice disorder occurs when voice quality, pitch, and loudness differ or are inappropriate for an individual's age, gender, cultural background, or geographic location (Aronson & Bless, 2009; Boone, McFarlane, Von Berg, & Zraik, 2010; Lee, Stemple, Glaze, & Kelchner, 2004). A voice disorder is present when an individual expresses concern about having an abnormal voice that does not meet daily needs—even if others do not perceive it as different or deviant (American Speech-Language-Hearing Association [ASHA], 1993; Colton & Casper, 1996; Stemple, Glaze, & Klaben, 2010; Verdolini & Ramig, 2001).
A number of different systems are used for classifying voice disorders. For the purposes of this document, voice disorders are categorized as follows:
Organic — voice disorders that are physiological in nature and result from alterations in respiratory, laryngeal, or vocal tract mechanisms
Structural — organic voice disorders that result from physical changes in the voice mechanism (e.g., alterations in vocal fold tissues such as edema or vocal nodules; structural changes in the larynx due to aging)
Neurogenic — organic voice disorders that result from problems with the central or peripheral nervous system innervation to the larynx that affect functioning of the vocal mechanism (e.g., vocal tremor, spasmodic dysphonia, or paralysis of vocal folds)
Functional — voice disorders that result from improper or inefficient use of the vocal mechanism when the physical structure is normal (e.g., vocal fatigue; muscle tension dysphonia or aphonia; diplophonia; ventricular phonation)

</div> */}
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
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                    </div>
                 
                       
                        
                </form>
          
            </div>
            </div>
        )
    }
    else{
        return(
        <div>
        <Navbar/>
        <MainSpiel/>
        </div>)
    }
  }  
}
export default Login;