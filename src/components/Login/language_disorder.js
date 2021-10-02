import { React, Component } from "react";
import ReactTooltip from 'react-tooltip';
import './AddPatientDetails.css'
import Axios from 'axios';
class language_disorder extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      language_assessment: '',
      area_assess:'',
      pre_verb_skill_observation:'',
      receptive_vocabulary:'',
      expressive_vocabulary:'',
      pre_reading_skills:'',
      advanced_language: '',
      developmental_language: '',
      other_lanugauge: '',
      mother_tongue: '',
      community_language: '',
      client_assessed_tool: '',
      recepitive_tool_language: '',
      expressive_tool_language: '',
      client_assessed_disorder_specific_tool: '',
      language_delay_suspected: '',
      language_delay_secondary_disorder: '',
      consq_language_delay_secondary_disorder: '',
      significant_medical_history: '',
      morbid_change: '',
      morbid_change_observed:'',
      adult_neurogenic_communication_disorder: '',
      dementia: '',
      right_hemisphere_damage: '',
      alzheimer: '',
      parkinsons:'',
      dysphagia: '',
      apraxia: '',
      dysarthria: '',
      test_material: '',
      significant_issue_speech: '',
      community_lanugauge:'',
      theory_of_mind:'',
      meta_linguistic_skills:'',
      ambiguity:'',
      humour:'',
      sarcasm:'',
      auditory_memory:'',
      auditory_sequencing:'',
      auditory_processing:'',
      visual_processing:'',
      verbal_reasoning:'',
      receptive_language_age:'',
      receptive_language_details:'',
      expressive_language_age:'',
      expressive_language_details:'',
      short_term_retell_story:'', //adult
      long_term:'',
      working_memory:'',
      retrospective_memory:'',
      prospective:'',
      digit_forward:'',
      driving_scenes:'',
      sustained_attention:'',
      letter_cancellation_test:'',
      decision_making:'',
      speech_apraxia:'',
      speech_disarthria:'',
      handedness:'',
      swallowing:'',
      quality_of_life:'',
      verbal_performance:'',
      non_verbal_performance:'',
      diagnosis_confirmed_suspected:'',
      language_comprehension:'',
      vocabulary:'',
      digtit_span:'',
      letter_number_sequencing:'',
      visual_discrimination:'',
      object_assembly:'',
      block_design:'',
      figure_drawing:'',
      picture_completion_task:'',
      picture_arrangement:'',
      picture_absurdity:'',
      similarities:'',
      reasoning:'',
      judgement :'',
      categories:'',
      trail_making:'',
      verbal_fluency:'',
      design_fluency:'',
    };
  }
  onClickListener = () => {
    alert("entered");
    Axios.post("https://spiel123.herokuapp.com/insertLanguageDisorderPatientDetails", {
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
      hospital_id:global.hospital_id,
      language_assessment :this.state.language_assessment ,
      area_assess:this.state.area_assess,
      significant_medical_history:this.state.significant_medical_history,
      morbid_change:this.state.morbid_change,
      adult_neurogenic_communication_disorder :this.state.adult_neurogenic_communication_disorder ,
      dementia:this.state.dementia,
      right_hemisphere_damage :this.state.right_hemisphere_damage ,
      alzheimer:this.state.alzheimer,
      parkinsons:this.state.parkinsons,
      dysphagia :this.state.dysphagia ,
      apraxia:this.state.apraxia,
      test_material:this.state.test_material,
      test_meterial_file :this.state.test_meterial_file ,
      significant_issue_speech:this.state.significant_issue_speech,
      diagnosis_confirmed_suspected:this.state.diagnosis_confirmed_suspected,
      pre_verb_skill_observation  :this.state.pre_verb_skill_observation  ,
      receptive_vocabulary  :this.state.receptive_vocabulary  ,
      expressive_vocabulary :this.state.expressive_vocabulary ,
      pre_reading_skills :this.state.pre_reading_skills ,
      developmental_language :this.state.developmental_language ,
      advanced_language :this.state.advanced_language ,
      mother_tongue  :this.state.mother_tongue  ,
      other_lanugauge  :this.state.other_lanugauge  ,
      community_lanugauge :this.state.community_lanugauge ,
      client_assessed_tool :this.state.client_assessed_tool ,
      recepitive_tool_language:this.state.recepitive_tool_language,
      expressive_tool_language:this.state.expressive_tool_language,
      client_assessed_disorder_specific_tool :this.state.client_assessed_disorder_specific_tool ,
      disorder_suspected  :this.state.disorder_suspected  ,
      language_delay_suspected :this.state.language_delay_suspected ,
      language_delay_secondary_disorder  :this.state.language_delay_secondary_disorder  ,
      consq_language_delay_secondary_disorder  :this.state.consq_language_delay_secondary_disorder  ,
      Meta_linguistic_skills:''
    }).then(() => {
      alert("successfully Inserted patient details");
    }

    ).catch(function (error) {
      // handle error
      alert(error);
    })
  }

  render(props) {
    return (

      <div class="PatinetDetails1">
  
        <label data-tip data-for="language_assessment">Language assessment </label><br></br>
        <ReactTooltip id="language_assessment" place="top" effect="solid">
        language_assessment
      </ReactTooltip>
    
        <select name="language_assessment" value={this.state.language_assessment} id="APDtext"
          onChange={e => {
            this.setState(
              {
                language_assessment: e.target.value

              });
          }}
        >
          <option>Select Language assessment</option>
          <option value='child'>Child language</option>
          <option value='adult'>Adult langauge</option>
        </select><br></br>
        {
          (this.state.language_assessment === 'child') ?
            (<div >
              <div>
                <label data-tip data-for="area_assess">Choose areas to assess</label><br></br>
                <ReactTooltip id="area_assess" place="right" effect="solid">
                  Choose areas to assess<br></br>
                 <b> Pre verbal skills</b>:Receptive vocabulary (vocabulary refers to all  <br></br>
                                    the words in aperson's language repertoire) <br></br>
                                    refers to words that a person can comprehend <br></br>
                                    and respond to, even if the person cannot<br></br>
                                    produce those words <br></br>
                                    <br></br>
                  Receptive Vocabulary: <br></br>
                  Expressive vocabulary:<br></br>
                  Pre reading skills:<br></br>

                </ReactTooltip>
                <select name="area_assess" value={this.state.area_assess} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        area_assess: e.target.value

                      });
                  }}
                ><option>select Area</option>
                  <option>Pre verbal skills</option>
                  <option>Receptive Vocabulary </option>
                  <option>Expressive vocabulary</option>
                  <option>Pre reading skills</option>
                </select> <br></br>
                {(this.state.area_assess === 'Pre verbal skills') ?
                  (<div>
                    <label>Choose the skills that are age appropriate on observation</label><br></br>
                    <select name="pre_verb_skill_observation" value={this.state.pre_verb_skill_observation} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            pre_verb_skill_observation: e.target.value

                          });
                      }}
                    >
                      <option>Select Pre verb skill observation</option>
                      <option value='child'>Child language</option>
                      <option value='adult'>Adult langauge</option>
                    </select>


                  </div>) : (<div></div>)}{
                  (this.state.area_assess === 'Receptive Vocabulary') ?
                  (<div>Tick vocabulary from first vocabulary word list</div>):
                  (<div></div>)}
                  {
                  (this.state.area_assess === 'Expressive vocabulary') ?
                  (<div>Tick vocabulary from first vocabulary word list</div>):
                  (<div></div>)}
                  {

                  (this.state.area_assess === 'Pre reading skills') ?
                  (<div>Tick vocabulary from first vocabulary word list</div>):
                  (<div></div>)
                  
                  }
                <label data-tip data-for="developmental_language">Developmental language</label><br></br>
                <label data-tip data-for="area_assess">Language assessment </label><br></br>
                <ReactTooltip id="developmental_language" place="top" effect="solid">
                Developmental language <br></br>
                Morphological skills<br></br>
                Pragmatic skill<br></br>
                Semantic skills<br></br>
                Syntactic skills<br></br>

              </ReactTooltip>
                <select name="developmental_language" value={this.state.language_assessment} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        area_assess: e.target.value

                      });
                  }}
                >
                  <option>Morphological skills</option>
                  <option>Pragmatic skill </option>
                  <option>Semantic skills</option>
                  <option>Syntactic skills</option>
                </select> <br></br>
                <label>Advanced language</label><br></br>
                <label>Meta linguistic skills</label><br></br>
                <select name="meta_linguistic_skills" value={this.state.meta_linguistic_skills} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        meta_linguistic_skills: e.target.value

                      });
                  }}
                >
                  <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
                <label>Theory of mind</label><br></br>
                <select name="theory_of_mind" value={this.state.theory_of_mind} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        theory_of_mind: e.target.value

                      });
                  }}
                >
                  <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
                <label>Meta cognition</label><br></br>
                <label>Ambiguity</label><br></br>
                <select name="ambiguity" value={this.state.ambiguity} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        ambiguity: e.target.value

                      });
                  }}
                >
                  <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
                <label>b.Humour</label><br></br>
                <select name="humour" value={this.state.humour} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        humour: e.target.value

                      });
                  }}
                >
                  <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
	   <label>c.Sarcasm</label><br></br>
                <select name="sarcasm" value={this.state.sarcasm} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        sarcasm: e.target.value

                      });
                  }}
                >
                 <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
	     <label>Auditory memory</label><br></br>
                <select name="auditory_memory" value={this.state.auditory_memory} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        auditory_memory: e.target.value

                      });
                  }}
                >
                 <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
				
		<label>Auditory sequencing</label><br></br>
                <select name="auditory_sequencing" value={this.state.auditory_sequencing} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        auditory_sequencing: e.target.value

                      });
                  }}
                >
                  <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
			<label>Auditory Processing</label><br></br>
                <select name="auditory_processing" value={this.state.auditory_processing} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        auditory_processing: e.target.value

                      });
                  }}
                >
                 <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
				
		    <label>Visual processing</label><br></br>
                <select name="visual_processing" value={this.state.visual_processing} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        visual_processing: e.target.value

                      });
                  }}
                >
                 <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
			  <label>verbal reasoning</label><br></br>
                <select name="verbal_reasoning" value={this.state.verbal_reasoning} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        verbal_reasoning: e.target.value

                      });
                  }}
                >
                 <option>present/absent</option>
                  <option>present</option>
                  <option>absent</option>
                 
                </select>
                <br></br>
                <label>What are the language exposed:</label><br></br>
                <label>Mother tongue</label><br></br>
                <input name="mother_tongue" placeholder="Mother tongue" class="form-control" type="text" id="APDtext" value={this.state.mother_tongue}
                  onChange={e => {
                    this.setState(
                      {
                        mother_tongue: e.target.value

                      });
                  }}
                /><br></br>
                <label>Any other  lanugauge used in family</label><br></br>
                <input name="other_lanugauge" placeholder="Other tongue" class="form-control" type="text" id="APDtext" value={this.state.other_lanugauge}
                  onChange={e => {
                    this.setState(
                      {
                        other_lanugauge: e.target.value

                      });
                  }}
                /> <br></br>
                <label>Community language</label><br></br>
                <input name="community_lanugauge" placeholder="Community language" class="form-control" type="text" id="APDtext" value={this.state.community_lanugauge}
                  onChange={e => {
                    this.setState(
                      {
                        community_lanugauge: e.target.value

                      });
                  }}
                />
              </div>
              <div id="right">
                <label> Was the client assessed using a tool?</label>
                <select name="client_assessed_tool" value={this.state.client_assessed_tool} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        client_assessed_tool: e.target.value

                      });
                  }}
                >
                  <option>Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>

                </select>
                {(this.state.client_assessed_tool === 'Yes') ?
                  (<div>
                    <label>Tool used with options(Ex: REELS, LAT, 3DLAT, COMMDEALL, Linguistic Profile tool, others</label><br></br>
                    <label>Receptive language age:</label><br></br>
                    <input name="receptive_language_age" placeholder="Receptive language age" class="form-control" type="text" id="APDtext" value={this.state.receptive_language_age}/> <br></br>
                    <p>Click on the "Choose File" button to upload a Report:</p><br></br>
                    <input type="file" id="myFile" name="receptive_language"/> <br></br>
                    <input name="receptive_language_details" placeholder="Receptive language decsription" class="form-control" type="text" id="APDtext" value={this.state.receptive_language_details}/>
                   
             

                    <label>Tool used with options(Ex: REELS, LAT, 3DLAT, COMMDEALL, Linguistic Profile tool, others</label><br></br>
                    <label>Expressive language age:</label><br></br>
                
                    <input name="expressive_language_age" placeholder="Expressive language age" class="form-control" type="text" id="APDtext" value={this.state.expressive_language_age}/><br></br>
                    <p>Click on the "Choose File" button to upload a Report:</p><br></br>
                    <input type="file" id="myFile" name="receptive_language"/> <br></br>
                    <input name="expressive_language_details" placeholder="Expressive language decsription" class="form-control" type="text" id="APDtext" value={this.state.expressive_language_details}/>



                  </div>) :
                  (<div></div>)
                }
                <label> Was the client assessed using a disorder specific tool?</label>
                <select name="client_assessed_disorder_specific_tool" value={this.state.client_assessed_disorder_specific_tool} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        client_assessed_disorder_specific_tool: e.target.value

                      });
                  }}
                >
                  <option>Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>

                </select>
                {
                  (this.state.client_assessed_disorder_specific_tool === 'Yes') ?
                    (<div>

                      <label> What is the disorder suspected?</label>
                      <select name="disorder_suspected" value={this.state.disorder_suspected} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              disorder_suspected: e.target.value

                            });
                        }}
                      >
                        <option> What is the disorder suspected</option>
                        <option>Autism Spectrum Disorder</option>
                        <option>Attention Deficit Hyperactive Disorder</option>
                        <option>Expressive Language Disorder ( MRELD)</option>
                        <option>Expressive language Disorder</option>
                        <option>Syntactic Disorder</option>
                        <option>Expressive language Disorder</option>
                        <option> Pragmatic Disorder.</option>

                      </select>


                    </div>) :
                    (<div></div>)

                }
                <label>Is language delay suspected</label>
                <select name="language_delay_suspected" value={this.state.language_delay_suspected} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        language_delay_suspected: e.target.value

                      });
                  }}
                >
                  <option>Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>

                </select><br></br>

                <label>Is the language delay secondary to a disorder?</label> <br></br>
                <select name="language_delay_secondary_disorder" value={this.state.language_delay_secondary_disorder} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        language_delay_secondary_disorder: e.target.value

                      });
                  }}
                >
                  <option>Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>

                </select>
                {
                  (this.state.language_delay_secondary_disorder === 'Yes') ?
                    (<div>
                      <label>Consequent to:</label><br> </br>
                      <select name="consq_language_delay_secondary_disorder" value={this.state.consq_language_delay_secondary_disorder} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              consq_language_delay_secondary_disorder: e.target.value

                            });
                        }}
                      >
                        <option>what is language delay secondary to a disorder</option>
                        <option>Hearing loss</option>
                        <option>Intellectual Disability</option>
                        <option>Seizure disorder</option>
                        <option>Cleft Lip and Palate,</option>
                        <option>Cerebral Palsy</option>
                        <option> Autism Spectrum Disorder</option>
                        <option>Austistic Features</option>
                        <option>Attentions Deficit Hyperactive Disorder</option>
                        <option>Attention Deficit Disorder</option>
                        <option>Pervasive Development Disorder</option>
                        <option>Asperger syndrome</option>
                        <option>Klien Felter Syndrome</option>
                        <option>Down’s Syndrome</option>
                        <option>Syndrome</option>
                        <option>Pierre Robin Syndrome </option>
                      </select>


                    </div>) :
                    (<div></div>)
                }
                <label>Is the diagnosis confirmed or suspected?</label><br></br>
                <select name="diagnosis_confirmed_suspected" value={this.state.diagnosis_confirmed_suspected} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        diagnosis_confirmed_suspected: e.target.value

                      });
                  }}
                >
                  <option>Is the diagnosis confirmed or suspected?</option>
                  <option>Confirmed: Diagnosis</option>
                  <option>Suspected: Diagnostic formulation</option>
                  <option> Mixed Receptive Expressive Language Disorder</option>
                  <option>Expressive Language Disorder</option>
                  <option>Regressive Speech and Language</option>
                  <option>Consequent to above question</option>




                </select>

              </div>




            </div>) : (<div></div>)}
             { (this.state.language_assessment === 'adult') ?
              (<div>
                <label>Is there a significant medical/ neurological history?</label><br></br>
                <select name="significant_medical_history" value={this.state.significant_medical_history} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        significant_medical_history: e.target.value

                      });
                  }}
                >
                  <option>Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>

                </select><br></br>
                <label>Is there a change in pre morbid and post morbid language status?</label><br></br>
                <select name="morbid_change" value={this.state.morbid_chnage} id="APDtext"
                  onChange={e => {
                    this.setState(
                      {
                        morbid_change: e.target.value

                      });
                  }}
                >
                  <option>Yes/No</option>
                  <option>Yes</option>
                  <option>No</option>

                </select><br></br>
                {
                  (this.state.morbid_change === 'Yes') ?
                    (<div>
                      <label>What areas is there a change observed by caretaker?</label><br></br>
                      <label>memory:</label><br></br>
                      <label>a.short-term- retell a story</label><br></br>
                      <select name="short_term_retell_story" value={this.state.short_term_retell_story} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              short_term_retell_story: e.target.value

                            });
                        }}
                      >
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                        <label>b.long-term</label><br></br>
                      <select name="long_term" value={this.state.long_term} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              long_term: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
 
                      <label>c.working memory</label><br></br>
                      <select name="working_memory" value={this.state.working_memory} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              working_memory: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						<label>D.Retrospective memory- name a person</label><br></br>
                      <select name="retrospective_memory" value={this.state.retrospective_memory} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              retrospective_memory: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						<label>E.Prospective – appointments to be made</label><br></br>
                      <select name="retrospective_memory" value={this.state.retrospective_memory} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              retrospective_memory: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select> <br>
                        </br>
                        <label>attention </label><br></br>
					  <label>digit forward </label><br></br>
                      <select name="digit_forward" value={this.state.digit_forward} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              digit_forward: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                     
					  <label>driving scenes </label><br></br>
                      <select name="driving_scenes" value={this.state.driving_scenes} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              driving_scenes: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						 <label>driving scenes </label><br></br>
                      <select name="driving_scenes" value={this.state.driving_scenes} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              driving_scenes: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                
				        <label>divided attention </label><br></br>
                      <select name="divided_attention" value={this.state.divided_attention} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              divided_attention: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                        
						    <label>selective attention- letter cancellation test </label><br></br>
                      <select name="letter_cancellation_test" value={this.state.letter_cancellation_test} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              letter_cancellation_test: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                        
                        
                      <label>attention </label><br></br>
					  <label>decision making </label><br></br>
                      <select name="decision_making" value={this.state.decision_making} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              decision_making: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                      <label>speech  </label><br></br>
					  <label>a.Apraxia </label><br></br>
                      <select name="speech_apraxia" value={this.state.speech_apraxia} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              speech_apraxia: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						 <label>disarthria </label><br></br>
                      <select name="speech_disarthria" value={this.state.speech_disarthria} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              speech_disarthria: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                
				        <label>handedness </label><br></br>
                      <select name="handedness" value={this.state.handedness} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              handedness: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
                        
					 <label>swallowing (dysphagia) </label><br></br>
                      <select name="swallowing" value={this.state.swallowing} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              swallowing: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
					
					 <label>Quality of Life </label><br></br>
                      <select name="quality_of_life" value={this.state.quality_of_life} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              quality_of_life: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
						 <label>verbal performance-oral production, reading, anomia </label><br></br>
                      <select name="verbal_performance" value={this.state.verbal_performance} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              verbal_performance: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
						<label>non verbal performance -,writing </label><br></br>
                      <select name="non_verbal_performance" value={this.state.non_verbal_performance} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              non_verbal_performance: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>

                        <label data-tip data-for="auditory_processing">auditory processing </label><br></br>
	   <ReactTooltip id="auditory_processing" place="top" effect="solid">
        auditory processing
      </ReactTooltip>
                      <select name="auditory_processing" value={this.state.auditory_processing} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              auditory_processing: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>

                        <label data-tip data-for="language_comprehension"> language comprehension </label><br></br>
	   <ReactTooltip id="language_comprehension" place="top" effect="solid">
        language comprehension
      </ReactTooltip>
                      <select name="language_comprehension" value={this.state.language_comprehension} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              language_comprehension: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
			<label data-tip data-for="vocabulary"> vocabulary </label><br></br>
	   <ReactTooltip id="vocabulary" place="top" effect="solid">
        vocabulary
      </ReactTooltip>
                      <select name="vocabulary" value={this.state.vocabulary} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              vocabulary: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
		
		<label data-tip data-for="auditory_verbal_memory"> auditory verbal memory </label><br></br>
	   <ReactTooltip id="auditory_verbal_memory" place="top" effect="solid">
        auditory_verbal_memory
      </ReactTooltip>
	  
	  	<label data-tip data-for="digtit_span"> digtit span </label><br></br>
	   <ReactTooltip id="digtit_span" place="top" effect="solid">
        digtit span
      </ReactTooltip>
                      <select name="digtit_span" value={this.state.digtit_span} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              digtit_span: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
		<label data-tip data-for="letter_number_sequencing"> letter number sequencing </label><br></br>
	   <ReactTooltip id="letter_number_sequencing" place="top" effect="solid">
        letter number sequencing
      </ReactTooltip>
                      <select name="letter_number_sequencing" value={this.state.letter_number_sequencing} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              letter_number_sequencing: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
			<label data-tip data-for="visuo_spatial"> visuo-spatial </label><br></br>
	   <ReactTooltip id="visuo_spatial" place="top" effect="solid">
       visuo-spatial
      </ReactTooltip>
      <label data-tip data-for="object_assembly"> object assembly </label><br></br>
	   <ReactTooltip id="object_assembly" place="top" effect="solid">
        object assembly
      </ReactTooltip>
                      <select name="object_assembly" value={this.state.object_assembly} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              object_assembly: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
			<label data-tip data-for="block_design"> block design </label><br></br>
	   <ReactTooltip id="block_design" place="top" effect="solid">
        block_design
      </ReactTooltip>
                      <select name="block_design" value={this.state.block_design} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              block_design: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
		
		<label data-tip data-for="visual_discrimination"> visual discrimination </label><br></br>
	   <ReactTooltip id="visual_discrimination" place="top" effect="solid">
        visual discrimination
      </ReactTooltip>
	  
	  
                      <select name="visual_discrimination" value={this.state.visual_discrimination} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              visual_discrimination: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
		<label data-tip data-for="figure_drawing"> figure drawing </label><br></br>
	   <ReactTooltip id="figure_drawing" place="top" effect="solid">
        figure drawing
      </ReactTooltip>
                      <select name="figure_drawing" value={this.state.figure_drawing} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              figure_drawing: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
			<label data-tip data-for="picture_completion_task"> picture completion task </label><br></br>
	   <ReactTooltip id="picture_completion_task" place="top" effect="solid">
       picture completion task
      </ReactTooltip>
	  
	  <select name="picture_completion_task" value={this.state.picture_completion_task} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              picture_completion_task: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
						<label data-tip data-for="picture_arrangement"> picture arrangement </label><br></br>
	   <ReactTooltip id="picture_arrangement" place="top" effect="solid">
        picture arrangement
      </ReactTooltip>
                      <select name="picture_arrangement" value={this.state.picture_arrangement} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              picture_arrangement: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
			<label data-tip data-for="picture_absurdity"> picture absurdity </label><br></br>
	   <ReactTooltip id="picture_absurdity" place="top" effect="solid">
       picture absurdity
      </ReactTooltip>
	  
	  <select name="picture_absurdity" value={this.state.picture_absurdity} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              picture_absurdity: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>


                        <label data-tip data-for="executive_functions"> executive functions </label><br></br>
	   <ReactTooltip id="executive_functions" place="top" effect="solid">
        executive functions
      </ReactTooltip>
	  
	  <label data-tip data-for="similarities"> similarities </label><br></br>
	   <ReactTooltip id="similarities" place="top" effect="solid">
        similarities
      </ReactTooltip>
                      <select name="similarities" value={this.state.similarities} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              similarities: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
			<label data-tip data-for="reasoning"> reasoning </label><br></br>
	   <ReactTooltip id="reasoning" place="top" effect="solid">
        reasoning
      </ReactTooltip>
                      <select name="reasoning" value={this.state.reasoning} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              reasoning: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
		
		<label data-tip data-for="judgement"> judgement  </label><br></br>
	   <ReactTooltip id="judgement" place="top" effect="solid">
        judgement 
      </ReactTooltip>
	  
	  
                      <select name="judgement" value={this.state.judgement } id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              judgement : e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
		<label data-tip data-for="categories"> categories </label><br></br>
	   <ReactTooltip id="categories" place="top" effect="solid">
        categories
      </ReactTooltip>
                      <select name="categories" value={this.state.categories} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              categories: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
			<label data-tip data-for="trail_making"> trail making </label><br></br>
	   <ReactTooltip id="trail_making" place="top" effect="solid">
       trail making
      </ReactTooltip>
	  
	  <select name="trail_making" value={this.state.trail_making} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              trail_making: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
						
		<label data-tip data-for="verbal_fluency"> verbal fluency </label><br></br>
	   <ReactTooltip id="verbal_fluency" place="top" effect="solid">
        verbal fluency
      </ReactTooltip>
                      <select name="verbal_fluency" value={this.state.verbal_fluency} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              verbal_fluency: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>
						
			<label data-tip data-for="design_fluency"> design fluency </label><br></br>
	   <ReactTooltip id="design_fluency" place="top" effect="solid">
       design fluency
      </ReactTooltip>
	  
	  <select name="design_fluency" value={this.state.design_fluency} id="APDtext"
                        onChange={e => {
                          this.setState(
                            {
                              design_fluency: e.target.value

                            });
                        }}>
                        <option>change/No change:</option>
                        <option>chnage </option>
                        <option>No change </option>
                        </select><br></br>



                                          </div>) : (<div></div>)}
                <div>
                  <label>Suggestive diagnosis based on above choices</label><br></br>
                  <label>Adult neurogenic communication disorder- diagnostic terms?</label><br></br>
                  <select name="adult_neurogenic_communication_disorder" value={this.state.adult_neurogenic_communication_disorder} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          adult_neurogenic_communication_disorder: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>

                  <label>Dementia</label><br></br>
                  <select name="dementia" value={this.state.dementia} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          dementia: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>
                  <label>Right Hemisphere Damage</label><br></br>
                  <select name="right_hemisphere_damage" value={this.state.right_hemisphere_damage} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          right_hemisphere_damage: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>
                  <label>Alzheimer’s </label><br></br>
                  <select name="alzheimer" value={this.state.alzheimer} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          alzheimer: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>
                  <label>Parkinsons</label><br></br>
                  <select name="parkinsons" value={this.state.parkinsons} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          parkinsons: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>
                  <label>Dysphagia</label><br></br>
                  <select name="dysphagia" value={this.state.dysphagia} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          dysphagia: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>
                  <label>Apraxia</label><br></br>
                  <select name="apraxia" value={this.state.apraxia} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          apraxia: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>

                  <label>Dysarthria</label><br></br>
                  <select name="dysarthria" value={this.state.dysarthria} id="APDtext"
                    onChange={e => {
                      this.setState(
                        {
                          dysarthria: e.target.value

                        });
                    }}
                  >
                    <option>Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select><br></br>
                  <div id="right">
                    <label>Was the person assessed using a test material?</label> <br></br>
                    <select name="test_material" value={this.state.test_material} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            test_material: e.target.value

                          });
                      }}
                    >
                      <option>Yes/No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select><br></br>
                    {(this.state.test_material === 'Yes') ?
                      (<div>
                        <p>Click on the "Choose File" button to upload a file:</p>


                        <input type="file" id="myFile" name="test_meterial_file" /> <br></br>

                      </div>) :
                      (<div></div>)

                    }




                    <label> Is there a significant issue in speech (Apraxia, dysarthria)?</label><br></br>
                    <select name="significant_issue_speech" value={this.state.significant_issue_speech} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            significant_issue_speech: e.target.value

                          });
                      }}
                    >
                      <option>Yes/No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select><br></br>
                    {(this.state.significant_issue_speech === 'Yes') ?
                      (<div><label>go to dysarthria assessment</label></div>) :
                      (<div></div>)

                    }
                    <label> Was the diagnosis confirmed or suspected?</label> <br></br>
                    <select name="diagnosis_confirmed_suspected" value={this.state.diagnosis_confirmed_suspected} id="APDtext"
                      onChange={e => {
                        this.setState(
                          {
                            diagnosis_confirmed_suspected: e.target.value

                          });
                      }}
                    >
                      <option>Select</option>
                      <option>Confirmed: Diagnosis</option>
                      <option>Suspected: Diagnostic formulation</option>
                      <option>Diagnosis terms used</option>
                    </select><br></br>
                  </div>
                </div>
              </div>) : (<div></div>)
              
        }
        
         <button type="submit"  onClick={this.onClickListener}>Submit</button><br></br>  

         <div className="App">
      <label data-tip data-for="registerTip">
        Register
      </label>

      <ReactTooltip id="registerTip" place="top" effect="solid">
        Tooltip for the register button
      </ReactTooltip>
    </div>
      </div>








    )
  }
}
export default language_disorder;
