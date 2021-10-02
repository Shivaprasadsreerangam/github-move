import { Component } from "react";
import Axios from 'axios';

import "./PatientDetails.css";

class PatientAllDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PatientAllDetails: [],
            PatientfullDetails: [],
            ArticulationPatientDetails: [],
            ArticulationPatientDetails_1: [],
            FluencyPatientDetails: [],
            childLanguagePatientDetails:[],
            adultLanguagePatientDetails:[]
        }


        Axios.post("https://spiel123.herokuapp.com/getpatientdetails", {
            patient_id: this.props.patient_id
        }).then((response) => {
            this.setState({ PatientAllDetails: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })

        Axios.post("https://spiel123.herokuapp.com/patientdetails_1", {
            hospital_id: global.hospital_id, patient_id: this.props.patient_id
        }).then((response) => {
            this.setState({ PatientfullDetails: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })

        Axios.post("https://spiel123.herokuapp.com/patientdetails_2", {
            hospital_id: global.hospital_id, patient_id: this.props.patient_id
        }).then((response) => {
            this.setState({ ArticulationPatientDetails_1: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })


        Axios.post("https://spiel123.herokuapp.com/getArticulationPatientDetails", {
            patient_id: this.props.patient_id
        }).then((response) => {
            this.setState({ ArticulationPatientDetails: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })

        Axios.post("https://spiel123.herokuapp.com/getFluencyPatientDetails", {
            patient_id: this.props.patient_id
        }).then((response) => {
            this.setState({ FluencyPatientDetails: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })

        Axios.post("https://spiel123.herokuapp.com/getChildLanguageDisorderPatientDetails", {
            patient_id: this.props.patient_id,
            hospital_id:global.hospital_id
        }).then((response) => {
            this.setState({ childLanguagePatientDetails: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })

        Axios.post("https://spiel123.herokuapp.com/getAudultLanguageDisorderPatientDetails", {
            patient_id: this.props.patient_id,
            hospital_id:global.hospital_id
        }).then((response) => {
            this.setState({ adultLanguagePatientDetails: response.data })
        }
        ).catch(function (error) {
            // handle error
            alert(error);
        })

    }

    render() {
        if (this.props.disorder_id === 1) {
            return (
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
        else {
            return (<div className="PatinetDetails1"  >
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
                {(this.props.disorder_id === 2)?(<div>
                <b><p>Patient Articlulation details{this.props.disorder_id}</p></b>
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
                            <tr><td>Substitution_processes::	</td><td>{PatientData.Substitution_processes}</td></tr>
                            <tr><td>Syllable_Structure_processes:	</td><td>{PatientData.Syllable_Structure_processes}</td></tr>
                            <tr><td>assimilation_processes:	</td><td>{PatientData.assimilation_processes}</td></tr>


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


            </div>):(<div></div>)}
       
         {(this.props.disorder_id === 4)?
            (<div>
               <h2>Patient Fluency disorder Details </h2>
                {this.state.FluencyPatientDetails.map(PatientData =>
                    <table id='table2' >

                        <font size="-5">
                            <tr><th>Feild</th><th>Value</th></tr>
                            <tr><td>cause_neurogenic_disorder:	</td><td>{PatientData.cause_neurogenic_disorder}</td></tr>
                            <tr><td>family_history	</td><td>{PatientData.family_history}</td></tr>
                            <tr><td>contacted_stutterers	</td><td>{PatientData.contacted_stutterers}</td></tr>
                            <tr><td>primary_features_observed	</td><td>{PatientData.primary_features_observed}</td></tr>
                            <tr><td>secondary_features_observed	</td><td>{PatientData.secondary_features_observed}</td></tr>
                            <tr><td>Respiration:	</td><td>{PatientData.Respiration}</td></tr>
                            <tr><td>phonatory	</td><td>{PatientData.phonatory}</td></tr>
                            <tr><td>articulatory:	</td><td>{PatientData.articulatory}</td></tr>
                            <tr><td>sample_speech	</td><td>{PatientData.sample_speech}</td></tr>
                            <tr><td>Percentage_syllables_stuttered:	</td><td>{PatientData.Percentage_syllables_stuttered}</td></tr>
                            <tr><td>stuttering_duration_average:	</td><td>{PatientData.stuttering_duration_average}</td></tr>
                            <tr><td>overall_speaking_rate::	</td><td>{PatientData.overall_speaking_rate}</td></tr>
                            <tr><td>articulatory_rate:	</td><td>{PatientData.articulatory_rate}</td></tr>
                            <tr><td>nonstuttered_average_duration:	</td><td>{PatientData.nonstuttered_average_duration}</td></tr>
                            <tr><td>nonstuttered_longest_length	</td><td>{PatientData.nonstuttered_longest_length}</td></tr>
                            <tr><td>nonstuttered_longest_duration	</td><td>{PatientData.nonstuttered_longest_duration}</td></tr>
                            <tr><td>nonstuttered_average_length	</td><td>{PatientData.nonstuttered_average_length}</td></tr>
                            <tr><td>Naturalness_rating_scale	</td><td>{PatientData.Naturalness_rating_scale}</td></tr>
                            <tr><td>languagem changes:	</td><td>{PatientData.language_changes}</td></tr>
                            <tr><td>language	</td><td>{PatientData.language}</td></tr>
                            <tr><td>code_switching_noticed:	</td><td>{PatientData.code_switching_noticed}</td></tr>
                            <tr><td>test_materials	</td><td>{PatientData.test_materials}</td></tr>
                            <tr><td>psychological_evaluation	</td><td>{PatientData.psychological_evaluation}</td></tr>


                        </font>
                        <tr>---------------------------------------------------------- </tr>
                        <tr><b> {PatientData.diagnosis_confirmed_suspected}
                            {PatientData.Suspected_Diagnostic}
                             {PatientData.Confirmed_Diagnosis}</b></tr>
                    </table>


                )}





            </div>):(<div></div>)
        }
       {(this.props.disorder_id === 3)?
            (<div>
               <h2>Patient lanugauge disorder Details </h2>
                {this.state.childLanguagePatientDetails.map(PatientData =>
                    <table id='table2' >

                        <font size="-5">
                            <tr><th>Feild</th><th>Value</th></tr>
                            <tr><td>language_assessment:	</td><td>{PatientData.language_assessment}</td></tr>
                            <tr><td>pre_verb_skill_observation	</td><td>{PatientData.pre_verb_skill_observation}</td></tr>
                            <tr><td>receptive_vocabulary	</td><td>{PatientData.receptive_vocabulary}</td></tr>
                            <tr><td>expressive_vocabulary	</td><td>{PatientData.expressive_vocabulary}</td></tr>
                            <tr><td>pre_reading_skills	</td><td>{PatientData.pre_reading_skills}</td></tr>
                            <tr><td>developmental_language:	</td><td>{PatientData.developmental_language}</td></tr>
                            <tr><td>advanced_language	</td><td>{PatientData.advanced_language}</td></tr>
                            <tr><td>mother_tongue:	</td><td>{PatientData.mother_tongue}</td></tr>
                            <tr><td>other_lanugauge	</td><td>{PatientData.other_lanugauge}</td></tr>
                            <tr><td>community_lanugauge:	</td><td>{PatientData.community_lanugauge}</td></tr>
                            <tr><td>client_assessed_tool:	</td><td>{PatientData.client_assessed_tool}</td></tr>
                            <tr><td>recepitive_tool_language::	</td><td>{PatientData.recepitive_tool_language}</td></tr>
                            <tr><td>expressive_tool_language:	</td><td>{PatientData.expressive_tool_language}</td></tr>
                            <tr><td>client_assessed_disorder_specific_tool:	</td><td>{PatientData.client_assessed_disorder_specific_tool}</td></tr>
                            <tr><td>disorder_suspected	</td><td>{PatientData.disorder_suspected}</td></tr>
                            <tr><td>language_delay_suspected	</td><td>{PatientData.language_delay_suspected}</td></tr>
                            <tr><td>language_delay_secondary_disorder	</td><td>{PatientData.language_delay_secondary_disorder}</td></tr>
                    
                            

                        </font>
                        <tr>---------------------------------------------------------- </tr>
                        <tr><b> {PatientData.diagnosis_confirmed_suspected}
                            {PatientData.Suspected_Diagnostic}
                             {PatientData.Confirmed_Diagnosis}</b></tr>
                    </table>


                )}





            </div>):(<div></div>)
        }
        </div>);
    }
   

    }

}


export default PatientAllDetails;
