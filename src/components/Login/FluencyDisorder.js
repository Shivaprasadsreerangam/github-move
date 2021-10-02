import { React, Component } from "react";
import "./AddPatientDetails.css";
import Axios from 'axios';
class FluencyDisorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neurogenic_disorder: '',
            family_history: '',
            contacted_stutterers: '',
            primary_features_observed: '',

            Respiration: '',
            phonatory: '',
            articulatory: '',
            sample_speech: '',
            language_changes: '',
            language: '',
            test_materials: '',
            psychological_evaluation: '',
            diagnosis_confirmed_suspected: '',
            Suspected_Diagnostic: '',
            Confirmed_Diagnosis:'',
            Percentage_syllables_stuttered: '',
            stuttering_duration_average:'',
            stuttering_longest_duration:'',
            overall_speaking_rate:'',
            articulatory_rate:'',
            nonstuttered_longest_duration:'',
            nonstuttered_average_duration:'',
            nonstuttered_longest_length:'',
            Naturalness_rating_scale:'',
            code_switching_noticed:'',    
            cause_neurogenic_disorder:''  
        }
    }
    onClickListener = () => {
        alert("entered");
        Axios.post("https://spiel123.herokuapp.com/insertFluencyPatientDetails", {
          first_name: this.props.first_name,
          middle_name: this.props.middle_name,
          last_name: this.props.last_name,
          Gender: this.props.Gender,
          disorder: this.props.disorder,
          birthday: this.props.birthday,
          Primary_Complaint: this.props.Primary_Complaint,
          user_name: this.props.user_name,
          middleName: this.props.middleName,
          LastName: this.props.LastName,
          RelationShip: this.props.RelationShip,
          email: this.props.email,
          contact_no: this.props.contact_no,
          cause_neurogenic_disorder:this.state.cause_neurogenic_disorder, 
            family_history:this.state.family_history, 
            contacted_stutterers:this.state.contacted_stutterers, 
            primary_features_observed:this.state.primary_features_observed, 
            secondary_features_observed:this.state.secondary_features_observed, 
            Respiration:this.state.Respiration, 
            phonatory:this.state.phonatory, 
            articulatory:this.state.articulatory, 
            sample_speech:this.state.sample_speech, 
            Percentage_syllables_stuttered:this.state.Percentage_syllables_stuttered, 
            stuttering_duration_average:this.state.stuttering_duration_average, 
            overall_speaking_rate:this.state.overall_speaking_rate, 
            articulatory_rate:this.state.articulatory_rate, 
            nonstuttered_average_duration:this.state.nonstuttered_average_duration, 
            nonstuttered_longest_length:this.state.nonstuttered_longest_length, 
            nonstuttered_longest_duration:this.state.nonstuttered_longest_duration, 
            nonstuttered_average_length:this.state.nonstuttered_average_length, 
            Naturalness_rating_scale:this.state.Naturalness_rating_scale, 
            language_changes:this.state.language_changes, 
            language:this.state.language, 
            code_switching_noticed:this.state.code_switching_noticed, 
            test_materials:this.state.test_materials, 
            psychological_evaluation:this.state.psychological_evaluation, 
            diagnosis_confirmed_suspected:this.state.diagnosis_confirmed_suspected, 
            Suspected_Diagnostic:this.state.Suspected_Diagnostic, 
            Confirmed_Diagnosis:this.state.Confirmed_Diagnosis,
            hospital_id:global.hospital_id
        }).then(() => {
          alert("successfully Inserted patient details");
        }
    
        ).catch(function (error) {
          // handle error
          alert(error);
        })
    
      }
    render() {
        return (<div class="PatinetDetails1">
            <div id="header">
                <legend><center><h2><b>Fluency Disorder</b></h2></center></legend><br />
            </div> <br></br><br></br><br></br>
            <label>Is the stuttering caused by any neurogenic disorder?</label>
            <div>
                <input type="radio" id="Yes" name="neurogenic_disorder" value="Yes" onChange={e => {
                    this.setState(
                        {
                            neurogenic_disorder: e.target.value

                        });
                }}
                />
                <label for="neurogenic_disorder">Yes</label>
            </div>
            <div>
                <input type="radio" id="No" name="neurogenic_disorder" value="No" onChange={e => {
                    this.setState(
                        {
                            neurogenic_disorder: e.target.value

                        });
                }}
                />
                <label for="neurogenic_disorder">No</label>

            </div>
            {(this.state.neurogenic_disorder === 'Yes') ?
                (<div>

                    <p>Go to adult neurogenic assessment</p>


                </div>) : ''}


            <label>2.Is there a significant family history? </label><br></br>
            <select name="family_history" value={this.state.family_history} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            family_history: e.target.value

                        });
                }}
            >
                <option>Select Yes/No</option>
                <option>Yes</option>
                <option>No</option>
            </select>

            <br></br>
            <label>3.Is there any contact with stutterers? </label><br></br>
            <select name="contacted_stutterers" value={this.state.contacted_stutterers} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            contacted_stutterers: e.target.value

                        });
                }}
            >
                <option>Select Yes/No</option>
                <option>Yes</option>
                <option>No</option>
            </select>
            <br></br>

            <label>4.What are the features observed? </label><br></br>
            <label>a. Primary </label><br></br>
            <select name="primary_features_observed" value={this.state.primary_features_observed} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            primary_features_observed: e.target.value

                        });
                }}
            >
                <option>Select Yes/No</option>
                <option>Repetitions</option>
                <option>Prolongations</option>
                <option>Blocks</option>
                <option>Pauses (filled/ unfilled)</option>
            </select> <br></br>
            <label>b. Secondary </label><br></br>
            <select name="secondary_features_observed" value={this.state.secondary_features_observed} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            secondary_features_observed: e.target.value

                        });
                }}
            >
                <option>Select Yes/No</option>
                <option>Facial Grimaces</option>
                <option>Hand flapping</option>
                <option>Leg flapping</option>
                <option>Lip pressing</option>
                <option>Frequent eye blinking</option>
            </select> <br></br>

            <label>Was any of the following supplementary physiological areas assessed?</label><br></br>
            <label>a. Respiration </label><br></br>
            <select name="respiration" value={this.state.Respiration} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            Respiration: e.target.value

                        });
                }}
            >
                <option>Select Yes/No</option>
                <option>Normal respiratory function</option>
                <option>Shallow breathing</option>
                <option>Thoracic breathing</option>
                <option>Clavicular breathing</option>
                <option>Prolonged breathing</option>
                <option>Audible inspiration</option>
                <option>Gasping</option>
                <option>Grunt</option>
                <option>Abdominal breathing</option>
            </select><br></br>

            <label>b. Phonatory </label><br></br>
            <select name="phonatory" value={this.state.phonatory} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            phonatory: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>Normal phonatory function</option>
                <option>Hard glottal attack</option>
                <option>Inappropriate intensity</option>
                <option>Inappropriate pitch</option>
                <option>Inappropriate quality</option>
                <option>Voice onset</option>

            </select><br></br>

            <label>c. Articulatory </label><br></br>
            <select name="articulatory" value={this.state.articulatory} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            articulatory: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>Tense articulatory contact</option>
                <option>Inappropriate voicing</option>
                <option>Inappropriate stressing</option>


            </select><br></br>

            <label>6.Was a speech sample taken and assessed ? Yes- </label><br></br>
            <select name="sample_speech" value={this.state.sample_speech} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            sample_speech: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>Yes</option>
                <option>No</option>



            </select>

            {(this.state.sample_speech === 'Yes') ?
                (<div>
                    <label>a.Percentage of syllables stuttered</label><br></br>

                    <input name="Percentage_syllables_stuttered" placeholder="Percentage of syllables stuttered" class="form-control" type="text" id="APDtext" value={this.state.Percentage_syllables_stuttered}
                        onChange={e => {
                            this.setState(
                                {
                                    Percentage_syllables_stuttered: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>b.Average duration of stuttering</label><br></br>
                    <input name="stuttering_duration_average" placeholder="Average duration of stuttering" class="form-control" type="text" id="APDtext" value={this.state.stuttering_duration_average}
                        onChange={e => {
                            this.setState(
                                {
                                    stuttering_duration_average: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>c.Duration of 3 longest stuttering utterances</label><br></br>
                    <input name="stuttering_longest_duration" placeholder="Duration of 3 longest stuttering utterances" class="form-control" type="text" id="APDtext" value={this.state.stuttering_longest_duration}
                        onChange={e => {
                            this.setState(
                                {
                                    stuttering_longest_duration: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>d.Overall speaking rate</label><br></br>
                    <input name="overall_speaking_rate" placeholder="Overall speaking rate" class="form-control" type="text" id="APDtext" value={this.state.overall_speaking_rate}
                        onChange={e => {
                            this.setState(
                                {
                                    overall_speaking_rate: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>e.Articulatory rate</label><br></br>
                    <input name="articulatory_rate" placeholder="Articulatory rate" class="form-control" type="text" id="APDtext" value={this.state.articulatory_rate}
                        onChange={e => {
                            this.setState(
                                {
                                    articulatory_rate: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>f.Average duration of nonstuttered intervals</label><br></br>
                    <input name="nonstuttered_average_duration" placeholder="Average duration of nonstuttered" class="form-control" type="text" id="APDtext" value={this.state.nonstuttered_average_duration}
                        onChange={e => {
                            this.setState(
                                {
                                    nonstuttered_average_duration: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>g.Length of 3 longest non-stuttered intervals</label><br></br>
                    <input name="nonstuttered_longest_length" placeholder="Average duration of nonstuttered" class="form-control" type="text" id="APDtext" value={this.state.nonstuttered_longest_length}
                        onChange={e => {
                            this.setState(
                                {
                                    nonstuttered_longest_length: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>h.Duration of 3 longest nonstuttered intervals</label><br></br>
                    <input name="nonstuttered_longest_duration" placeholder="Duration of 3 longest nonstuttered intervals" class="form-control" type="text" id="APDtext" value={this.state.nonstuttered_longest_duration}
                        onChange={e => {
                            this.setState(
                                {
                                    nonstuttered_longest_duration: e.target.value

                                });
                        }}

                    /><br></br>
                    <label>i.Average length of non stuttered intervals</label><br></br>
                    <input name="nonstuttered_average_length" placeholder="Average length of non stuttered intervals" class="form-control" type="text" id="APDtext" value={this.state.nonstuttered_average_length}
                        onChange={e => {
                            this.setState(
                                {
                                    nonstuttered_average_length: e.target.value

                                });
                        }}

                    />




                </div>) : ''}<br></br>
                <div id="right">
            <label>7.Naturalness rating scale (0to 10)</label><br>
            </br>
            <br></br>
            <label>8.Any difference noticed when language changes? </label><br></br>
            <select name="language_changes" value={this.state.language_changes} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            language_changes: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>Yes</option>
                <option>No</option>



            </select>
            {(this.state.language_changes === 'Yes') ?
                (<div>

                    <select name="language" value={this.state.language} id="APDtext"
                        onChange={e => {
                            this.setState(
                                {
                                    language: e.target.value

                                });
                        }}
                    >
                        <option>which language</option>
                        <option>Mother tongues</option>
                        <option>second language</option>
                        <option>third language</option>



                    </select>

                </div>) :
                ''


            }<br></br>
            <label>9.Code switching noticed?</label><br></br>
            <select name="code_switching_noticed" value={this.state.code_switching_noticed} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            code_switching_noticed: e.target.value

                        });
                }}
            >
                <option>Select Yes/No</option>
                <option>Yes</option>
                <option>No</option>




            </select><br></br>

            <label>10.Was the client assessed using a test materials?</label><br></br>
            <select name="test_materials" value={this.state.test_materials} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            test_materials: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>SSI</option>
                <option>SPI</option>
                <option>Upload the document/ type</option>



            </select>

            <br></br>
            <label>11.Was psychological evaluation done?</label><br></br>
            <select name="psychological_evaluation" value={this.state.psychological_evaluation} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            psychological_evaluation: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>Yes</option>
                <option>No</option>




            </select><br></br>

            <label>12.Was the diagnosis confirmed or suspected?</label><br></br>
            <select name="diagnosis_confirmed_suspected?" value={this.state.diagnosis_confirmed_suspected} id="APDtext"
                onChange={e => {
                    this.setState(
                        {
                            diagnosis_confirmed_suspected: e.target.value

                        });
                }}
            >
                <option>''</option>
                <option>Confirmed: Diagnosis</option>
                <option>Suspected: Diagnostic formulation</option>




            </select>
            {(this.state.diagnosis_confirmed_suspected === 'Confirmed: Diagnosis') ?
                (<div>
                    <label>What is the severity?</label><br></br>
                    <select name="Confirmed_Diagnosis" value={this.state.Confirmed_Diagnosis} id="APDtext"
                        onChange={e => {
                            this.setState(
                                {
                                    Confirmed_Diagnosis: e.target.value

                                });
                        }}
                    >
                        <option>''</option>
                        <option>Non-clinical</option>
                        <option>Mild</option>
                        <option>Moderate</option>
                        <option>Severe</option>
                    </select>


                </div>) : ''}

            {(this.state.diagnosis_confirmed_suspected === 'Suspected: Diagnostic formulation') ?
                (<div>
                    <label>Diagnostic terms:</label><br></br>
                    <select name="Suspected_Diagnostic" value={this.state.Suspected_Diagnostic} id="APDtext"
                        onChange={e => {
                            this.setState(
                                {
                                    Suspected_Diagnostic: e.target.value

                                });
                        }}
                    >
                        <option>''</option>
                        <option>Stuttering</option>
                        <option>Neurogenic</option>
                        <option>Cluttering</option>
                        <option>Psycogenic</option>
                    </select>

                   
                </div>) : ''}
                <button type="submit"  onClick={this.onClickListener}>Submit</button><br></br>   
                </div>
                   
        </div>);
    }
}
export default FluencyDisorder;
