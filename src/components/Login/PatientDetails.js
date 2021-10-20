import { Component } from "react";
//import {PatientData} from './PatientData';
import "./PatientDetails.css";
import Axios from "axios";
//import { PatientData } from "./PatientData";
import PatientAllDetails from "./PatientAllDetails";
import AddPersonalPatientDetails from "./AddPersonalPatientDetails";
import Treatment from "./treatment";

//import { Link } from "react-router-dom";
class SideBar extends Component {
   constructor(props) {
      super(props)
      this.state = {
         PatientDetails: [],
         patient_id: '',
         edit_patient_id: '',
         show_Patient_id: '',
         treatment_patient_id: '',
         delete_patient_id: '',

      }
      Axios.post("https://spiel123.herokuapp.com/patientdetails", {
         hospital_id: global.hospital_id
      }).then((response) => {
         this.setState({ PatientDetails: response.data })
      }


      ).catch(function (error) {
         // handle error
         alert(error);
      })

   }
   delete_patient_details = () => {
  

      Axios.post("https://spiel123.herokuapp.com/deletePatientDetails", {
         hospital_id: global.hospital_id, patient_id: this.state.delete_patient_id
      }).then((response) => {
          this.setState({ delete_patient_id: '' })
         
      
      }

      


      ).catch(function (error) {
         // handle error
         alert(error);
      })

      Axios.post("https://spiel123.herokuapp.com/patientdetails", {
         hospital_id: global.hospital_id
      }).then((response) => {
         this.setState({ PatientDetails: response.data })
         alert("Patient "+this.state.patient_fname+" details are deleted successfully ");
      }


      ).catch(function (error) {
         // handle error
         alert(error);
      })

   }


   render() {
      if ((!this.state.patient_id && !this.state.disorder_id)) {
         return (
            <div className="PatientDetails">
               <h2 className="PD" >Patient details</h2>
               {/* {this.state.PatientDetails.map(PatientData => <h2>{PatientData.patient_fname}</h2>)} */}
               {(this.state.delete_patient_id)?(<div>{this.delete_patient_details(this.state.delete_patient_id)}</div>):(<div>

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
                        <td><button type="submit" id='submit3'
                           onClick={e => {
                              this.setState(
                                 {
                                    patient_id: PatientData.patient_id,
                                    show_Patient_id: PatientData.patient_id,
                                    disorder_id: PatientData.disorder_id,

                                 });
                           }}





                        >show more details</button></td>
                        <td><button type="submit" id='submit3'
                           onClick={e => {
                              this.setState(
                                 {
                                    patient_id: PatientData.patient_id,
                                    edit_patient_id: PatientData.patient_id,
                                    disorder_id: PatientData.disorder_id,


                                 });
                           }}
                        >edit</button></td>
                        <td><button type="submit" id='submit3'
                           onClick={e => {
                              this.setState(
                                 {

                                    patient_id: PatientData.patient_id,
                                    disorder_id: PatientData.disorder_id,
                                    treatment_patient_id: PatientData.patient_id

                                 });
                           }}

                        >Start Therapy</button></td>

                        <td><button type="submit" id='submit3'      onClick={e => {
                              this.setState(
                                 {

                                    delete_patient_id: PatientData.patient_id,
                                    patient_fname:PatientData.patient_fname,
                                 

                                 });
                           }}

                        >Delete</button></td>


                     </tr>
                  )}
               </table></div>

               </div>)}

            </div>)
      }
      else if (this.state.edit_patient_id) {

         return (<div><h1>edit</h1>
            <AddPersonalPatientDetails patient_id={this.state.edit_patient_id} />
         </div>
         );

      }
      else if ((this.state.show_Patient_id)) {
         return (<div>
            <PatientAllDetails patient_id={this.state.patient_id}
               disorder_id={this.state.disorder_id} />
         </div>
         );

      }

      else {
         return (<div className="PatientDetails">

            <Treatment disorder_id={this.state.disorder_id}
               patient_id={this.state.patient_id} />

         </div>);


      }








   }
}
export default SideBar;
