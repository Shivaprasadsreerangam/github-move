import { Component} from "react";
import Axios from "axios";
class account_details extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            account_details:[],
            userDetails:[],
        }
     
        Axios.post("http://192.168.0.18:3002/accountdetails",{user_id:global.id,
    }).then((response)=>{
        this.setState({account_details:response.data})
    } ).catch(function (error) {
      // handle error
      alert(error);
    })
    Axios.post("http://192.168.0.18:3002/userdetails",{hospital_id:global.hospital_id,
}).then((response)=>{
    this.setState({userDetails:response.data})
} ).catch(function (error) {
  // handle error
  alert(error);
})


    }

    render(){
        return(<div>
               <div className="PatientDetails">
              <h2 className="PD" >Account details</h2>
               {/* {this.state.PatientDetails.map(PatientData => <h2>{PatientData.patient_fname}</h2>)} */}
               
               
                   <div ><table align="center" className="center"> 
                   {this.state.account_details.map(accountdetails =>
                   <div>
                    <tr><td> Hospital Name  </td> <td> {accountdetails.hospital_name } </td></tr>
                    <tr><td> First Name  </td> <td> {accountdetails.first_name}  </td></tr>
                    <tr><td> Second Nmae  </td> <td> {accountdetails.second_name } </td></tr>
                    <tr><td> Last Name  </td> <td> {accountdetails.last_name } </td></tr>
                    <tr><td> expiry Date  </td> <td> {accountdetails.user_expiry_date}  </td></tr>
                    <tr><td> contact_num  </td> <td> {accountdetails.contact_num}  </td></tr>
                    <tr><td> total connections  </td> <td> {accountdetails.nusers}  </td></tr>
                    </div>

                    )}

                   </table>
                   </div>
                    <br></br>
                    <h2>User Account details</h2>
                   <div ><table align="center" className="center"> 
                   <tr>
                        <td> First Name  </td>
                        <td> Emial ID/ userID  </td>
                        <td> Contact Num  </td>
                   </tr> 
                   {this.state.userDetails.map(usrdetails =>
             
                 
                    <tr>
                         <td> {usrdetails.first_name}  </td>
                         <td> {usrdetails.name } </td>
                         <td> {usrdetails.contact_num } </td>
                         <td> <button type="submit" id ='submit3'>Show</button> </td>
                         <td> <button type="submit" id ='submit3'>edit</button>  </td>
                         <td> <button type="submit" id ='submit3'>delete</button> </td>
                    </tr>
                   

                    )}

                   </table>
                   </div>

                   </div>


        </div>)
    }
}
export default account_details;  