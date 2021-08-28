import React, { Component } from "react";
import {SideBarData} from './SideBarData';
import  "./SideBar.css";
class SideBar extends Component {
    render() {
        return (
           <div className="SideBar">
               <ul className="SideBarList">
                {SideBarData.map((val,key)=>{
                     return <li key={key} className="row" onClick={()=>{window.location.pathname=val.link }} >
                         {" "}
                          <div>{val.icon} {val.title}</div>
                          </li>
                    

                }
                )}
                </ul>
           </div> 
        )

}
}
export default SideBar;