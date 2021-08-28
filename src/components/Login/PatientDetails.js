import  { Component } from "react";
//import {PatientData} from './PatientData';
import  "./PatientDetails.css";
import Axios from "axios";
//import { PatientData } from "./PatientData";
import PatientAllDetails from "./PatientAllDetails";
import AddPersonalPatientDetails from "./AddPersonalPatientDetails";
import Treatment from "./treatment";

//import { Link } from "react-router-dom";
class SideBar extends Component {
   constructor(props) {
      super(props)
        this.state ={
           PatientDetails:[],
           patient_id:'',
           edit_patient_id:'',
           show_Patient_id:'',
           treatment_patient_id:''

        }
         Axios.post("http://192.168.0.18:3002/patientdetails",{hospital_id:global.hospital_id
         }).then((response)=>{
             this.setState({PatientDetails:response.data})
         }
         
     
         ).catch(function (error) {
             // handle error
             alert(error);
           })
         
         // const promise = Axios.get("http://192.168.0.18:3002/patientdetails")

         // // using .then, create a new promise which extracts the data
         // const dataPromise = promise.then((response) => response.data)
     
         // // return it
         // alert(dataPromise.data )  
             
   }
   // onClickListener=(e) =>{
   //    e.preventDefault();
   //    this.setState(
   //       {
   //         patient_id:PatientData.patient_id

   //       } );
   //   }
   
    render() {
       if((!this.state.patient_id && !this.state.disorder_id))
       {
        return (
           <div className="PatientDetails">
              <h2 className="PD" >Patient details</h2>
               {/* {this.state.PatientDetails.map(PatientData => <h2>{PatientData.patient_fname}</h2>)} */}
               
                   <div ><table align="center" className="center"> 
                     {/* <th>Patient Id</th> */}
                     <th>Patient Name</th>
                     <th>Patient disorder</th>
                     <th>patient Date of birth</th>
                     <th>patient Caretaker</th>
                     <th>Email Id</th>
                     <th>contact number</th>
                       actions
                     
                     
                  {this.state.PatientDetails.map(PatientData =>
                  <tr >
                     {/* <td>{PatientData.patient_id}</td> */}
                     <td>{PatientData.patient_fname}</td>
                     <td>{PatientData.patient_disorder}</td>
                     <td>{PatientData.patient_dob}</td>
                     <td>{PatientData.Caretaker_fname}</td>
                     <td>{PatientData.email_id}</td>
                     <td>{PatientData.contact_number1}</td>
                     <td><button type="submit" id ='submit3' 
                        onClick={e=>{
                           this.setState(
                               {
                                 patient_id:PatientData.patient_id,
                                 show_Patient_id:PatientData.patient_id,
                                 disorder_id:PatientData.disorder_id,
                   
                               } );
                           }}
                        
                        
                        
                    
  
       >show more details</button></td>
         <td><button type="submit" id ='submit3' 
                        onClick={e=>{
                           this.setState(
                               {
                                 patient_id:PatientData.patient_id,
                                 edit_patient_id:PatientData.patient_id,
                                 disorder_id:PatientData.disorder_id,
                                
                   
                               } );
                           }}
                        
                        
                        
                    
  
       >edit</button></td>
       <td><button type="submit" id ='submit3' 
                        onClick={e=>{
                           this.setState(
                               {
                                 
                                 patient_id:PatientData.patient_id,
                                 disorder_id:PatientData.disorder_id,
                                 treatment_patient_id:PatientData.patient_id
                   
                               } );
                           }}
                        
                        
                        
                    
  
       >Start Treatment</button></td>

<td><button type="submit" id ='submit3' 
                        
                        
                        
                        
                    
  
       >Delete</button></td>


                     </tr>
                       )}
            </table></div>
                
                {/* {PatientData.map((val,key)=>{
                     return <div ><table align="center" className="center">
                                 <tr >
                                    <td>{val.Name}</td>
                                    <td>{val.disorder}</td>
                                    <td>{val.Duration}</td>
                                    <td>{val.completedSteps}</td>
                                    <td>{val.ExpCompleted}</td>
                                    <td>{val.TotalStemps}</td>
                                    <td>{val.doctor}</td>

                                    </tr>
                           </table></div>
                        
                          
                    

                }
                )} */}
                 
                </div> )
                }
                else if(this.state.edit_patient_id){

                   return(<div><h1>edit</h1>
                      <AddPersonalPatientDetails patient_id={this.state.edit_patient_id}/>
                   </div>
                   );

                }
                else if ((this.state.show_Patient_id))
                {
                  return(<div>
                     <PatientAllDetails patient_id={this.state.patient_id}
                                        disorder_id={this.state.disorder_id}/>
                  </div>
                  );

                }
                else
                {
                   return(<div className="PatientDetails">
                      
                        <Treatment disorder_id={this.state.disorder_id}
                                   patient_id ={this.state.patient_id}/>
                        
                   </div>);
                   

                }
             
                
                
                
               
           
        

}
}
export default SideBar;