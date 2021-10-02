import { Component } from "react";
import Axios from "axios";
import SpinWheelGame from "./spinWheelGame";
import MemoryGame from "./MemoryGame";



class treatment extends Component {
    constructor(props) {
    super(props)
    this.state={
        treatmentDetails:[],
        patient_id:'',
        disorder_id:'',
        treatmentSteps:[],
        button_value:'',
    }
  
    Axios.post("https://spiel123.herokuapp.com/treatment",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
         }).then((response)=>{
             this.setState({treatmentDetails:response.data})
         }
         ).catch(function (error) {
            // handle error
            alert(error);
          })

         // alert(this.props.disorder_id,this.props.patient_id);
   
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
        
       
        if (!this.state.disorder) {
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
        {/* <memoryCardGame/> */}
         <MemoryGame></MemoryGame> 
        </div>); 


    }
    }
}
export default treatment;
