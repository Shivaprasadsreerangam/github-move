import { Component } from "react";
//import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import Signup from './signupform';
import Header from './Header';
import PatientDetails from './PatientDetails';
import WelcomePage from './WelcomePage'
import AddPatientDetails from './AddPatientDetails';
import AddPatientDetails_2 from './AddPatientDetails_2';
import account_details from './account_details';
import LoginDetails from "./LoginDetails";
//import AddPersonalPatientDetails from './AddPersonalPatientDetails'
import "./MainSpiel.css";
import "../../globalData"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
//import Login from "./Login";

class MainSpiel extends Component
{   
    constructor(props) {
        super(props)
    this.state={
    sideBarValue:false,
   
        }
    }
    getData=(sideBarValue)=>{
        this.setState(
            {
                sideBarValue:sideBarValue
            }
        )

    }
    // getDataLogin=(formSubmitted)=>{
    //     this.setState(
    //         {
    //             formSubmitted:formSubmitted
    //         }
    //     )

    // }
    render() {
        global.login=true;
		return (
      <div className ="MainPage">
          
          <Router>
          <Header />
        
        <Switch>
          <Route path='/WelcomePage' exact component={WelcomePage} onchange={this.getDataLogin}/>
          <Route path='/PatientDetails' component={PatientDetails} onchange={this.getDataLogin}/>
          <Route path='/AddPatientDetails' component={AddPatientDetails} onchange={this.getDataLogin}/>
          <Route path='/AddPatientDetails_2'  component={AddPatientDetails_2} onchange={this.getDataLogin}/>
          <Route path='/Signup' component={Signup} onchange={this.getDataLogin} />
          <Route path='/account_details' component={account_details} onchange={this.getDataLogin} />
          <Route path='/LoginDetails' component={LoginDetails} onchange={this.getDataLogin} />
          
        </Switch>
      </Router>
          
		</div>

		);
    
}
}
export default MainSpiel;