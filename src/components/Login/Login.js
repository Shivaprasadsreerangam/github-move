import React, { Component } from "react";
//import './login.sass';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './validator';
import logo from './logo1.png';
import "./login.css";
import PropTypes from 'prop-types';
import '../../globalData';
import Axios from 'axios';
import MainSpiel from './MainSpiel';
import Navbar from "./Navbar";




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
           loginname:'',
           resetPwd:false,
           defaultPwd:'N',
           currentPwd:'',
           newPwd:'',
           confirmPwd:''
            
        }
    }
   
    
    onResetThePwd=(e) =>{
        e.preventDefault();
    
        this.setState(
            {
                resetPwd:!this.state.resetPwd

            });
    }

    sendemail=(e)=>{
       
        var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
            var i=0;
              
            for (i = 1; i <= 8; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
            alert(pass);
        
            let res=  Axios.post("http://localhost:3002/sendNewPwd",{uname: this.state.uname,pwd:pass});
    }

    changePassword=(e)=>{
        if(this.state.newPwd!==this.state.confirmPwd)
        {
            alert("New Password and confirm Password are not matched");
        }
        else
        {
            Axios.post("http://localhost:3002/updateNewPwd",{uname: this.state.uname,pwd:this.state.newPwd});
          
            this.setState(
                {
                    defaultPwd:'N',
                    resetPwd:false
    
                });
          
                alert("chnage the password");
            
            
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
            
            let res= await  Axios.post("http://localhost:3002/login",{uname: this.state.uname,psw:this.state.psw,});
             if(!res.data[0]){
                let wrongPwd=await  Axios.post("http://localhost:3002/checkInvalidAttemepts",{uname: this.state.uname,psw:this.state.psw,});
                if(wrongPwd.data[0].invalid_logins <3){
                    alert(await wrongPwd.data[0].invalid_logins+" invalid login attempts");
                }
                else if(wrongPwd.data[0].invalid_logins >2){
                    alert("Account is locked");
                }
                
                else{
                    alert("Invalid User name and password");
                }
                
             }
             else if(res.data[0].invalid_logins >2){

                alert("Account is locked");
             }
             else if(res.data[0].default_password=='Y')
             {
                this.setState(
                    {
                        defaultPwd:res.data[0].default_password
        
                    });
              
             }
            else{
            let userName=await res.data[0].name;
            let id=await res.data[0].id;
            let email_id=await res.data[0].email_id;
            let hospital_id=await res.data[0].hospital_id;
            let role=await res.data[0].role;
        
            let userExpire= await  Axios.post("http://localhost:3002/userExpire",{uname: this.state.uname,psw:this.state.psw,});
            if(userExpire.data[0]){
                alert("user is expired on "+userExpire.data[0].user_expiry_date+". Please contact us for renewl");
            }
               
            else
            {
               // let default_pwd= await  Axios.post("http://localhost:3002/default_password",{uname: this.state.uname,psw:this.state.psw,});
                // alert()
                // if(default_pwd.data[0].default_password=='Y')
                // { this.setState={
                //      defaultPwd:'Y'

                //              }
                     
                // }
                //else{

             Axios.post("http://localhost:3002/updateInvalidLogin",{uname: this.state.uname,psw:this.state.psw,});
            
            global.userName=userName;
            global.id=id;
            global.email_id=email_id;
            global.hospital_id=hospital_id;
            global.role=role;
            }
        }
             
        }
        // }
         catch(e){   
    
         }

         Axios.post("http://localhost:3002/insertLoginDetail",{login_id:global.id,email_id:global.email_id,hospital_id:global.hospital_id
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
        else if(errors.password)
            alert(errors.password);
        else{
            alert("Invalid user name or password"); 
        }
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
        
    
        
        
         
         if(errors === true){
         //  return true;
           
           alert("Invalid user name or password"); 
         } 
      
        

    }

    render() {
        if (!global.userName)
            {
           if(this.state.resetPwd) 
           {return(
               <div>
                   <Navbar/> <h1>{global.userName}</h1>
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
                        placeholder="Enter Email ID"  name="uname" required/> <br></br>
                       
                    </div>
                 
                       
                        
                </form>
                <button type="submit" onClick={this.sendemail}>Reset The Password</button><br></br>
                <button type="submit" id='submit3' onClick={this.onResetThePwd}>Login </button><br></br>
            </div>
               </div>);
             
           } 
           else if (this.state.defaultPwd=='Y') 
           {
            return(
                <div>
                    <Navbar/> <h1>{global.userName}</h1>
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
                         placeholder="Enter Email ID"  name="uname" required/> <br></br>

<label for="psw"><b>current Password:</b></label><b></b>
                        <input type="password"  id ="LoginUsername"
                            onChange={e=>{
                                this.setState(
                                    {
                                        currentPwd:e.target.value

                                    } );
                                }} 
                        placeholder="Enter Password" size="50" name="psw" required/><br></br>
                        
                        <label for="psw"><b>New Password:</b></label><b></b>
                        <input type="password"  id ="LoginUsername"
                            onChange={e=>{
                                this.setState(
                                    {
                                        newPwd:e.target.value

                                    } );
                                }} 
                        placeholder="Enter Password" size="50" name="psw" required/><br></br>
                     </div>
                  
                     <label for="psw"><b>Confirm Password:</b></label><b></b>
                        <input type="password"  id ="LoginUsername"
                            onChange={e=>{
                                this.setState(
                                    {
                                        confirmPwd:e.target.value

                                    } );
                                }} 
                        placeholder="Enter Password" size="50" name="psw" required/><br></br>
                         
                 </form>
                 <button type="submit" onClick={this.changePassword}>Change Password</button><br></br>
                 <button type="submit" id='submit3' onClick={this.onResetThePwd}>Login </button><br></br>
             </div>
                </div>);
              

           }
           else
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
                        </label><br></br>
                        
                    </div>
                 
                       
                        
                </form>
                <button type="submit" id='submit3' onClick={this.onResetThePwd}>Reset the Password</button><br></br>
            </div>
            
            </div>
        )
                            }
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