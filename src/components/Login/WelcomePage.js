import { Component } from "react";
import Axios from "axios";
import "./AddPatientDetails.css"

class WelcomePage extends Component {
    constructor(props) {
        super(props)
     if (this.props.PatientAllDetails) {
         this.state={
            vocal_abuse:'',
            vocal_misue:'',
            prof_voice_user_level:'',
            medical_etiology:'',
            neurogenic_disorder:'',
            respiratory_disorders:'',
            voice_usage:'',
            task:'',
            grabs:'',
            pitch:'',
            loudness:'',
            quality:'',
            resonance:'',
            articulation:'',
            prosody:'',
            instrumental_analysis:'',
            instrumental_analysis1:'',
            multi_Dimensional_Voice_Profile:'',
            praat:'',
            aerodynamic:'',
            diagnosis_terms:'',
         }
         
     }
     else{
            this.state = {
            vocal_abuse:this.props.PatientAllDetails[0].vocal_abuse,
            vocal_misue:this.props.PatientAllDetails[0].vocal_misue,
            prof_voice_user_level:this.props.PatientAllDetails[0].prof_voice_user_level,
            medical_etiology:this.props.PatientAllDetails[0].medical_etiology,
            neurogenic_disorder:this.props.PatientAllDetails[0].neurogenic_disorder,
            respiratory_disorders:this.props.PatientAllDetails[0].respiratory_disorders,
            voice_usage:this.props.PatientAllDetails[0].voice_usage,
            task:this.props.PatientAllDetails[0].task,
            grabs:this.props.PatientAllDetails[0].grabs,
            pitch:this.props.PatientAllDetails[0].pitch,
            loudness:this.props.PatientAllDetails[0].loudness,
            quality:this.props.PatientAllDetails[0].quality,
            resonance:this.props.PatientAllDetails[0].resonance,
            articulation:this.props.PatientAllDetails[0].articulation,
            prosody:this.props.PatientAllDetails[0].prosody,
            instrumental_analysis:this.props.PatientAllDetails[0].instrumental_analysis,
            instrumental_analysis1:this.props.PatientAllDetails[0].instrumental_analysis1,
            multi_Dimensional_Voice_Profile:this.props.PatientAllDetails[0].multi_Dimensional_Voice_Profile,
            praat:this.props.PatientAllDetails[0].praat,
            aerodynamic:this.props.PatientAllDetails[0].aerodynamic,
            diagnosis_terms:this.props.PatientAllDetails[0].diagnosis_terms,
            }

        }
    }

