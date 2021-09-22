import React from "react";
import { Component } from "react";
import Axios from 'axios';
import emailjs from 'emailjs-com';

import Popup from "./Popup";
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
class Articulation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        deformity_articulation: '',
        deformity: '',
        oral_mechanism: '',
        oral_mechanism_1: '',
        articulation_assessed: '',
        articulation_assessed_1: '',
        elicit_response_1: '',
        elicit_response_2: '',
        errors_noticed: '',
        errors_noticed_1: '',
        diagnosis_con_sus: '',
        diagnosis_con_sus_1: '',
        Confirmed_Diagnosis: '',
        Suspected_Diagnosis: '',
        articulationSoundsAges: [],
        soundsNotice: '',
        soundsDetails: [],
        PatientSoundDisorderDetails: '',
        Substitution_processes: '',
        Syllable_Structure: '',
        assimilation_processes: '',
        showPopup: false,
        visitedPopup:false,
        email_detail:[],
      }

  
    }
    togglePopup=(e) =>{
      this.setState({
        showPopup: !this.state.showPopup,
        visitedPopup:!this.state.visitedPopup,

        errors_noticed:e.target.value
      });
    }
  handleErrorNotice = (e) => {
    this.setState(
      { showPopup: !this.state.showPopup,
        errors_noticed: e.target.value

      });
     
    Axios.post("http://localhost:3002/articulationSoundsAges", {
      user_id: global.id, dirthdayDate: this.props.birthday
    }).then((response) => {
      this.setState({ articulationSoundsAges: response.data })

    }).catch(function (error) {
      // handle error
      alert(error);
    })
  }

  handleErrorNotice1 = (e) => {
    this.setState({
      soundsDetails: this.state.soundsDetails.concat(e.target.name)
    })
    alert(e.type)
    alert(e.target.value);
  }


  goBack = (e) => {
  
    this.props.updateResults('');

  }





  onClickListener = () => {

    Axios.post("http://localhost:3002/insertArticulationPatientDetails", {
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
      deformity_articulation: this.state.deformity_articulation,
      deformity: this.state.deformity,
      oral_mechanism: this.state.oral_mechanism,
      oral_mechanism_1: this.state.oral_mechanism_1,
      articulation_assessed: this.state.articulation_assessed,
      articulation_assessed_1: this.state.articulation_assessed_1,
      elicit_response: this.state.elicit_response,
      elicit_response_1: this.state.elicit_response_1,
      errors_noticed: this.state.errors_noticed,
      errors_noticed_1: this.state.errors_noticed_1,
      errors_pattern: this.state.errors_pattern,
      errors_pattern_1: this.state.errors_pattern_1,
      diagnosis_con_sus: this.state.diagnosis_con_sus,
      diagnosis_con_sus_1: this.state.diagnosis_con_sus_1,
      Confirmed_Diagnosis: this.state.Confirmed_Diagnosis,
      Suspected_Diagnosis: this.Suspected_Diagnosis,
      soundsDetails: this.state.soundsDetails,
      hospital_id: global.hospital_id,
      PatientSoundDisorderDetails: this.state.PatientSoundDisorderDetails,
      Substitution_processes: this.state.Substitution_processes,
      Syllable_Structure: this.state.Syllable_Structure,
      assimilation_processes: this.state.assimilation_processes

    }).then(() => {
      alert("successfully Inserted patient details");
    }

    ).catch(function (error) {
      // handle error
      alert(error);
    })
    this.sendanEmail();
  }
  sendanEmail = () => {
    this.state.email_detail.name=this.props.first_name;
    this.state.email_detail.to_email=this.props.email;
    this.state.email_detail.subject="Patient details has been provided";
    this.state.email_detail.message="Please contact us if you have any concerns";
    alert(this.state.email_detail.to_email);
    //emailjs.send("service_butcq7q","template_hze4n1q");
   emailjs.sendForm('default_service', 'template_hze4n1q', this.state.email_detail, 'user_1gGBVVnvE3daK48L8HMlW')
      .then((result) => {
          console.log(result.text);
          alert(result.text);
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
      alert('ukiiuioiu');

  }



  render() {
    return (

      <div class="container">

        <form class="well form-horizontal" id="contact_form" >
          <div id="header">
            <h2>Articulation</h2>
            <label>1.	Any history of congenital deformity related to articulation?</label>
            <select name="deformity_articulation" value={this.state.articulation} id="APDtext"
              onChange={e => {
                this.setState(
                  {
                    deformity_articulation: e.target.value

                  });
              }}
            >
              <option>Select Yes/No</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            {(this.state.deformity_articulation === 'Yes') ?
              (<div>
                <select name="deformity " value={this.state.deformity} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        deformity: e.target.value

                      });
                  }} >
                  <option>Select deformity</option>
                  <option>Cleft lip</option>
                  <option>Cleft Palate</option>
                  <option>Cleft lip and Palate</option>
                  <option>syndrome related to facial deformity list </option>

                </select>
              </div>

              ) :
              (<div></div>)

            }
            <div>
              <label>2.	Any significant Oral mechanism changes in structure or function?</label>
              <select name="oral_mechanism" value={this.state.articulation} id="APDtext"
                onChange={e => {
                  this.setState(
                    {
                      oral_mechanism: e.target.value

                    });
                }}
              >
                <option>Select Yes/No</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {(this.state.oral_mechanism === 'Yes') ?
                (<div>
                  <b><label>Go to Oral Peripheral Mechanism Examination and upload</label></b> <br></br><br></br>
                  <p>Click on the "Choose File" button to upload  the test report:</p>
                  <input type="file" id="myFile" name="oral_mechanism" /> <br></br><br></br>

                </div>

                ) :
                (<div></div>)

              }

              <div>
                <label>3.Articulation assessed? </label>
                <select name="articulation_assessed" value={this.state.articulation_assessed} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        articulation_assessed: e.target.value

                      });
                  }}
                >
                  <option>Select Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                {(this.state.articulation_assessed === 'Yes') ?
                  (<div>
                    <select name="articulation_assessed_1" value={this.state.articulation_assessed_1} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            articulation_assessed_1: e.target.value

                          });
                      }} >

                      <option>How is the articulation assessed </option>
                      <option>Formal test </option>
                      <option>Informal test </option>
                      <option>Screening tool</option>
                      <option>Diagnostic tool</option>
                      <option>Upload document/ type results</option>
                    </select>
                  </div>


                  ) :
                  (<div></div>)


                }
                {(this.state.articulation_assessed_1) ? (<div>
                  <p>Click on the "Choose File" button to upload  the test report/Audio or video call:</p>
                  <input type="file" id="myFile" name="oral_mechanism" /> <br></br><br></br>

                </div>) : (<div></div>)}

              </div>

              <div>
                <label>4.	What method was used to elicit response? </label>
                <select name="elicit_response" value={this.state.elicit_response} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        elicit_response: e.target.value

                      });
                  }}
                >
                  <option>Select elicit </option>
                  <option>Picture cards</option>
                  <option>Reading</option>
                  <option>Story narration</option>
                  <option>Discourse</option>
                  <option>No Method/ignore</option>
                </select>

              </div>
              {/* </div>
                <div id ="Parent"> */}
              <div>
                <label>5.	Any Sounds errors noticed  </label>
                <select name="errors_noticed" value={this.state.errors_noticed} id="APDtext" onChange={this.handleErrorNotice}
                // onChange={e=>{
                //   this.setState(
                //       {
                //         errors_noticed:e.target.value

                //       } );
                //   }} 
                >
                  <option>Select Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                {(this.state.errors_noticed === 'Yes' )? 
         ( <Popup

            articulationSoundsAges={this.state.articulationSoundsAges}
            closePopup={this.togglePopup.bind(this)}
            
          />
          
        
          
          
          )
          : null
        }
         
         {(this.state.visitedPopup)?
        (
    
          this.state.PatientSoundDisorderDetails='',
       
        
         this.state.articulationSoundsAges.map(usrdetails =>
               

              this.state.PatientSoundDisorderDetails= this.state.PatientSoundDisorderDetails + ":" + usrdetails.sounds + ":"+usrdetails.sound_type + ":"+usrdetails.selected
           
       
            )):null}
            
             
         
              </div>

              <div>
                <label>6.	Is there a pattern of errors? </label>
                <select name="errors_pattern" value={this.state.errors_pattern} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        errors_pattern: e.target.value

                      });
                  }}
                >
                  <option>Select Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                {(this.state.errors_pattern === 'Yes') ?
                  (<div>
                    <b><label>Substitution Processes:replacing one class of sounds for another class of sounds</label></b>
                    <select name="Substitution_processes" value={this.state.Substitution_processes} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            Substitution_processes: e.target.value

                          });
                      }} >
                      <option>Select error pattern </option>
                      <option>Gliding </option>
                      <option>Backing </option>
                      <option>Vowelization</option>
                      <option>Stopping </option>
                      <option>Fronting</option>

                    </select>
                    <b><label>Syllable Structure Processes:syllables are reduced, omitted, or repeated</label></b>
                    <select name="Syllable_Structure_Processes" value={this.state.Syllable_Structure_Processes} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            Syllable_Structure: e.target.value

                          });
                      }} >
                      <option>Select Syllable Structure Processes </option>
                      <option>Cluster reduction  </option>
                      <option>Final Consonant Deletion   </option>
                      <option>Initial consonant deletion </option>
                      <option>Syllable reduction </option>


                    </select>

                    <b><label>Assimilation processes :when sounds/syllables start to sound like surrounding sounds</label></b>
                    <select name="assimilation_processes" value={this.state.assimilation_processes} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            assimilation_processes: e.target.value

                          });
                      }} >
                      <option>Select Assimilation processes </option>
                      <option>Assimilation   </option>
                      <option>Reduplication  </option>
                      <option>Denasalization  </option>


                    </select>





                  </div>

                  ) :
                  (<div></div>)

                }
              </div>

              <div>
                <label>7.	Was the diagnosis confirmed or suspected?</label>
                <select name="diagnosis_con_sus" value={this.state.diagnosis_con_sus} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        diagnosis_con_sus: e.target.value

                      });
                  }}
                >
                  <option>Select Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                {(this.state.diagnosis_con_sus === 'Yes') ?
                  (<div>
                    <select name="diagnosis_con_sus_1" value={this.state.diagnosis_con_sus_1} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            diagnosis_con_sus_1: e.target.value

                          });
                      }} >
                      <option>Select Diagnosis confirmed/suspected </option>
                      <option>Confirmed: Diagnosis</option>
                      <option>Suspected: Diagnostic formulation</option>


                    </select>
                  </div>

                  ) :
                  (<div></div>)

                }
                {(this.state.diagnosis_con_sus_1 === 'Confirmed: Diagnosis') ?
                  (<div>
                    <select name="Confirmed_Diagnosis" value={this.state.Confirmed_Diagnosis} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            Confirmed_Diagnosis: e.target.value

                          });
                      }} >
                      <option>Select Diagnosis severity  </option>
                      <option>Non-clinical</option>
                      <option>Minimal</option>
                      <option>Moderate</option>
                      <option>Severe</option>


                    </select>
                  </div>

                  ) :
                  (<div></div>)

                }
                {(this.state.diagnosis_con_sus_1 === 'Suspected: Diagnostic formulation') ?
                  (<div>
                    <select name="Suspected_Diagnosis" value={this.state.Suspected_Diagnosis} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            Suspected_Diagnosis: e.target.value

                          });
                      }} >
                      <option>Select d.	Diagnostic terms </option>
                      <option>Misarticulation l</option>
                      <option>Phonological disorder</option>
                      <option>Phonological processes</option>



                    </select>
                  </div>

                  ) :
                  (<div></div>)

                }
              </div>
            </div>

          </div>
        </form>
        <button type="submit" id='submit2' onClick={this.onClickListener}>Submit</button><br></br>
        <button type="submit" id='submit1' onClick={this.goBack}>Back</button><br></br> 
      </div>);
  }
}
export default Articulation;