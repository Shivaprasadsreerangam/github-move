import { Component } from "react";
import Axios from "axios";
import SpinWheelGame from "./spinWheelGame";
//import MemoryGame from "./MemoryGame";
//import MemoryCardGame from "./memoryCardGame";
//import { PatientData } from "./PatientData";




class treatment extends Component {
    constructor(props) {
    super(props)
    this.state={
        treatmentDetails:[],
        patient_id:'',
        disorder_id:'',
        treatmentSteps:[],
        button_value:'',
        longtermChildLanguageTherapy:[],
        language_goal:'N',
        multi_domain_goal:'N',
        language_first_page:'Y',
        language_second_page:'N',
        language_third_page:'N',
        language_fourth_page:'N',
        developmental_program:'N',  
        expressive_language:'N',
        play_semantics:'N',
        Pragmatic_interaction_goals:'N',
        multi_playSemantics_longTerm:[],
        multi_pragmaticInteraction_longTerm:[],
        language_expressiveLanguage_longTerm:[],
        language_developmentalProgram_longTerm:[],
        patient_Dob:[],
        short_term_goal:'',
        short_term_goals:[],
        long_term_goal:'',
        second_page_visited:'N',
        third_page_visited:'N',
        fourth_page_visited:'N',
        patient_update_age:'',
        patient_age:''
        
    }
  
    Axios.post("https://spiel123.herokuapp.com/treatment",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
         }).then((response)=>{
             this.setState({treatmentDetails:response.data})
         }
         ).catch(function (error) {
            // handle error
            alert(error);
          })

