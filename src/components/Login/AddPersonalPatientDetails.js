//import { Checkbox } from "@material-ui/core";
import {React, Component } from "react";
//import axios from "axios";
import "./AddPatientDetails.css";
import "./PatientData";
import "../../globalData"
//import { PatientData } from "./PatientData";
//import { Redirect } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Articulation from "./Articulation";
import Axios from "axios";

class AddPersonalPatientDetails extends Component
{
      constructor(props) {
        super(props)
       

        

        this.state = {
          patient_id:this.props.patient_id,
          first_name:'',
          middle_name:'',
          last_name:'',
          Gender:'',
          disorder:'',
          birthday:'',
          Primary_Complaint:'',
          user_name:'',
          middleName:'',
          LastName:'',
          RelationShip:'',
          email:'',
          contact_no:'',
          errors: {},
          formSubmitted: false, // Indicates submit status of login form
          loading: false, // Indicates in progress state of login form
          assignment_type:'',
          doctor:'',
          doctordetails:[],
          disorderDetails:[],
          PatientAllDetails:[]
          
            
        }
       if(this.props.patient_id){
        Axios.post("http://192.168.0.18:3002/getpatientdetails",{patient_id:this.props.patient_id
      }).then((response)=>{
          this.setState({PatientAllDetails:response.data})
          this.setState({first_name:response.data[0].patient_fName})
          this.setState({middle_name:response.data[0].patient_mName})
          this.setState({last_name:response.data[0].patient_lName})
          this.setState({Gender:response.data[0].patient_gender})
          this.setState({disorder:response.data[0].patient_disorder})
          this.setState({birthday:response.data[0].patient_dob})
          this.setState({Primary_Complaint:response.data[0].parimary_complain})
          this.setState({user_name:response.data[0].Caretaker_fname})
          this.setState({middleName:response.data[0].Caretaker_mname})
          this.setState({LastName:response.data[0].Caretaker_lname})
          this.setState({RelationShip:response.data[0].realationship})
          this.setState({email:response.data[0].email_id})
          this.setState({contact_no:response.data[0].contact_number1})
          this.setState({doctor:response.data[0].doctor_assigned})
      }
      ).catch(function (error) {
         // handle error
         alert(error);
       })

       }
      
     
        
        Axios.post("http://192.168.0.18:3002/doctordetails",{hospital_id:global.hospital_id,
        }).then((response)=>{
            this.setState({doctordetails:response.data})
        } ).catch(function (error) {
          // handle error
          alert(error);
        })
        Axios.post("http://192.168.0.18:3002/disorderdetails",{hospital_id:global.hospital_id,
        }).then((response)=>{
            this.setState({disorderDetails:response.data})
        } ).catch(function (error) {
          // handle error
          alert(error);
        })
    }
    getDataLogin=(formSubmitted)=>{
      this.setState(
          {
              formSubmitted:formSubmitted
          }
      )

  }
  onSubmit = (e) => {
      e.preventDefault();
     
      // let PatientDetails={
      //   first_name:this.state.first_name,
      //   last_name:this.state.last_name,
      //   Gender:this.state.Gender
      // }
      global.login=true;
      //this.state.assignment_type='Voice';
      
      //const JsonData=JSON.stringify(PatientDetails);
      alert("calling Node Js");
      
      if (this.state.assignment_type==='Voice') 
      {  alert(this.state.disorder);
        return true
       
        
      }
      else if (this.state.assignment_type==='Ear') {
        return true
        
      } else {
        
        return false
        
      }
     
      //alert("Details");
      
    //   alert(JsonData);
    //   axios.post("https://spiel-80629-default-rtdb.firebaseio.com/PatientData.js"
    //   ,JsonData).then(()=> alert("submit successfully"))
    //  } catch (error) {
    //     alert(error.response); // this is the main part. Use the response property from the error object
    
    //     return error.response;
    //   }
    

   
    
   
    }
    componentDidMount = () => {
      if (this.state.assignment_type)
         return true
    };
  //   onSubmit = () => {
  //     alert("details");
  //     this.props.history.push('/PatientDetails/');
  //  }
    render(){
      if (!this.state.assignment_type )
      {
        
        return(
            <div class="container">

            <form class="well form-horizontal"   id="contact_form" 
           >
        <fieldset>
        
        <div id="header">
        <legend><center><h2><b>Add PatientDetails</b></h2></center></legend><br/>
        </div>
        <div class ="PatinetDetails1">
        <b><h2>Patient Details </h2></b>
          <label class="col-md-4 control-label">First Name</label>  
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input  name="first_name" placeholder="First Name" class="form-control"  type="text" id ="APDtext" value={this.state.first_name}
            onChange={e=>{
              this.setState(
                  {
                    first_name:e.target.value,
                    formSubmitted:true

                  } );
              }}
          />
            </div>
          </div>
       
        <div class="form-group">
          <label class="col-md-4 control-label" >Middle Name</label> 
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input name="middle_name" placeholder="Middle Name" class="form-control"  type="text"  id ="APDtext" value={this.state.middle_name}
            onChange={e=>{
              this.setState(
                  {
                    middle_name:e.target.value

                  } );
              }}
          />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-4 control-label" >Last Name</label> 
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input name="last_name" placeholder="Last Name" class="form-control"  type="text"  id ="APDtext" value={this.state.last_name}
              onChange={e=>{
                this.setState(
                    {
                      last_name:e.target.value
  
                    } );
                }}
          
          />
            </div>
          </div>
        </div>
        <div >
        <label class="col-md-4 control-label" >Gender   </label> <br></br>
        <select name="Gender"  id ="APDtext" value={this.state.Gender}
            onChange={e=>{
              this.setState(
                  {
                    Gender:e.target.value

                  } );
              }} 
        >
              <option value="Gender">select Gender</option>
              <option>Male</option>
              <option>Fe Male</option>
              
            </select>
        </div >
        <div >
        <label class="col-md-4 control-label">Disorder   </label><br></br>
        <select   name="disorder"  width="100" id ="APDtext" value={this.state.disorder}
         onChange={e=>{
              this.setState(
                  {
                    disorder:e.target.value

                  } );
              }}  >
              <option> select disorder</option>
              {this.state.disorderDetails.map(disorder =>
              <option>{disorder.disorder}</option>
              )}
            </select>
        </div >
    
        <div>
          <label> Date of Birth </label><br></br>
            <input type="date" id="birthday" name="birthday" value={this.state.birthday} required onChange={e=>{
              this.setState(
                  {
                    birthday:e.target.value

                  } );
              }}/>
        </div><br></br>
        <div class="form-group">
          <label class="col-md-4 control-label" >Primary Complaint</label> 
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <textarea name="Primary_Complaint" placeholder="Primary Complaint " rows="4" cols="50"  id ="APDtext" value={this.state.Primary_Complaint}
            onChange={e=>{
              this.setState(
                  {
                    Primary_Complaint:e.target.value

                  } );
              }} 
          
          />
            </div>
          </div>
        </div>
        </div>
        <div id ="Parent">
        <b><h2>Parent/ Caretaker Details </h2></b>
        <div class="form-group">
          <label class="col-md-4 control-label">Username</label>  
          <div >
          <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input  name="user_name" placeholder="Username" class="form-control"  type="text"  id ="APDtext" value={this.state.user_name}
              onChange={e=>{
                this.setState(
                    {
                      user_name:e.target.value
  
                    } );
                }} 
          />
            </div>
          </div>
        </div>
        
   
        
        <div class="form-group">
          <label class="col-md-4 control-label" >Middle Name</label> 
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input name="middleName" placeholder="Middle Name" class="form-control"  type="text"  id ="APDtext" value={this.state.middleName}
                   onChange={e=>{
                    this.setState(
                        {
                          middleName:e.target.value
      
                        } );
                    }} 
          />
            </div>
          </div>
        </div>
        
   
        
        <div class="form-group">
          <label class="col-md-4 control-label" >Last Name</label> 
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input name="LastName" placeholder="Last Name" class="form-control"  type="text"  id ="APDtext" value={this.state.LastName}
            onChange={e=>{
              this.setState(
                  {
                    LastName:e.target.value

                  } );
              }} 
          />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label" >Realtionship with Patient</label> 
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input name="RelationShip" placeholder="RelationShip " class="form-control"  type="text"  id ="APDtext" value={this.state.RelationShip}
          onChange={e=>{
            this.setState(
                {
                  RelationShip:e.target.value

                } );
            }} 
          />
            </div>
          </div>
        </div>
   
        <div class="form-group">
           <label class="col-md-4 control-label">E-Mail</label>  
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
          <input name="email" placeholder="E-Mail Address" class="form-control"  type="text"  id ="APDtext" value={this.state.email}
               onChange={e=>{
                this.setState(
                    {
                      email:e.target.value
    
                    } );
                }} 
          />
            </div>
          </div>
        </div>
        
        
    
               
        <div class="form-group">
          <label class="col-md-4 control-label">Contact No.</label>  
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
          <input name="contact_no" placeholder="(639)" class="form-control" type="text"  id ="APDtext" value={this.state.contact_no}
             onChange={e=>{
              this.setState(
                  {
                    contact_no:e.target.value
  
                  } );
              }} 
          
          />

<div >
        <label class="col-md-4 control-label">Doctor   </label><br></br>
        <select   name="doctor"  width="100" id ="APDtext" value={this.state.doctor}
         onChange={e=>{
              this.setState(
                  {
                    doctor:e.target.value

                  } );
              }}  >
                <option>Please assign doctor</option>
                {this.state.doctordetails.map(doctorname =>
              <option>{doctorname.doctor_name}</option>
             
                )}
            </select>
        </div >

            
            </div>
          </div>
        </div>
        <br></br>
        </div>
       <div>
      
      
       </div>
       { /*<div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.</div>*/}
        
    
       <button type="submit" id ='submit1' 
       onClick={e=>{
        this.setState(
            {
              assignment_type:this.state.disorder

            } );
        }}
  
       >Next</button><br></br>
     
        
        </fieldset>
        </form>
        </div>
    
        );
         }
            else if(this.state.assignment_type==="Voice")
            {

              return (
              <div>
              <WelcomePage patient_id   ={this.props.patient_id}
                           first_name   = { this.state.first_name}
                           middle_name  = {this.state.middle_name}
                           last_name    = {this.state.last_name}
                           Gender       = {this.state.Gender}
                           disorder     = {this.state.disorder}
                           birthday     = {this.state.birthday}
                           Primary_Complaint ={this.state.Primary_Complaint}
                           user_name    = {this.state.user_name}
                           middleName   = {this.state.middleName}
                           LastName     = {this.state.LastName}
                           RelationShip = {this.state.RelationShip}
                           email        = {this.state.email}
                           contact_no   = {this.state.contact_no}
                           doctor       = {this.state.doctor}
                           PatientAllDetails={this.state.PatientAllDetails}
                                            />
              <h2 className="Welcome">{this.state.disorder}</h2>
              <h2>HI</h2>
              </div>)
            }
            else if (this.state.assignment_type==="Articulation"){
          
              return(<div>
                <h2 className="Welcome">{this.state.disorder} screen</h2>
                <Articulation first_name   = { this.state.first_name}
                           middle_name  = {this.state.middle_name}
                           last_name    = {this.state.last_name}
                           Gender       = {this.state.Gender}
                           disorder     = {this.state.disorder}
                           birthday     = {this.state.birthday}
                           Primary_Complaint ={this.state.Primary_Complaint}
                           user_name    = {this.state.user_name}
                           middleName   = {this.state.middleName}
                           LastName     = {this.state.LastName}
                           RelationShip = {this.state.RelationShip}
                           email        = {this.state.email}
                           contact_no   = {this.state.contact_no}/>
              </div>)
            }
            else if(this.state.assignment_type==="Aural Rehabilitation")
           {
            return(<div>
              <h2 className="Welcome">{this.state.disorder} screen</h2>
             
            </div>)
           }

    }
    
}
export default AddPersonalPatientDetails;