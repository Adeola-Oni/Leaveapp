import React from 'react';

const Sidebar = (()=>{
    return(
        <div style={{color: 'black'}}>

                <ul id="slide-out" class="sidenav sidenav-fixed z-depth-3" style={{marginTop: '4.8%', paddingTop: '1%',
                     'background-color': 'white', color : 'black', textAlign:'center'}}>
                    <li style={{color: 'black'}}><b>ADMIN</b></li><br/>
                    <li style={{color: 'black'}}><b>ENGINEERING OPERATIONS</b></li><br/>
                    <li><div class="divider"></div></li>
                    <li id='sbu'><a href="/admin" style={{color: 'black'}}>SBUs</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/competency" style={{color: 'black'}}>COMPETENCY CENTER</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/sbugraph" style={{color: 'black'}}>SBUs DATA</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/engineers" style={{color: 'black'}}>ENGINEERS</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="#!" style={{color: 'black'}}>SEE COMPLAINTS</a></li>
                </ul>
            
        </div>
        
    )
})

export default Sidebar;