import React from "react";
import { Component } from "react";
import Axios from 'axios';
class Articulation extends Component
{   constructor(props) {
    super(props)
    this.state={
        deformity_articulation:'',
        deformity :'',
        oral_mechanism:'',
        oral_mechanism_1:'',
        articulation_assessed:'',
        articulation_assessed_1:'',
        elicit_response_1:'',
        elicit_response_2:'',
        errors_noticed:'',
        errors_noticed_1:'',
        diagnosis_con_sus:'',
        diagnosis_con_sus_1:'',
        Confirmed_Diagnosis:'',
        Suspected_Diagnosis:'',
        articulationSoundsAges:[],
        soundsNotice:'',
        soundsDetails:[],
        PatientSoundDisorderDetails:''
    }


    }
    handleErrorNotice=(e)=>{
      this.setState(
        {
          errors_noticed:e.target.value

        } );
        Axios.post("http://192.168.0.18:3002/articulationSoundsAges",{user_id:global.id,dirthdayDate:this.props.birthday
      }).then((response)=>{
          this.setState({articulationSoundsAges:response.data})
     
      } ).catch(function (error) {
        // handle error
        alert(error);
      })
    }
    handleErrorNotice1=(e)=>{
      this.setState({
        soundsDetails: this.state.soundsDetails.concat(e.target.name)
      })
    alert(e.type)
     alert(e.target.value);
    }
    
    onClickListener=() =>{
      Axios.post("http://192.168.0.18:3002/insert",{
      first_name:this.props.first_name,
      middle_name:this.props.middle_name,
      last_name:this.props.last_name,
      Gender:	this.props.Gender,
      disorder:this.props.disorder,
      birthday:this.props.birthday,
      Primary_Complaint:this.props.Primary_Complaint,
      user_name:this.props.user_name,
      middleName:this.props.middleName,
      LastName:this.props.LastName,
      RelationShip:this.props.RelationShip,
      email:this.props.email,
      contact_no:this.props.contact_no,
      vocal_abuse:this.state.vocal_abuse,
      vocal_misue:this.state.vocal_misue,
      prof_voice_user_level:this.state.prof_voice_user_level,
      medical_etiology:this.state.medical_etiology,
      neurogenic_disorder:this.state.neurogenic_disorder,
      respiratory_disorders:this.state.respiratory_disorders,
      voice_usage:this.state.voice_usage,
      task:this.state.task,
      grabs:this.state.grabs,
      pitch:this.state.pitch,
      loudness:this.state.loudness,
      quality:this.state.quality,
      resonance:this.state.resonance,
      articulation:this.state.articulation,
      prosody:this.state.prosody,
      instrumental_analysis:this.state.instrumental_analysis,
      instrumental_analysis1:this.state.instrumental_analysis1,
      multi_Dimensional_Voice_Profile:this.state.multi_Dimensional_Voice_Profile,
      praat:this.state.praat,
      aerodynamic:this.state.aerodynamic,
      diagnosis_terms:this.state.diagnosis_terms,
      deformity_articulation:this.state.deformity_articulation,
      deformity :this.state.deformity,
      oral_mechanism:this.state.oral_mechanism,
      oral_mechanism_1:this.state.oral_mechanism_1,
      articulation_assessed:this.state.articulation_assessed,
      articulation_assessed_1:this.state.articulation_assessed_1,
      elicit_response_1:this.state.elicit_response_1,
      errors_noticed:this.errors_noticed,
      errors_noticed_1:this.state.errors_noticed_1,
      diagnosis_con_sus:this.state.diagnosis_con_sus,
      diagnosis_con_sus_1:this.state.diagnosis_con_sus_1,
      Confirmed_Diagnosis:this.state.Confirmed_Diagnosis,
      Suspected_Diagnosis:this.Suspected_Diagnosis,
      soundsDetails:this.state.soundsDetails,
      PatientSoundDisorderDetails:this.state.PatientSoundDisorderDetails

  }).then(()=>{
      alert("successfully Inserted patient details");
  }

  ).catch(function (error) {
      // handle error
      alert(error);
    })
     
      }
    

    
    render()
    {
        return(
        
            <div class="container">

            <form class="well form-horizontal"   id="contact_form" >
        <div id="header">
            <h2>Articulation</h2>
                <label>1.	Any history of congenital deformity related to articulation?</label>
                <select name="deformity_articulation" value={this.state.articulation} id ="APDtext" 
            onChange={e=>{
              this.setState(
                  {
                    deformity_articulation:e.target.value

                  } );
              }} 
               >
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {(this.state.articulation ==='Yes')?
                 ( <div>
                 <select name="deformity " value={this.state.deformity } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        deformity :e.target.value
     
                       } );
                   }} >
                     <option>Select deformity</option>
                    <option>Cleft lip</option>
                    <option>Cleft Palate</option>
                    <option>Cleft lip and Palate</option>
                    <option>syndrome related to facial deformity list </option>
                   
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                 <div>
                     <label>2.	Any significant Oral mechanism changes in structure or function?</label>
                     <select name="oral_mechanism" value={this.state.articulation} id ="APDtext"
            onChange={e=>{
              this.setState(
                  {
                    oral_mechanism:e.target.value

                  } );
              }} 
               >
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {(this.state.oral_mechanism ==='Yes')?
                 ( <div>
                 <select name="oral_mechanism_1" value={this.state.oral_mechanism_1 } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        oral_mechanism_1 :e.target.value
     
                       } );
                   }} >
                      <option>Select </option>
                    <option>Go to Oral Peripheral Mechanism Examination</option> 
                   
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }

