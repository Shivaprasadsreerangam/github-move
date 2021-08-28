
//import { Checkbox } from "@material-ui/core";
import {React, Component } from "react";
//import AddPatientDetails_2 from "./AddPatientDetails_2";
//import WelcomePage from "./WelcomePage";

import AddPersonalPatientDetails from "./AddPersonalPatientDetails";
//import axios from "axios";


class AddPatientDetails extends Component
{
  state={
         disorder:''
        }
  getPatientPersonalDetails=(disorder)=>{
    this.setState(
        {
          disorder:disorder
        }
    )

} 
      
    render(){
      if(!global.login)
      {
        return(<div className='Welcome'>Login didn't sucess</div>)
      }
      else{
              if (this.state.disorder==="Voice")
              {
                return(<div className='Welcome'> voice Order Page</div>)
              }
              else{
                return(
                  <div >
                    
                    
                  
                    <AddPersonalPatientDetails onchange={this.getPatientPersonalDetails}/>
                    {/* /* {(!global.login)?
                (<AddPersonalPatientDetails />)
              : (<div> singup page</div>)}
                    
                    {
                      <AddPersonalPatientDetails />}
                    */} */
                  
                    </div>

            
                );
                    }
                  }

    }
    
}
export default AddPatientDetails;