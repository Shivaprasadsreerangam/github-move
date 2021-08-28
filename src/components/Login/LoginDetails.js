import { Component } from "react";
import Axios from "axios";
class LoginDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            login_details:[],

        }
     
            
        Axios.post("http://192.168.0.18:3002/fetchLoginDetails",{user_id:global.id,
    }).then((response)=>{
        this.setState({login_details:response.data})
    } ).catch(function (error) {
      // handle error
      alert(error);
    })
    }
    render()
    {
        return(<div>
        <div className="PatientDetails">
              <h2 className="PD" >login  details</h2>

         
              <div ><table align="center" className="center"> 
             
                     <th>User Id</th>
                     <th>Email Id</th>
                     <th>Hospital</th>
                     <th>Latest Login Time</th>
                     <th>Number of time Logged in</th>

                     {this.state.login_details.map(login_data =>
                  <tr>
                     
                     <td>{login_data.login_id}</td>
                     <td>{login_data.email_id}</td>
                     <td>{login_data.hospital_id}</td>
                     <td>{login_data.latest_login_time}</td>
                     <td>{login_data.num}</td>
                
                   </tr>)}
                     </table>
                       </div>
              </div>


        </div>)
    }

}
export default LoginDetails;