<div>
                     <label>3.	How is the articulation assessed? </label>
                     <select name="articulation_assessed" value={this.state.articulation_assessed} id ="APDtext"
            onChange={e=>{
              this.setState(
                  {
                    articulation_assessed:e.target.value

                  } );
              }} 
               >
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {(this.state.articulation_assessed ==='Yes')?
                 ( <div>
                 <select name="articulation_assessed_1" value={this.state.articulation_assessed_1 } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        articulation_assessed_1 :e.target.value
     
                       } );
                   }} >
                
                    <option>Select </option>
                    <option>Formal test </option> 
                    <option>Informal test </option> 
                    <option>Screening tool</option> 
                    <option>Diagnostic tool</option> 
                    <option>Upload document/ type results</option> 
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                </div>
                    
                <div>
                     <label>4.	What method was used to elicit response? </label>
                     <select name="elicit_response" value={this.state.elicit_response} id ="APDtext"
            onChange={e=>{
              this.setState(
                  {
                    elicit_response:e.target.value

                  } );
              }} 
               >
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {(this.state.elicit_response ==='Yes')?
                 ( <div>
                 <select name="elicit_response_1" value={this.state.elicit_response_1 } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        elicit_response_1 :e.target.value
     
                       } );
                   }} >
                     <option>Select elicit </option>
                    <option>Picture cards</option> 
                    <option>Reading</option> 
                    <option>Story narration</option> 
                    <option>Discourse</option> 
                 
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                </div>    
                {/* </div>
                <div id ="Parent"> */}
                <div>
                     <label>5.	What are the errors noticed? </label>
                     <select name="errors_noticed" value={this.state.elicit_response} id ="APDtext" onChange={this.handleErrorNotice} 
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
                {(this.state.errors_noticed ==='Yes')?
                 (<div>
                     
                    <div>
                    
                  
                      {this.state.articulationSoundsAges.map(usrdetails =>
                        <table id ='sounds' width="5px;" border="0">
                      <tr>
                     <label> <h2>Sound <u><b> {usrdetails.sounds}</b></u></h2></label> 
                   
                     
                     </tr>
                     <tr>
                       <label>Syllable  :</label>
                      <select name={usrdetails.sounds}  id ="APDtext"   onChange={e=>{
                       this.setState({
                        soundsDetails: this.state.soundsDetails.concat(usrdetails.sounds+":Syllable:"+e.target.value),
                        PatientSoundDisorderDetails:this.state.PatientSoundDisorderDetails+":"+usrdetails.sounds+":Syllable:"+e.target.value


                      })
                      // this.state.soundsDetails.map(s =>
                      //     alert(s[0])
                      //   )
                      console.log(this.state.soundsDetails)
                      }}  >
                        <option> select option</option>
                        <option>initial</option>
                        <option>Medial</option>
                        <option>Final</option>
                       </select>
                       
                     </tr>
                     <tr>
                     <label>Word      :</label>
                       <select name="Word"  id ="APDtext" onChange={e=>{
                       this.setState({
                        soundsDetails: this.state.soundsDetails.concat(usrdetails.sounds+":Word:"+e.target.value),
                        PatientSoundDisorderDetails:this.state.PatientSoundDisorderDetails+":"+usrdetails.sounds+":Word:"+e.target.value

                      })  }} >
                        <option> select option</option>
                        <option>initial</option>
                        <option>Medial</option>
                        <option>Final</option>
                       </select>
                     </tr>
                     <tr>
                       <label>Phrases  :</label>
                       <select name="Phrases" id ="APDtext" onChange={e=>{
                       this.setState({
                        soundsDetails: this.state.soundsDetails.concat(usrdetails.sounds+":Phrases:"+e.target.value),
                        PatientSoundDisorderDetails:this.state.PatientSoundDisorderDetails+":"+usrdetails.sounds+":Phrases:"+e.target.value,
                     
                      

                      })  }} 
                       
                       
                       >
                        <option> select Yes/No</option>
                        <option>Yes</option>
                        <option>No</option>
                       </select>
                     </tr>
                     <tr>
                       <label>Sentences   :</label>
                       <select name="Sentences"  id ="APDtext" onChange={e=>{
                       this.setState({
                        soundsDetails: this.state.soundsDetails.concat(usrdetails.sounds+":Sentences:"+e.target.value),
                        PatientSoundDisorderDetails:this.state.PatientSoundDisorderDetails+":"+usrdetails.sounds+":Sentences:"+e.target.value

                      })  }}>
                        <option> select Yes/No</option>
                        <option>Yes</option>
                        <option>No</option>
                       </select>
                     </tr>

                     <tr>
                       <label>----------------------------------</label>
                     </tr>
                   
                     </table>
                    )}
            
                      {this.state.articulationSoundsAges.map(day => {
                        <div>
                          <label>Hello 2{day}</label>

                        {/* <input type="checkbox"  id={day} value={day.sounds} onChange={this.handleCheckboxChange} /> */}
                                            <label  for={day.sounds}>{day.sounds}</label></div>
                                  })}
                    </div>
                                      
                 
                    <div>
            
                        <select name="errors_noticed_1" value={this.state.errors_noticed_1 } id ="APDtext"
                        onChange={e=>{
                          this.setState(
                              {
                                errors_noticed_1 :e.target.value
            
                              } );
                          }} >
                            <option>Select error noticed </option>
                            <option>List of sounds</option> 
                            <option>Level of error-syllable-initial</option> 
                            <option>Level of error-syllable-Medial</option> 
                            <option>Level of error-syllable-Final</option> 
                            <option>Level of error-word-initial</option> 
                            <option>Level of error-word-Medial</option> 
                            <option>Level of error-word-Final</option> 
                            <option>Level of error-phrase</option> 
                            <option>sentence</option> 
                            <option>Type of error- Substitution</option> 
                            <option>Type of error- Omission</option> 
                            <option>Type of error- Distortion</option> 
                            <option>Type of error- Addition</option> 
                        
                          </select>
                    </div>
                  </div>
                        ):
                        (<div></div>)

                        }
                </div>   
                
                <div>
                     <label>6.	Is there a pattern of errors? </label>
                     <select name="errors_pattern" value={this.state.errors_pattern} id ="APDtext"
            onChange={e=>{
              this.setState(
                  {
                    errors_pattern:e.target.value

                  } );
              }} 
               >
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {(this.state.errors_pattern ==='Yes')?
                 ( <div>
                 <select name="errors_pattern_1" value={this.state.errors_pattern_1 } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        errors_pattern_1 :e.target.value
     
                       } );
                   }} >
                     <option>Select error pattern </option>
                    <option>Phonological process list</option> 
                    <option>Distinctive feature list</option> 
                    <option>Phonlogical disorder list- age wise</option> 
                    <option>Stimulability</option> 
                    <option>Consistent of errors</option> 
                    <option>Intelligibility rating scale (7 point rating scale)</option> 
                    <option>Rate psychological/ environmental cause -0-5 </option> 
                    <option>Rate of speech: Normal, </option> 
                    
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                </div>  

                <div>
                     <label>7.	Was the diagnosis confirmed or suspected?</label>
                     <select name="diagnosis_con_sus" value={this.state.diagnosis_con_sus} id ="APDtext"
            onChange={e=>{
              this.setState(
                  {
                    diagnosis_con_sus:e.target.value

                  } );
              }} 
               >
                    <option>Select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {(this.state.diagnosis_con_sus ==='Yes')?
                 ( <div>
                 <select name="diagnosis_con_sus_1" value={this.state.diagnosis_con_sus_1 } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        diagnosis_con_sus_1 :e.target.value
     
                       } );
                   }} >
                     <option>Select Diagnosis confirmed/suspected </option>
                    <option>Confirmed: Diagnosis</option> 
                    <option>Suspected: Diagnostic formulation</option> 
                   
                    
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                {(this.state.diagnosis_con_sus_1 ==='Confirmed: Diagnosis')?
                 ( <div>
                 <select name="Confirmed_Diagnosis" value={this.state.Confirmed_Diagnosis } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        Confirmed_Diagnosis :e.target.value
     
                       } );
                   }} >
                     <option>Select Diagnosis severity  </option>
                    <option>Non-clinical</option> 
                    <option>Minimal</option> 
                    <option>Moderate</option> 
                    <option>Severe</option> 
                   
                    
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                {(this.state.diagnosis_con_sus_1 ==='Suspected: Diagnostic formulation')?
                 ( <div>
                 <select name="Suspected_Diagnosis" value={this.state.Suspected_Diagnosis } id ="APDtext"
                 onChange={e=>{
                   this.setState(
                       {
                        Suspected_Diagnosis :e.target.value
     
                       } );
                   }} >
                     <option>Select d.	Diagnostic terms </option>
                    <option>Misarticulation l</option> 
                    <option>Phonological disorder</option> 
                    <option>Phonological processes</option> 
                  
                   
                    
                  </select>
                  </div>

                 ):
                 (<div></div>)

                }
                </div>  
                    </div> 

        </div>
        </form>
        <button type="submit" id ='submit2' onClick={this.onClickListener}>Submit</button><br></br>
        </div>);
    }
}
export default Articulation;