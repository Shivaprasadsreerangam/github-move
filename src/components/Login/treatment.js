import { Component } from "react";
import Axios from "axios";


class treatment extends Component {
    constructor(props) {
    super(props)
    this.state={
        treatmentDetails:[],
        patient_id:'',
        disorder_id:'',
        treatmentSteps:[],
    }
  
    Axios.post("http://192.168.0.18:3002/treatment",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
         }).then((response)=>{
             this.setState({treatmentDetails:response.data})
         }
         ).catch(function (error) {
            // handle error
            alert(error);
          })

         // alert(this.props.disorder_id,this.props.patient_id);
   
    }

    onClickListener=() =>{
     
       
        this.setState(
            {
              patient_id:this.props.patient_id,
              disorder:this.props.disorder_id

            } );
            //alert(this.props.patient_id,this.props.disorder_id)
        Axios.post("http://192.168.0.18:3002/treatmentSteps",{disorder_id:this.props.disorder_id,patient_id:this.props.patient_id
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
        return(<div className='PatientDetails1'><h1>Treatment Page {this.props.disorder_id}</h1>
              

              
              <table align="left" className="left"  > 

              {this.state.treatmentDetails.map(treatment =>
                  <tr>
                     
                     <td>{treatment.disorder}</td>
                     <td>{treatment.trt_seq_number}</td>
                     <td> <button type="submit" id ='submit3' onClick={this.onClickListener}>
                     {treatment.treatment_name} </button> </td>
                     <td>{treatment.num_sessions}</td>
                     <td>{treatment.completed_date}</td>
                     <td>{treatment.disorder_id}</td>
                  
                </tr>)}
              
               </table> 

        
        </div>
        
        
        )
    }
    else
    {return(<div className='PatientDetails1'><h1>Treatment Page {this.props.disorder_id}</h1>
              

              
    <table align="left" className="left"  > 

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
    
     </table> 
    
   
      
    
    






</div>


)
    }
    }
}
export default treatment;