    onClickListener=() =>{
        Axios.post("http://192.168.0.18:3002/insert",{
        patient_id:this.props.patient_id,
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
        doctor:this.props.doctor,
        hospital_id:global.hospital_id,
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
        diagnosis_terms:this.state.diagnosis_terms

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
            <div>
            <div className='Welcome'>
                
                <div><h1>  {this.props.patient_details}</h1></div>
                
                <div>
                    <h2>1. Any history of the following? </h2>
            </div>
            <div>
                 <label>a.Vocal abuse/ misuse</label>
                    <div>
                        <label for="No">abuse    </label>
                        <input type="checkbox" id="abuse" name="abuse" value={this.state.vocal_abuse}
                         onChange={e=>{
                            this.setState(
                                {
                                  vocal_abuse:e.target.value,
                                  
                                } );
                            }}
                        />
                        
                    </div>

                    <div> 
                        <label for="misuse">misuse     </label>
                        <input type="checkbox" id="misuse" name="misuse"  value={this.state.vocal_misue} onChange={e=>{
                            this.setState(
                                {
                                  vocal_misue:e.target.value,
                                  
              
                                } );
                            }}/>
                         
                    </div>   
             </div> 
            <div>
                 <label>b.Professional voice users </label><br></br>
                 <select name="prof_voice_user_level" id ="APDtext" value={this.state.prof_voice_user_level}
                 onChange={e=>{
                    this.setState(
                        {
                            prof_voice_user_level:e.target.value,
                          
      
                        } );
                    }}>
                    <option value="professional_voice_user" >select disorder</option>
                    <option>Level 1- Singers, teachers</option>
                    <option>Level 2- Politician, speakers</option>
                    <option >Level 3- vendors</option>
                 </select>
             </div>
             <div>
                 <label>c.Medical etiology </label> <br></br>
                 <select name="Medical_etiology" id ="APDtext" value={this.state.medical_etiology}
                  onChange={e=>{
                    this.setState(
                        {
                          medical_etiology:e.target.value,
                          
      
                        } );
                    }}>
                    <option value="Medical_etiology">select Medical etiology</option>
                    <option>Vocal nodule</option>
                    <option>Polyp</option>
                    <option >Cyst </option>
                    <option>Contact ulcers</option>
                    <option>Neurogenic disorder</option>
                    <option >GERD/ related disorders </option>
                    <option >Respiratory disorders </option>
                    <option>Laryngectomee</option>
                    <option>Tracheostomies</option>
                    <option >Physical trauma </option>
                 </select>
             </div>
             {(this.state.medical_etiology==='Neurogenic disorder')?
               (<div><label>Neurogenic disorder</label>
                <select name="neurogenic_disorder" id ="APDtext" value={this.state.neurogenic_disorder}
                  onChange={e=>{
                    this.setState(
                        {
                            neurogenic_disorder:e.target.value,
                          
      
                        } );
                    }}
                
                >Neurogenic disorder
               <option value="neurogenic_disorder">Select Neurogenic disorder </option>
               <option >Paralysis</option>
               <option>paresis</option></select>
               </div>):(<div></div>)
             }
               {(this.state.medical_etiology==='Respiratory disorders')?
               (<div><label>Respiratory disorders</label>
                <select name="respiratory_disorders" id ="APDtext" value={this.state.respiratory_disorders}
                 onChange={e=>{
                    this.setState(
                        {
                            respiratory_disorders:e.target.value,
                          
      
                        } );
                    }}

                 >Neurogenic disorder
               <option value="respiratory_disorders">Select Respiratory disorders </option>
               <option >Pneumonia </option>
               <option>Aspiration/ choking</option></select>
               </div>):(<div></div>)
             }
               
             
             <div>
                 <label>2.	Number of hours of voice usage/ day? </label><br></br>
                 <input type="text" id ="APDtext"  name='voice_usage' value={this.state.voice_usage}
                  onChange={e=>{
                    this.setState(
                        {
                            voice_usage:e.target.value,
                          
      
                        } );
                    }}
                 
                 ></input>
            </div>
            <div>
            <label>How is the perceptual characteristic of the voice</label>
            </div>
             <div>
                 <label>Task</label><br></br>
                
                 <select name="task" id ="APDtext"  value={this.state.task}
                  onChange={e=>{
                    this.setState(
                        {
                            task:e.target.value,
                          
      
                        } );
                    }}>
                    <option value="task">select Task</option>
                    <option>Phonation: a, I, u, s, z</option>
                    <option>Reading</option>
                    <option >Singing </option>
                    <option>Speaking</option>
                    <option>SpeakingRange</option>
                    <option >Singing range </option>
                    
                 </select>
             </div>
             <div>
                 <label>b.GRBAS scale</label> <br></br>
                
                 <select name="grabs" id ="APDtext" value={this.state.grabs}
                    onChange={e=>{
                        this.setState(
                            {
                                grabs:e.target.value,
                              
          
                            } );
                        }}
                 
                 >
                    <option value="grabs">select GRBAS</option>
                    <option>Roughness</option>
                    <option>Breathiness</option>
                    <option >Asthenic </option>
                    <option>Strained </option>                    
                 </select>
             </div>
             <div>
                 <label>c.	Pitch</label> <br></br>
                
                 <select name="pitch" id ="APDtext" value={this.state.pitch}
                  onChange={e=>{
                    this.setState(
                        {
                            pitch:e.target.value,
                          
      
                        } );
                    }}
                 >
                    <option value="pitch">select Pitch</option>
                    <option>High</option>
                    <option>low</option>
                    <option >appropriate </option>
                                     
                 </select>
             </div>
             <div>
                 <label><div>
                 <label>d.	Loudness</label> <br></br>
                
                 <select name="loudness" id ="APDtext" value={this.state.loudness}
                  onChange={e=>{
                    this.setState(
                        {
                            loudness:e.target.value,
                          
      
                        } );
                    }}
                 >
                    <option value="loudness">select Loudness</option>
                    <option>High</option>
                    <option>low</option>
                    <option >appropriate </option>
                                     
                 </select>
             </div></label> <br></br>
             <label>e.	Quality </label> <br></br>
                 <select name="quality" id ="APDtext" value={this.state.quality}
                 onChange={e=>{
                    this.setState(
                        {
                            quality:e.target.value,
                          
      
                        } );
                    }}
                 >
                    <option value="quality">select Pitch</option>
                    <option>Harsh</option>
                    <option>Hoarse</option>
                    <option >Breathy </option>
                    <option >Strangulated </option>
                    <option >Strained </option>
                    <option >Normal </option>             
                 </select>
             </div>
             <div>
             <label>f.	Resonance </label> <br></br>
                 <select name="resonance" id ="APDtext" value={this.state.resonance}
                   onChange={e=>{
                    this.setState(
                        {
                            resonance:e.target.value,
                          
      
                        } );
                    }}
                 >
                    <option value="resonance">select Pitch</option>
                    <option>Hypernasal </option>
                    <option>Hyponasal</option>
                    <option >appropriate </option>
                             
                 </select>
             </div>
             <div>
             <label>g.	Articulation </label> <br></br>
                 <select name="articulation" id ="APDtext" value={this.state.articulation}
                   onChange={e=>{
                    this.setState(
                        {
                            articulation:e.target.value,
                          
      
                        } );
                    }}
                 >
                    <option value="articulation">select Articulation</option>
                    <option>appropriate </option>
                    <option>not appropriate</option>          
                 </select>
             </div>
             <div> 
             <label>h.	Prosody </label> <br></br>
                 <select name="prosody" id ="APDtext" value={this.state.prosody}
                  onChange={e=>{
                    this.setState(
                        {
                            prosody:e.target.value,
                          
      
                        } );
                    }}
                 >
                    <option value="prosody">select Prosody</option>
                    <option>Intonation </option>
                    <option>Stress</option>    
                    <option>Duration</option>  
                    <option>Rhythm</option>        
                 </select>
             </div>
            </div>

            <div id ="Parent">
            <div>
            <label>4.	Was any instrumental analysis done?</label> <br></br>
                <select name="instrumental_analysis" id ="APDtext" value={this.state.instrumental_analysis} onChange={e=>{
                    this.setState(
                        {
                          instrumental_analysis:e.target.value,
                        } );
                    }}><option>  </option>
                        <option>Yes</option>
                        <option>No</option>            
                </select>
            </div>
           
            {
                (this.state.instrumental_analysis==='Yes')?
                (<div>
                <label>Select Below</label> <br></br>
                    <select name="instrumental_analysis1" id ="APDtext"  value={this.state.instrumental_analysis1}
                    onChange={e=>{
                        this.setState(
                            {
                            instrumental_analysis1:e.target.value,
                            } );
                        }}
                    
                    >       <option></option>
                            <option>Multi-Dimensional-Voice-Profile </option>
                            <option>PRAAT </option>
                            <option>LTAS</option>  
                            <option>Aerodynamic </option>
                            <option>EGG- Vaghmi </option>
                            <option>Spectogram</option>     
                            <option>Endoscopy</option>    
                            <option>Upload document/type</option>   
                    </select></div>):(<div> </div>)}

                    {(this.state.instrumental_analysis1==='Multi-Dimensional-Voice-Profile')?
                    (<div>
                        <label>Multi-Dimensional-Voice-Profile </label> <br></br>
                    <select name="multi-Dimensional_Voice_Profile" id ="APDtext"  value={this.state.multi_Dimensional_Voice_Profile}
                    onChange={e=>{
                        this.setState(
                            {
                                multi_Dimensional_Voice_Profile:e.target.value,
                            } );
                        }}
                    
                    >       <option>Fundamental frequency</option>
                            <option>Voice break related measures </option>
                            <option>Tremor related measures</option>  
                            <option>Voice intergrity related measure </option>
                              
                    </select>

                     </div>):(<div></div>)
                }
                
            
                
            {(this.state.instrumental_analysis1==='PRAAT')?
                    (<div>
                        <label>Select Below for PRAAT</label> <br></br>
                    <select name="praat" id ="APDtext"  value={this.state.praat}
                    onChange={e=>{
                        this.setState(
                            {
                                praat:e.target.value,
                            } );
                        }}
                    
                    >       <option>Fundamental frequency</option>
                            <option>Phonation duration </option>
                            <option>Glide duration</option>  
                            <option>Frequency range </option>
                            <option>Intensity Range </option>
                            <option>Shimmer- Amplitude perturbations</option>     
                            <option>Rise time</option>    
                            <option>Fall time/ type</option>   
                            <option>HNR</option>    
                            <option>SNR</option>  
                    </select> <br></br>
                    <p>Click on the "Choose File" button to upload a file:</p>
                 
                 
                    <input type="file" id="myFile" name="filename"/> <br></br>
                   
                   

                     </div>):(<div></div>)
                }
              {(this.state.instrumental_analysis1==='Aerodynamic')?
                    (<div>
                        <label>Aerodynamic</label> <br></br>
                    <select name="aerodynamic" id ="APDtext"  value={this.state.aerodynamic}
                    onChange={e=>{
                        this.setState(
                            {
                                aerodynamic:e.target.value,
                            } );
                        }}
                    
                    >       <option>Vital capapcity</option>
                            <option>Mean Airflow Rate </option>
                            <option>Phonation Duration</option>  
                              
                    </select> <br></br>
                    <p>Click on the "Choose File" button to upload a file:</p>
                 
                 
                    <input type="file" id="myFile" name="filename"/> <br></br>
                   

                     </div>):(<div></div>)
                }

{(this.state.instrumental_analysis1==='Upload document/type')?
                    (<div> <br></br>
                      
                    <p>Click on the "Choose File" button to upload a file:</p>
                 
                 
                    <input type="file" id="myFile" name="filename"/> <br></br>
                   

                     </div>):(<div></div>)
                }


                <div>
                <label>5.Diagnosis terms</label> <br></br>
                    <select name="diagnosis_terms" id ="APDtext"  value={this.state.diagnosis_terms}
                    onChange={e=>{
                        this.setState(
                            {
                                diagnosis_terms:e.target.value,
                            } );
                        }}
                    
                    >       <option></option>
                            <option>Androphonia </option>
                            <option>Puberphonia </option>
                            <option>Hoarse/ harsh Voice </option>  
                            <option>Mild/ Moderate/ Severe </option>
                            <option>Consequent to (q 1c or voice usage) </option>
                             
                    </select></div>
                
                
            </div>
            <button type="submit" id ='submit2' onClick={this.onClickListener}>Submit</button><br></br>
            </div>
        );
    }
}
export default WelcomePage;