import React, { Component } from 'react';
import SignupForm  from './signupform';
//import  Header  from '../common/header';

class Signup extends Component {
    render() {
        return (
            <div class="Welcome">
                    
            <div className='Welcome'>
                
                <div><h1> Voice123 {this.props.patient_details}</h1></div>
                <SignupForm />
            </div>
            </div>
        );
    }
}

export default Signup;