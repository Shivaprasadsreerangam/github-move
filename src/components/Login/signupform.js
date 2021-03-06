import React, { Component } from 'react';
// import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col } from 'react-bootstrap';
import "./signup.css";
import Axios from "axios";
import Multiselect from 'multiselect-react-dropdown';
//import Multiselect from 'react-select';
//import logo from './logo1.png';
class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uName: '',
      mName: '',
      lName: '',
      hName: '',
      duration: '',
      duration1: '',
      nusers: 0,
      //disorder:[],
      hName1: '',
      hosiptal_details: [],
      email_details: [],
      disorderDetails: [],
      Emaild: '',
      Phno: '',
      validPhoneNumber: '',
      payment_option: '',
      exist_hospital: '',
      exist_emailID: '',
      hospital_count: 0,
      email_count: 0,
      emptyEmailId: '',
      emptyHospital: '',
      emptyUname: '',
      emptyLname: '',
      emptyDuration: '',
      emptyPhoneNumber: '',
      disorder: '',
      emptyDisorder: ''
    }



    Axios.post("https://spiel123.herokuapp.com/disorderdetails", {
      hospital_id: global.hospital_id,
    }).then((response) => {
      this.setState({ disorderDetails: response.data })
    }).catch(function (error) {
      // handle error
      alert(error);
    })
  }
  validPhoneNumber = (e) => {
    var phoneno = /^\d{10}$/;
    this.setState({ Phno: e.target.value })
    if (e.target.value.match(phoneno)) {
      this.setState({ validPhoneNumber: "" })
    }
    else {
      this.setState({ validPhoneNumber: "Invalid Phone number" })

    }
    this.setState({ Phno: e.target.value, emptyPhoneNumber: '' })



  }

  checkHospital = (e) => {
    this.setState({ hName: e.target.value })
    this.state = { hName: e.target.value }

    this.setState({ emptyHospital: "" })
    this.state = { emptyHospital: "" }


    Axios.post("https://spiel123.herokuapp.com/CheckHospital", {
      hospital_name: this.state.hName,
    }).then((response) => {
      this.setState({ hosiptal_details: response.data })


      if (this.state.hosiptal_details[0].count_1 > 0) {

        this.setState({ exist_hospital: "Hospital already exist", hospital_count: 1 })
        this.state = { exist_hospital: "Hospital already exist", hospital_count: 1 }
      }
      else {
        this.setState({ exist_hospital: "", hospital_count: 0 })
        this.state = { exist_hospital: "", hospital_count: 0 }

      }

      this.state = { hName: e.target.value }
      this.setState({ hName: e.target.value })
    }).catch(function (error) {
      // handle error
      alert(error);
    })
  }
  checkEmailID = (e) => {
    this.state = { Emaild: e.target.value }
    this.setState({ Emaild: e.target.value })
    this.setState({ emptyEmailId: "" })

    Axios.post("https://spiel123.herokuapp.com/CheckEmaild", {
      Emaild: this.state.Emaild,
    }).then((response) => {
      this.setState({ email_details: response.data })

      if (this.state.email_details[0].count_1 > 0) {
        this.setState({ exist_emailID: "Email already exist", email_count: 1 })
        this.state = { exist_emailID: "Email already exist", email_count: 1 }
      }
      else {
        this.setState({ exist_emailID: "", email_count: 0 })
        this.state = { exist_emailID: "", email_count: 0 }

      }

      this.state = { Emaild: e.target.value }
    }).catch(function (error) {
      // handle error
      alert(error);
    })


  }
  onClickListener = () => {
    if (this.state.Emaild) {
      this.setState({ emptyEmailId: "" })

    }
    if (this.state.hName) {
      this.setState({ emptyHospital: "" })
    }
    if (this.state.uName) {

      this.setState({ emptyUname: "" })
    }
    if (this.state.lName) {
      this.setState({ emptyLname: "" })
    }
    if (this.state.duration) {
      this.setState({ emptyDuration: "" })
    }
    else if (this.state.disorder) {
      this.setState({ emptyDisorder: "" })
    }



    if (!this.state.Emaild) {

      this.state = { emptyEmailId: "email Id should not be empty" }
      this.setState({ emptyEmailId: "Email Id should not be empty" })

    }
    else if ((!this.state.hName) && (global.role === 'spiel')) {
      this.state = { emptyHospital: "Hospital Name  should not be empty" }
      this.setState({ emptyHospital: "Hospital Name  should not be empty" })

    }
    else if (!this.state.uName) {

      this.setState({ emptyUname: "User name should not be empty" })
    }
    else if (!this.state.lName) {
      this.setState({ emptyLname: "Last name should not be empty" })
    }
    else if (!this.state.duration) {
      this.setState({ emptyDuration: "Please select duration" })
    }
    // else if(!this.state.disorder)
    // {
    //   this.setState({emptyDisorder:"Please select disorder option"})
    // }
    else if (!this.state.Phno) {
      this.setState({ emptyPhoneNumber: "Phone number should not be empty" })
    }

    else if (this.state.hospital_count > 0) {
      alert("Hospital already exist, so cann't create new user/account on exist hospital");

    }
    else if (this.state.email_count > 0) {
      alert("Email Id  is already exist, Please provide another email ID");
    }
    else {
      var pass = '';
      var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      var i = 0;

      for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
          * str.length + 1);

        pass += str.charAt(char)
      }



      Axios.post("https://spiel123.herokuapp.com/createAccount", {
        uName: this.state.uName, mName: this.state.mName, lName: this.state.lName, hName: this.state.hName, duration: this.state.duration, duration1: this.state.duration1, disorder: this.state.disorder,
        Emaild: this.state.Emaild, Phno: this.state.Phno, hospital_id: global.hospital_id, nusers: this.state.nusers, pwd: pass
      }).then((response) => {
        this.setState({ doctordetails: response.data })
      }).catch(function (error) {
        // handle error
        alert(error);
      })
      if (!global.hospital_id) {
        //alert("Payment page in progress");
        alert("Acount has been created and Default password sent to your email ID")
        //alert("defualt password page has been sent registered Email (it is in progress)");

      }
      else {
        alert("Acount has been created")
      }
    }


  }
  selectedValue = (e) => {
    alert(e.target.value);
    this.state(
      {
        disorder: e.target.value
      }
    )

  }
  render() {
    return (<div>
      <div class="PatinetDetails">
        <br></br>
        <h2 className="PD" >Create New Account/User</h2>
      </div>
      <div class="PatinetDetails1">
        <input name="Emaild" placeholder="Enter EmailID" class="form-control" type="text" id="APDtext" onChange={this.checkEmailID}
        />  <br></br>
        <font COLOR="#ff0000">
          <p>{this.state.exist_emailID}</p> </font>
        <font COLOR="#ff0000">
          <p>{this.state.emptyEmailId}</p> </font>

        <input name="fName" placeholder="Enter User" class="form-control" type="text" id="APDtext" required="true"
          onChange={e => {
            this.setState(
              {
                uName: e.target.value,


              });
          }}

        /><br></br>
        <font COLOR="#ff0000">
          <p>{this.state.emptyUname}</p> </font>
        <input name="mName" placeholder="Enter Middle name" class="form-control" type="text" id="APDtext"
          onChange={e => {
            this.setState(
              {
                mName: e.target.value,


              });
          }}
        /><br></br>

        <input name="lName" placeholder="Last Name" class="form-control" type="text" id="APDtext"
          onChange={e => {
            this.setState(
              {
                lName: e.target.value,


              });
          }}
        /> <br></br>
        <font COLOR="#ff0000">
          <p>{this.state.emptyLname}</p> </font>
        {(global.role === 'spiel') ?
          (<div> <input name="hName" placeholder="Enter Hosiptal Name" class="form-control" type="text" id="APDtext"
            onChange={this.checkHospital}

          /> <br></br>
            <font COLOR="#ff0000">
              <p>{this.state.exist_hospital}</p> </font>
            <font COLOR="#ff0000">
              <p>{this.state.emptyHospital}</p> </font>

            <select name="duration" class="form-control" type="text" id="APDtext" onChange={e => {
              this.setState(
                {
                  duration: e.target.value,


                });
            }}>
              <option>Select Duration</option>
              <option>Years</option>
              <option>month</option>
              <option>days</option>
              <option>unlimited</option>
            </select> <br></br>
            <font COLOR="#ff0000">
              <p>{this.state.emptyDuration}</p> </font>
            {(this.state.duration !== 'unlimited') ?
              (<input name="duration1" placeholder="Enter duration" class="form-control" type="text" id="APDtext"
                onChange={e => {
                  this.setState(
                    {
                      duration1: e.target.value,


                    });
                }}
              />
              ) : (<label></label>)} <br></br>
            <input name="nusers" placeholder="Enter number of connection" class="form-control" type="text" id="APDtext"
              onChange={e => {
                this.setState(
                  {
                    nusers: e.target.value,


                  });
              }} />





            <br></br></div>) : (<div></div>)}

        {/* <Multiselect
          isObject={false}
          onChange={this.selectedValue}
          onRemove={function noRefCheck() { }}
          onSearch={function noRefCheck() { }}
          onSelect={function noRefCheck() { }}
          options={[
            'Voice',
            'Articulation',
            'language_disoder',
            'Fluency'

          ]}
        />
         <font COLOR="#ff0000">
              <p>{this.state.emptyDisorder}</p> </font> */}
        {/* <Multiselect> options=
{this.state.disorderDetails}
</Multiselect> */}

        {/* 
<Multiselect isMulti option={[
    'Voice',
    'Articulation',
    'Aural Rehabilitation'] } /> */}
        <label>+91 </label>
        <input name="Phno" placeholder="Enter Phone Number" class="form-control" type="text" id="APDtext"
          onChange={this.validPhoneNumber} /> <br></br>
        <font COLOR="#ff0000">
          <p>{this.state.emptyPhoneNumber}</p> </font>

        <font COLOR="#ff0000">
          <p>{this.state.validPhoneNumber}</p> </font> <br></br>



        <button id='submit3' onClick={this.onClickListener}>sumbit</button>
      </div>
    </div>
    );
  }
}

export default SignupForm;
