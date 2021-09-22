//import useState hook to create menu collapse state
import React, { Component} from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList} from "react-icons/fa";//, FaRegHeart 
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
//import MainSpiel from "./MainSpiel";
//import PatientDetails from "./PatientDetails";
//import AddPatientDetails from "./AddPatientDetails";
//import SignUp from "./signupform";
//import WelcomePage from "./WelcomePage";
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
//import React, { Component } from "react";
class Header extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            sideBarValue:true,
            menuCollapse:false,
            PatientDetails:false
            
        }
    }

    
    //create initial menuCollapse state using useState hook
    //const [menuCollapse, setMenuCollapse] = useState(false)
    //const [PatientDetails, setPatientDetails] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
   menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
  this.state({
        menuCollapse: !this.state.menuCollapse
        
    }) 
  };
  handleChangeDash = () => {
    //condition checking to change state from true to false and vice versa
    alert(true);
     
    //this.props.onChange(!this.state.sideBarValue)
    
  };
  
  
   render() {
  return (
    
      <div id="header">
          {/* collapse d props to change menu size using menucollapse state */}
        <ProSidebar collapsed={this.menuCollapse}>
          <SidebarHeader>
          
            <div className="closemenu" onClick={this.menuIconClick}>
                {/* changing menu collapse icon on click */}
              {this.menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}> 
              <Link to='/AddPatientDetails_2  '>
              Home 
              </Link>
              </MenuItem>
              {(global.role==='spiel')?(<div>
                <MenuItem icon={<RiPencilLine />}>
                <Link to='/Signup' >
                   Create Account
                </Link>
                
                </MenuItem>

                <MenuItem icon={<RiPencilLine />}>
                <Link to='/LoginDetails' >
                   Login Details
                </Link>
                
                </MenuItem>

                
                
                
                
                
                </div>):(<div>
                
              
              <MenuItem icon={<FaList />}  >
              <Link to='/PatientDetails' >
             PatientDetails
              </Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                    <Link to='/AddPatientDetails' >
                    Add Patient
                    </Link>
                  
               </MenuItem>
              {/* <MenuItem icon={<RiPencilLine />}>
              <Link to='/WelcomePage' >
                   Voice order
                </Link>
                
                </MenuItem> */}
             
                <MenuItem icon={<RiPencilLine />}>
              <Link to='/account_details' >
                   account details
                </Link>
                </MenuItem>
                <MenuItem icon={<RiPencilLine />}>
                <Link to='/Signup' >
                   Create User
                </Link>
                
                </MenuItem>
                </div>)}
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
       
      </div>
    
  );
              }
}

export default Header;