import { Component } from "react";
import Navbar  from './Navbar';
import Login from "./Login";
//import SignUp from './Signup';
import MainSpiel from './MainSpiel';
import '../../globalData';
import "./MainPage.css";
import SignupForm from "./signupform";


class MainPage extends Component
{   
    constructor(props){
        super(props)
        this.state={
            SignupForm1:0
        }


    } 
    render() {
        if (this.state.SignupForm1!==0){
            return(<div> 
                
        <Navbar onchange={this.getData} formSubmitted={this.state.formSubmitted}/>
           <h1 id ='center123'>Create Account</h1>
                <SignupForm />
            <button id='submit5' onClick={e=>{
              this.setState(
                  {
                    SignupForm1:0,
                   

                  } );
              }}>Please click for Login</button></div>)
           
        }
        else 
        {
            if(1===2)
            {
               return(<div>
                   <Login />
                   <button id='submit4'  onClick={e=>{
              this.setState(
                  {
                    SignupForm1:1,
                    
                   

                  } );
                 }} >Pleasec click for create a new account</button>

               </div>)
            }
            else
            {
                return(<div>
                    <Login />
                    {
                    (!global.userName)?(<div>
                    <button id='submit4'  onClick={e=>{
              this.setState(
                  {
                    SignupForm1:1,

                   

                  } );
                 }} >Pleasec click for create a new account</button>
 
                </div>):(<div>Hell</div>)

           }
           </div>);
           
               
             }   
   
                }
       
           
                        
                

                    
        
        

    

    
}
}
export default MainPage;