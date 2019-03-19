import React, { Component } from "react";
import './CSS/Policies.css'
import PoliciesNav from './Policies/Nav'

class Policies extends Component{
    goBack(){
        this.props.history.goBack();
    }
    render(){
        return(
            <div>
                <div>
                    <PoliciesNav />
                </div>
                <div className='row'>
                    <div className='col s2 fixed'>
                        <br/>
                        <button className=" back_button" onClick={()=>this.goBack()}>BACK</button>
                    </div>
                    <div className='col s10'>
                    </div>
                    <div className='col s12'>
                        <div className='policy_body'>
                            <p className='colored_header'>Overview of leave procedure</p>
                            <p>This is the policy of Venture Garden Group, which states the requirement and conditions upon which staff can legally be excused from work or granted leave. 
                            Below are details about the different types of leave that are duly acceptable and how they can be availed of</p>
                        </div>
                        <div className='policy_body'>
                            <p className='colored_header'>Annual leave</p>
                            <p>Employees are allowed time off work for a specific number of days as their annual leave. This leave, as set out hereunder, 
                                is subject to the approval of the Employee’s direct Line Manager. 
                                <ol >
                                    <li >Only confirmed Employees will be entitled to leave, following continuous work from the day 
                                        of resumption of employment</li>
                                    <li>If an Employee is of the opinion that his/her direct Line Manager is withholding leave unreasonably
                                        he/she may escalate to the People Ops team.
                                    </li>
                                    <li>Leave shall be taken at a time convenient to the company</li>
                                    <li>As much as possible, staff will be advised of annual training schedules to enable them plan their
                                    leave. However, in the event that leave dates coincide with any training schedule, such training
                                    schedule shall take precedence. Concerned staff should therefore contact People Ops for amendments
                                    </li>
                                    <li>The following shall be the approved number of Annual leave days for staff: 
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>LEVEL</th>
                                                    <th>LEAVE DAYS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Senior Management Team  (General Managers, Corporate Heads and Executives ) </td>
                                                    <td>Four (4)weeks leave ( i.e. 20 working days ) </td>
                                                </tr>
                                                <tr>
                                                    <td>All staff   </td>
                                                    <td>Three (3) weeks leave ( i.e. 15 working days ) </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>If a public holiday falls during an Employee’s leave, the Employee shall resume from leave as 
                                        originally scheduled and such days recognized as part of the Employee’s unutilized leave.</li>
                                    <li>Where an Employee is unable to proceed on his/her entitled annual leave at the instance of the
                                    company, a written permission from the line Manager stating the reasons shall be sent to the People Ops team.
                                    </li>
                                    <li>
                                    Employees may carry over a maximum of five (5) days to be utilized any time within the following year. 
                                    </li>
                                    <li>
                                    At the year-end (31 Dec), un-utilized Leave days in excess of five (5) working days will be forfeited
                                    </li>
                                     
                                </ol>
                            </p>
                        </div>
                        <div className='policy_body'>
                            <p className='colored_header'> CASUAL LEAVE/PERSONAL TIME OFF </p>
                            <ol>
                                <li>Employees may be granted casual leave for personal reasons which will be a maximum of (5) five 
                                    working days in a year. </li>
                                <li>Casual Leave is intended essentially for short periods of absence due to unexpected contingencies and should not exceed a maximum of 2 days at any one time. The line manager may however waive this condition in any individual case if he/she considers that there are exceptional circumstances justifying a relaxation in this regard. The People Ops team must be duly notified of this extension</li>
                                <li>Casual leave is not an entitlement neither is it earned.</li>
                                <li>Prior approval from an Employee’s direct line Manager/Head of Department is necessary for this leave except in situations where obtaining approval is not possible such as, in cases of sickness, death of loved ones, personal emergencies, etc. </li>
                                <li>Any casual leave taken without prior notice of the appropriate officials or in excess of the maximum number of days given, will result in a salary deduction for the days taken</li>
                                <li>Casual leave may not be combined with any other kind of leave</li>
                            </ol>
                        </div>
                        <div className='policy_body'>
                            <p className='colored_header'>Sick leave</p>
                            <ol>
                                <li> Employees are granted sick leave only when incapacitated to work by illness or injury, when hospitalized, when absent for medical, dental, or optical examination or treatment. Sick leave shall be considered a benefit or privilege and not a right. Full time employees will receive full pay during incapacity caused by illness if sick leave is granted</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Policies;