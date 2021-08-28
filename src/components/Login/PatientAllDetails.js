import  { Component } from "react";
import Axios from 'axios';

import  "./PatientDetails.css";

class PatientAllDetails extends Component{
    constructor(props) {
        super(props)
        this.state ={
            PatientAllDetails:[],
            PatientfullDetails:[],
            ArticulationPatientDetails:[],
            ArticulationPatientDetails_1:[]
        }
       
        
        Axios.post("http://192.168.0.18:3002/getpatientdetails",{patient_id:this.props.patient_id
         }).then((response)=>{
             this.setState({PatientAllDetails:response.data})
         }
         ).catch(function (error) {
            // handle error
            alert(error);
          })

          Axios.post("http://192.168.0.18:3002/patientdetails_1",{hospital_id:global.hospital_id,patient_id:this.props.patient_id
         }).then((response)=>{
             this.setState({PatientfullDetails:response.data})
         }
         ).catch(function (error) {
            // handle error
            alert(error);
          })

          Axios.post("http://192.168.0.18:3002/patientdetails_2",{hospital_id:global.hospital_id,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({ArticulationPatientDetails_1:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         })


        Axios.post("http://192.168.0.18:3002/getArticulationPatientDetails",{patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({ArticulationPatientDetails:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         })

    }

    render(){
        if(this.props.disorder_id==1)
        {
        return(
            <div className="PatinetDetails1">
                <h1 className="PD">Patient Details</h1>
                {this.state.PatientAllDetails.map(PatientData =>
                <table id='table2' >
                    
                    <font size="-5">
                                   <tr><th>Feild</th><th>Value</th></tr>
                                    <tr><td>patient_fName	</td><td>{PatientData.patient_fName}</td></tr>
                                    <tr><td>patient_mName	</td><td>{PatientData.patient_mName}</td></tr>
                                    <tr><td>patient_lName	</td><td>{PatientData.patient_lName}</td></tr>
                                    <tr><td>patient_gender	</td><td>{PatientData.patient_gender}</td></tr>
                                    <tr><td>patient_disorder	</td><td>{PatientData.patient_disorder}</td></tr>
                                    <tr><td>disorder_id	</td><td>{PatientData.disorder_id}</td></tr>
                                    <tr><td>patient_dob	</td><td>{PatientData.patient_dob}</td></tr>
                                    <tr><td>parimary_complain	</td><td>{PatientData.parimary_complain}</td></tr>
                                    <tr><td>Caretaker_fname	</td><td>{PatientData.Caretaker_fname}</td> </tr>
                                    <tr><td>Caretaker_mname	</td><td>{PatientData.Caretaker_mname}</td></tr>
                                    <tr><td>Caretaker_lname	</td><td>{PatientData.Caretaker_lname}</td></tr>
                                    <tr><td>realationship	</td><td>{PatientData.realationship}</td></tr>
                                    <tr><td>email_id	</td><td>{PatientData.email_id}</td></tr>
                                    <tr><td>contact_number1	</td><td>{PatientData.contact_number1}</td></tr>
                                    <tr><td>contact_number2	</td><td>{PatientData.contact_number2}</td></tr>
                                    <tr><td>contact_number3	</td><td>{PatientData.contact_number3}</td></tr>
                                    <tr><td>doctor_assigned	</td><td>{PatientData.doctor_assigned}</td></tr>
                                    <tr><td>hospital_id	</td><td>{PatientData.hospital_id}</td></tr>
                                    <tr><td>patient_id	</td><td>{PatientData.patient_id}</td></tr>
                                    <tr><td>disorder	</td><td>{PatientData.disorder}</td></tr>
                                    <tr><td>vocal_abuse	</td><td>{PatientData.vocal_abuse}</td></tr>
                                    <tr><td>vocal_misue	</td><td>{PatientData.vocal_misue}</td></tr>
                                    <tr><td>prof_voice_user_level	</td><td>{PatientData.prof_voice_user_level}</td></tr>
                                    <tr><td>medical_etiology	</td><td>{PatientData.medical_etiology}</td></tr>
                                    <tr><td>neurogenic_disorder	</td><td>{PatientData.neurogenic_disorder}</td></tr>
                                    <tr><td>respiratory_disorders	</td><td>{PatientData.respiratory_disorders}</td></tr>
                                    <tr><td>voice_usage	</td><td>{PatientData.voice_usage}</td></tr>
                                    <tr><td>task	</td><td>{PatientData.task}</td></tr>
                                    <tr><td>grabs	</td><td>{PatientData.grabs}</td></tr>
                                    <tr><td>pitch	</td><td>{PatientData.pitch}</td></tr>
                                    <tr><td>loudness	</td><td>{PatientData.loudness}</td></tr>
                                    <tr><td>quality	</td><td>{PatientData.quality}</td></tr>
                                    <tr><td>resonance	</td><td>{PatientData.resonance}</td></tr>
                                    <tr><td>articulation	</td><td>{PatientData.articulation}</td></tr>
                                    <tr><td>prosody	</td><td>{PatientData.prosody}</td></tr>
                                    <tr><td>instrumental_analysis	</td><td>{PatientData.instrumental_analysis}</td></tr>
                                    <tr><td>instrumental_analysis1	</td><td>{PatientData.instrumental_analysis1}</td></tr>
                                    <tr><td>multi_Dimensional_Voice_Profile	</td><td>{PatientData.multi_Dimensional_Voice_Profile}</td></tr>
                                    <tr><td>praat	</td><td>{PatientData.praat}</td></tr>
                                    <tr><td>aerodynamic	</td><td>{PatientData.aerodynamic}</td></tr>
                                    <tr><td>diagnosis_terms	</td><td>{PatientData.diagnosis_terms}</td></tr>
                                                 

                                 
                    </font>
                    </table>

                       )}



            </div>
        );
                }
                else{
                    return(<div className="PatinetDetails1"  >
                    <h1 className="PD">Patient Details</h1>
                    {this.state.PatientfullDetails.map(PatientData =>
                <table id='table2' >
                    
                    <font size="-5">
                                   <tr><th>Feild</th><th>Value</th></tr>
                                    <tr><td>patient_fName	</td><td>{PatientData.patient_fname}</td></tr>
                                    <tr><td>patient_mName	</td><td>{PatientData.patient_mName}</td></tr>
                                    <tr><td>patient_lName	</td><td>{PatientData.patient_lName}</td></tr>
                                    <tr><td>patient_gender	</td><td>{PatientData.patient_gender}</td></tr>
                                    <tr><td>patient_disorder	</td><td>{PatientData.patient_disorder}</td></tr>
                                    <tr><td>disorder_id	</td><td>{PatientData.disorder_id}</td></tr>
                                    <tr><td>patient_dob	</td><td>{PatientData.patient_dob}</td></tr>
                                    <tr><td>parimary_complain	</td><td>{PatientData.parimary_complain}</td></tr>
                                    <tr><td>Caretaker_fname	</td><td>{PatientData.Caretaker_fname}</td> </tr>
                                    <tr><td>Caretaker_mname	</td><td>{PatientData.Caretaker_mname}</td></tr>
                                    <tr><td>Caretaker_lname	</td><td>{PatientData.Caretaker_lname}</td></tr>
                                    <tr><td>realationship	</td><td>{PatientData.realationship}</td></tr>
                                    <tr><td>email_id	</td><td>{PatientData.email_id}</td></tr>
                                    <tr><td>contact_number1	</td><td>{PatientData.contact_number1}</td></tr>
                                    <tr><td>contact_number2	</td><td>{PatientData.contact_number2}</td></tr>
                                    <tr><td>contact_number3	</td><td>{PatientData.contact_number3}</td></tr>
                                    </font>
                    </table>

                       )}
                       <br></br><br></br>
                       <b><p>Patient Articlulation details</p></b>
                       {this.state.ArticulationPatientDetails_1.map(PatientData =>
                <table id='table2' >
                    
                    <font size="-5">
                                   <tr><th>Feild</th><th>Value</th></tr>
                                   <tr><td>disorder:	</td><td>{PatientData.disorder}</td></tr>
                                    <tr><td>deformity	</td><td>{PatientData.deformity}</td></tr>
                                    <tr><td>deformity	</td><td>{PatientData.deformity_list}</td></tr>
                                    <tr><td>Oral_mechanism_significant	</td><td>{PatientData.Oral_mechanism_significant}</td></tr>
                                    <tr><td>articulation_assessed	</td><td>{PatientData.articulation_assessed}</td></tr>
                                    <tr><td>elicit_response_method:	</td><td>{PatientData.elicit_response_method}</td></tr>
                                    <tr><td>errors_noticed	</td><td>{PatientData.errors_noticed}</td></tr>
                                    <tr><td>pattern_errors:	</td><td>{PatientData.pattern_errors}</td></tr>
                                    <tr><td>diagnosis_confirm_suspect	</td><td>{PatientData.diagnosis_confirm_suspect}</td></tr>
                                    <tr><td>diagnosis_severity:	</td><td>{PatientData.diagnosis_severity}</td></tr>
                                    <tr><td>Diagnostic_terms:	</td><td>{PatientData.Diagnostic_terms}</td></tr>
                                   
                                    </font>
                    </table>

                       )}

                      

                       <br></br><br></br>
               
                    <font size="-5"> 
                    
                    <p>Error notice on sound</p>
                    <table id='table2' >
                    
                     <th>Sound</th> <th>Sound Check</th> <th>Disorder Level</th>
                    
                    {this.state.ArticulationPatientDetails.map(PatientData =>
                     
                        <tr>
                        <td>{PatientData.sound}</td>
                        <td>{PatientData.sound_check}</td>
                        <td>{PatientData.disorder_level}</td>
                        </tr>
                   
                
                    
                    )}
                   
                    
                    </table>
                    
                    </font>
               
                    </div>)
                }

    }
}
    
export default PatientAllDetails;