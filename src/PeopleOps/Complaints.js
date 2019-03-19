import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import Sidebar from './Sidebar';
// import './CSS/AdminDashboard.css';
import axios from 'axios'

class AdminDashboard extends Component{
    render(){
       
        return(
            <div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row" style={{'margin-left': '10%'}}>
                    <div class="col s9 offset-s2 ">
                        <div  class="col s12"><p><b>ALL SBUs</b></p></div>
                        
                    </div> 
            </div>
        </div>
        )
    }
}

export default AdminDashboard;