 import React, { Component } from 'react';
// import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col } from 'react-bootstrap';
 import "./signup.css";
 import Axios from "axios";
 import Multiselect from 'multiselect-react-dropdown';
 import payment from './payment';
 //import Multiselect from 'react-select';
 //import logo from './logo1.png';
 class SignupForm extends Component {
     constructor(props){
         super(props)
         this.state={
            uName:'',
            mName:'',
            lName:'',
            hName:'',
            duration:'',
            duration1:'',
            nusers:0,
            //disorder:[],
            hName1:'',
            hosiptal_details:[],
            disorderDetails:[],
            Emaild:'',
            Phno:'',
            payment_option:'',
           
         }
      
 

Axios.post("http://192.168.0.18:3002/disorderdetails",{hospital_id:global.hospital_id,
}).then((response)=>{
    this.setState({disorderDetails:response.data})
} ).catch(function (error) {
  // handle error
  alert(error);
})
     }
     onClickListener=()=>{

        Axios.post("http://192.168.0.18:3002/CheckHospital",{hospital_name:this.state.hName,
    }).then((response)=>{
        this.setState({hosiptal_details:response.data})
        alert(response.data);
       
      
    } ).catch(function (error) {
      // handle error
      alert(error);
    })
    
        //  if (!this.hosiptal_details)
        //  {
            
        //     alert( "Account alredy created for this hospital ",this.state.hosiptal_details.hospital_name)
        //     this.setState({
        //         hosiptal_details:[]  
        //     });

        //  }

        
          
        Axios.post("http://192.168.0.18:3002/createAccount",{uName:this.state.uName,mName:this.state.mName,lName:this.state.lName,hName:this.state.hName,duration:this.state.duration,duration1:this.state.duration1,disorder:this.state.disorder,
        Emaild:this.state.Emaild,Phno:this.state.Phno,hospital_id:global.hospital_id,nusers:this.state.nusers
        }).then((response)=>{
            this.setState({doctordetails:response.data})
        } ).catch(function (error) {
          // handle error
          alert(error);
        })
       if (!global.hospital_id)
       {
        alert("Payment page in progress");
        alert("Acount has been created" )
        alert("defualt password page has been sent registered Email (it is in progress)");
      
       }
       else
       {
        alert("Acount has been created" )
       }

      
     }
     selectedValue=(e)=>{
         this.state (
             {
               disorder:e.target.value
             }
         )

     }
     render() {
         return (
            
            <div class ="PatinetDetails1">
                 <h1>Provide d etails</h1>
                 <input  name="fName" placeholder="Enter User" class="form-control"  type="text" id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    uName:e.target.value,
                  

                  } );
              }}
          /><br></br>
            <input  name="mName" placeholder="Enter Middle name" class="form-control"  type="text" id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    mName:e.target.value,
                   

                  } );
              }}
          /><br></br>
            <input  name="lName" placeholder="Last Name" class="form-control"  type="text" id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    lName:e.target.value,
                   

                  } );
              }}
          /> <br></br>
          {(global.role=='spiel')?
           (<div> <input  name="hName" placeholder="Enter Hosiptal Name" class="form-control"  type="text" id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    hName:e.target.value,
                   

                  } );
              }}
          /> <br></br>
          
          <select name="duration" class="form-control"  type="text" id ="APDtext" onChange={e=>{
              this.setState(
                  {
                    duration:e.target.value,
                   

                  } );
              }}> 
          <option>Select Duration</option>   
          <option>Years</option>
          <option>month</option>
          <option>days</option>
          <option>unlimited</option>
          </select> <br></br>
        {(this.state.duration!=='unlimited')?
          (<input  name="duration1" placeholder="Enter duration" class="form-control"  type="text" id ="APDtext" 
          onChange={e=>{
            this.setState(
                {
                  duration1:e.target.value,
                 

                } );
            }}
          />    
          ):(<label></label>) } <br></br>
          <input  name="nusers" placeholder="Enter number of connection" class="form-control"  type="text" id ="APDtext" 
          onChange={e=>{
            this.setState(
                {
                  nusers:e.target.value,
                 

                } );
            }}/>
          
          
          
          
          
          <br></br></div>):(<div></div>)}

<Multiselect
  isObject={false}
  onChange={this.state.selectedValue}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    'Voice',
    'Articulation',
    'Aural Rehabilitation',
   
  ]}
/>
{/* <Multiselect> options=
{this.state.disorderDetails}
</Multiselect> */}

{/* 
<Multiselect isMulti option={[
    'Voice',
    'Articulation',
    'Aural Rehabilitation'] } /> */}



           
  <input  name="Emaild" placeholder="Enter EmailID" class="form-control"  type="text" id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    Emaild:e.target.value,
                   

                  } );
              }}  />  <br></br>

<input  name="Phno" placeholder="Enter Phone Number" class="form-control"  type="text" id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    Phno:e.target.value,
                   

                  } );
              }}  /> <br></br>  

          <button id='submit3' onClick={this.onClickListener}>sumbit</button>
             </div>
         );
     }
 }
 
 export default SignupForm;