          Axios.post("https://spiel123.herokuapp.com/playSemanticsLongTerm",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({multi_playSemantics_longTerm:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 

         Axios.post("https://spiel123.herokuapp.com/multiPragmaticInteractionLongTerm",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({multi_pragmaticInteraction_longTerm:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 

         Axios.post("https://spiel123.herokuapp.com/languageExpressiveLanguageLongTerm",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({language_expressiveLanguage_longTerm:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 

         Axios.post("https://spiel123.herokuapp.com/languageDevelopmentalProgramLongTerm",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({language_developmentalProgram_longTerm:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 

         Axios.post("https://spiel123.herokuapp.com/fetchPatientDob",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({patient_Dob:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 
       
       
       

         // alert(this.props.disorder_id,this.props.patient_id);
   
    }
    shortTermTherapy=(e)=>{
        
        this.setState(
            {
               long_term_goal:e.target.value,
               language_third_page:'N',
               language_fourth_page:'Y',
               fourth_page_visited:'Y'
              

            }
           
        )
      
        Axios.post("https://spiel123.herokuapp.com/fetchShortTermGoals",{long_term_goal:e.target.value,patient_id:this.props.patient_id
        }).then((response)=>{
            this.setState({short_term_goals:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 
       

    }
    goToFourthPage=(e)=>
    {
        this.setState(
            {
                language_fourth_page:'Y',
                language_third_page:'N'
                
            }
           
        )
    }
    goToThirdPage=(e)=>
    {
        this.setState(
            {
                language_third_page:'Y',
                language_second_page:'N'
                
            }
           
        )
    }
    backToFirstPage=(e)=>
    {
        this.setState(
            {
                language_second_page:'N',
                language_first_page:'Y'
            }
            
        )
    }

    backToSecondPage=(e)=>
    {
        this.setState(
            {
                language_second_page:'Y',
                language_third_page:'N'
            }
            
        )
    }
    backToThirdPage=(e)=>
    {
        this.setState(
            {
                language_fourth_page:'N',
                language_third_page:'Y'

            }
            
        )
    }
    longTermGoalsAgeWise=(e)=>{
        e.preventDefault();
        
        this.setState({
            
            language_developmentalProgram_longTerm:[],
            language_expressiveLanguage_longTerm:[],
            multi_playSemantics_longTerm:[],
            multi_pragmaticInteraction_longTerm:[],
           
        })
        if(this.state.patient_update_age)
        {
        
            Axios.post("https://spiel123.herokuapp.com/languageDevelopmentalProgramLongTermAgeWise",{patient_update_age:this.state.patient_update_age
        }).then((response)=>{
            this.setState({language_developmentalProgram_longTerm:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 
        
        
     Axios.post("https://spiel123.herokuapp.com/languageExpressiveLanguageLongTermAgeWise",{patient_update_age:this.state.patient_update_age
    }).then((response)=>{
        this.setState({language_expressiveLanguage_longTerm:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     }) 
  
     Axios.post("https://spiel123.herokuapp.com/multiPragmaticInteractionLongTermAgeWise",{patient_update_age:this.state.patient_update_age
    }).then((response)=>{
        this.setState({multi_pragmaticInteraction_longTerm:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     }) 
 
     Axios.post("https://spiel123.herokuapp.com/multiplaySemanticsLongTermAgeWise",{patient_update_age:this.state.patient_update_age
    }).then((response)=>{
        this.setState({multi_playSemantics_longTerm:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     }) 
    

        }
        else{

            alert(this.state.patient_Dob[0].age)
            Axios.post("https://spiel123.herokuapp.com/languageDevelopmentalProgramLongTermAgeWise",{patient_update_age:this.state.patient_Dob[0].age
        }).then((response)=>{
            this.setState({language_developmentalProgram_longTerm:response.data})
        }
        ).catch(function (error) {
           // handle error
           alert(error);
         }) 
        

     Axios.post("https://spiel123.herokuapp.com/languageExpressiveLanguageLongTermAgeWise",{patient_update_age:this.state.patient_Dob[0].age
    }).then((response)=>{
        this.setState({language_expressiveLanguage_longTerm:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     }) 

     Axios.post("https://spiel123.herokuapp.com/multiPragmaticInteractionLongTermAgeWise",{patient_update_age:this.state.patient_Dob[0].age
    }).then((response)=>{
        this.setState({multi_pragmaticInteraction_longTerm:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     }) 

     Axios.post("https://spiel123.herokuapp.com/multiplaySemanticsLongTermAgeWise",{patient_update_age:this.state.patient_Dob[0].age
    }).then((response)=>{
        this.setState({multi_playSemantics_longTerm:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     }) 
        }

    }
    goBack = (e) => {
  
        this.props.updateResults('');
    
      }

    onClickListener=(e) =>{
     
       
        this.setState(
            {
              patient_id:this.props.patient_id,
              disorder:this.props.disorder_id,
              button_value:e.target.value,
              

            } );
            //alert(this.props.patient_id,this.props.disorder_id)
        Axios.post("https://spiel123.herokuapp.com/treatmentSteps",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
    }).then((response)=>{
        this.setState({treatmentSteps:response.data})
    }
    ).catch(function (error) {
       // handle error
       alert(error);
     })

        
       
        }
    render()
    {
        //alert("Language disorder");
        
    
        if(this.props.disorder_id===3)
        {return(
            <div className='PatientDetails1'><h1>Language Disorder  Therapy</h1>

            {
                ( this.state.language_fourth_page==='Y')?(
                    <div>
                      
                        <br></br>
                        <button type="submit" id ='submit3' class="previous" onClick={this.backToThirdPage}>&laquo; Previous</button>
                      
                         <br></br>
                   {this.state.patient_Dob.map(PatientData =>
                     <h4>Patient age is {PatientData.age}  months as per birth day {PatientData.patient_dob.slice(0,10)}</h4>
                    )}
                    <br></br>
                             <table>
                        <tr>
                            <td><b>Goal For</b></td>
                            <td><b>Long Term Goal</b></td>
                            <td><b>short Term Goal</b></td>
                            <td><b>Suggested start age</b></td>
                            <td><b>Suggestted end age</b></td>
                        </tr>
                        {this.state.short_term_goals.map(goal =>
                        <tr>
                        
                        <td>{goal.goal_for}</td>
                        <td>{goal.long_term_goal}</td>
                        
                        <td width="100"> <button type="submit" id ='submit3' value={goal.short_term_goal} >
                        {goal.short_term_goal} </button> </td>
                        <td>{goal.start_age}</td>
                        <td>{goal.end_age}</td>
                        
                    </tr>
                    )}</table>
                    </div>
                ):(<div></div>)
            }
           {
               ( this.state.language_third_page==='Y')?
               (<div> 
                 
                   <br></br>
                   <button type="submit" id ='submit3' class="previous" onClick={this.backToSecondPage}>&laquo; Previous</button>
                   {(this.state.fourth_page_visited==='Y')?
                  (<button type="submit" id ='submit3' class="next" onClick={this.goToFourthPage}>Next &raquo;</button>):(<div></div>)}
                    <br></br>
                   {this.state.patient_Dob.map(PatientData =>
                     <h4>Patient age is {PatientData.age}  months as per birth day {PatientData.patient_dob.slice(0,10)}</h4>
                    )}
                    <br></br>
                    <input type="text" placeholder="Please enter the Patient age" value={this.state.patient_update_age} onChange={e=>{
                                this.setState(
                                    {
                                        patient_update_age:e.target.value

                                    } );
                                }} 
                           ></input>  <button class="btn1 go"  onClick={this.longTermGoalsAgeWise} >GO</button><br></br>
                   
                {  

                    (this.state.developmental_program==='Y')?(<div>
                        <table>
                        <tr>
                            <td><b>Goal For</b></td>
                            <td><b>Long Term Goal</b></td>
                            <td><b>Suggested start age</b></td>
                            <td><b>Suggestted end age</b></td>
                        </tr>
                        {this.state.language_developmentalProgram_longTerm.map(treatment =>
                        <tr>
                        
                        <td>{treatment.goal_for}</td>
                        
                        <td width="100"> <button type="submit" id ='submit3' value={treatment.long_term_goal} onClick={this.shortTermTherapy}>
                        {treatment.long_term_goal} </button> </td>
                        <td>{treatment.start_age}</td>
                        <td>{treatment.end_age}</td>
                        
                    </tr>
                    )}</table></div>):(<div></div>)



                } 
                {/* end of language developmental screen  */}
               
                {
                    (this.state.expressive_language==='Y')?(<div>
                        <table>
                        <tr>
                            <td><b>Goal For</b></td>
                            <td>L<b>ong Term Goal</b></td>
                            <td><b>Suggested start age</b></td>
                            <td><b>Suggestted end age</b></td>
                        </tr>
                        {this.state.language_expressiveLanguage_longTerm.map(treatment =>
                        <tr>
                        
                        <td>{treatment.goal_for}</td>
                        
                        <td width="100"> <button type="submit" id ='submit3' value={treatment.long_term_goal} onClick={this.shortTermTherapy}>
                        {treatment.long_term_goal} </button> </td>
                        <td>{treatment.start_age}</td>
                        <td>{treatment.end_age}</td>
                        
                    </tr>
                    )}</table></div>):(<div></div>)



                } 
                {/* end of language express Page    */}
                {
                    (this.state.Pragmatic_interaction_goals==='Y')?(<div>
                        <table>
                        <tr>
                            <td><b>Goal For</b></td>
                            <td>L<b>ong Term Goal</b></td>
                            <td><b>Suggested start age</b></td>
                            <td><b>Suggestted end age</b></td>
                        </tr>
                        {this.state.multi_pragmaticInteraction_longTerm.map(treatment =>
                        <tr>
                        
                        <td>{treatment.goal_for}</td>
                        
                        <td width="100"> <button type="submit" id ='submit3' value={treatment.long_term_goal} onClick={this.shortTermTherapy}>
                        {treatment.long_term_goal} </button> </td>
                        <td>{treatment.start_age}</td>
                        <td>{treatment.end_age}</td>
                        
                    </tr>
                    )}</table></div>):(<div></div>)



                } 
                {/* end of Pragmatic_interaction_goals    */}

                {(this.state.play_semantics==='Y')?(<div>
                <table>
                <tr>
                    <td><b>Goal For</b></td>
                    <td>L<b>ong Term Goal</b></td>
                    <td><b>Suggested start age</b></td>
                    <td><b>Suggestted end age</b></td>
                </tr>
                {this.state.multi_playSemantics_longTerm.map(treatment =>
                <tr>
                
                <td>{treatment.goal_for}</td>
                
                <td width="100"> <button type="submit" id ='submit3' value={treatment.long_term_goal} onClick={this.shortTermTherapy}>
                {treatment.long_term_goal} </button> </td>
                <td>{treatment.start_age}</td>
                <td>{treatment.end_age}</td>
                
            </tr>
            )}</table></div>):(<div></div>)
        }
        {/* end of multi play semantics page */}

               </div>):(<div></div>)
           } 
           {/* end of third page(long term page) */}

            {(this.state.language_goal==='Y' && this.state.language_second_page==='Y')?
            (<div>
                <button type="submit" id='submit3' class="previous" onClick={this.backToFirstPage}>&laquo; Previous</button>
                 {(this.state.third_page_visited==='Y')?
                  (<button type="submit" id="submit3" class="next" onClick={this.goToThirdPage}>Next &raquo;</button>):(<div></div>)}
                  <br></br>
                 <table align="left" className="left"  > 
            <tr>
            <button type="submit"    onClick={e => {
                    this.setState(
                      {
                        expressive_language: 'Y',
                        developmental_program: 'N',
                        play_semantics: 'N',
                        Pragmatic_interaction_goals: 'N',
                        language_third_page:'Y',
                        language_second_page:'N',
                        third_page_visited:'Y',
                        fourth_page_visited:'N'

                      });
                  }}>
                expressive language </button>  
            </tr>
            <tr>
                <button type="submit"   onClick={e => {
                    this.setState(
                      {
                        developmental_program: 'Y',
                        play_semantics: 'N',
                        Pragmatic_interaction_goals: 'N',
                        language_third_page:'Y',
                        language_second_page:'N',
                        third_page_visited:'Y',
                        fourth_page_visited:'N',

                      });
                  }}>
                developmental program </button>              
                 
                
            </tr>
            </table>

            </div>):(<div> </div>)}
            {
           
            (this.state.multi_domain_goal==='Y' && this.state.language_second_page==='Y')?
            (<div>
                <button type="submit" id='submit3' class="previous" onClick={this.backToFirstPage}>&laquo; Previous</button>
                 {(this.state.third_page_visited==='Y')?
                  (<button type="submit" id="submit3" class="next" onClick={this.goToThirdPage}>Next &raquo;</button>):(<div></div>)}
                  <br></br>
                
                 <table align="left" className="left"  > 
            <tr>
            <button type="submit"   onClick={e => {
                    this.setState(
                      {
                        play_semantics: 'Y',
                        Pragmatic_interaction_goals: 'N',
                        developmental_program: 'N',
                        expressive_language: 'N',
                        language_third_page:'Y',
                        language_second_page:'N',
                        third_page_visited:'Y',
                        fourth_page_visited:'N'

                      });
                  }}>
                 Play, semantics  </button>  
            </tr>
            <tr>
                <button type="submit"  onClick={e => {
                    this.setState(
                      {
                        Pragmatic_interaction_goals: 'Y',
                        play_semantics: 'N',
                        developmental_program: 'N',
                        expressive_language: 'N',
                        language_third_page:'Y',
                        language_second_page:'N',
                        third_page_visited:'Y',
                        fourth_page_visited:'N'

                      });
                  }}>
                Pragmatic interaction goals </button>              
                 
                
            </tr>
            </table>

            </div>):
            (<div></div>)
            
            
            }
          { (this.state.language_first_page==='Y')?
           ( <div>
               <br></br>
               <button type="submit" id ='submit3' class="previous" onClick={this.goBack}>&laquo; Previous</button>
               <br></br>
               <table align="left" className="left" width="20px"  > 
            <tr >
                <button type="submit"    onClick={e => {
                    this.setState(
                      {
                        language_goal: 'Y',
                        language_first_page:'N',
                        language_second_page:'Y',
                        second_page_visited:'Y',
                        multi_domain_goal: 'N',
                        expressive_language: 'N',
                        third_page_visited:'N',
                        fourth_page_visited:'N'

                      });
                  }}>
                Language Goals </button>  
            </tr>
            <tr>
                <button type="submit"   onClick={e => {
                    this.setState(
                      {
                        multi_domain_goal: 'Y',
                        language_first_page:'N',
                        language_second_page:'Y',
                        second_page_visited:'Y',
                        language_goal: 'N',
                        developmental_program: 'N',
                        third_page_visited:'N',
                        fourth_page_visited:'N'

                      });
                  }}>
                Multi domain goals </button>             
                 
                
            </tr>
            </table>
            </div>)
            :(<div></div>)
          }

{/* {this.state.longtermChildLanguageTherapy.map(treatment =>
    <tr>
       
       <td>{treatment.goal_for}</td>
      
       <td width="100"> <button type="submit" id ='submit3' value={treatment.goal_level} onClick={this.onClickListener}>
       {treatment.goal_level} </button> </td>
       <td>{treatment.goal_type}</td>
       <td>{treatment.start_age}</td>
       <td>{treatment.end_age}</td>
    
  </tr>)} */}

  
            </div>)
          
        }
       
        else if (!this.state.disorder) {
        return(<div className='PatientDetails1'><h1>Treatment Page </h1>
              
              
              
              <table align="left" className="left"  > 

              {this.state.treatmentDetails.map(treatment =>
                  <tr>
                     
                     <td>{treatment.disorder}</td>
                     <td>{treatment.trt_seq_number}</td>
                     <td> <button type="submit" id ='submit3' value={treatment.treatment_name} onClick={this.onClickListener}>
                     {treatment.treatment_name} </button> </td>
                     <td>{treatment.num_sessions}</td>
                     <td>{treatment.completed_date}</td>
                     <td>{treatment.disorder_id}</td>
                  
                </tr>)}
              
               </table>  

        
        </div>
        
        
        )
    }
    else if(this.state.button_value==='Spin Wheel Game')
    {return(<div className='PatientDetails1'>
              
              <SpinWheelGame></SpinWheelGame>
              
    {/* <table align="left" className="left"  > 

    {this.state.treatmentSteps.map(treatment =>
        <tr>
           
           <td>{treatment.disorder}</td>
           <td>{treatment.seq_id}</td>
           <td><a href= {treatment.link} target="_blank">
           {treatment.link_name} </a> </td>
           <td>{treatment.num_sessions}</td>
           <td>{treatment.completed_date}</td>
           <td>{treatment.disorder_id}</td>
        
      </tr>)}
    
     </table>  */}
    

</div>


)
    }
    else if(this.state.button_value==='Memory Game'){
        return(<div className='PatientDetails1'>
        {/* <PlayGround></PlayGround> */}
         {/* <MemoryGame></MemoryGame>  */}
        </div>); 


    }
    }
}
export default treatment;
