import React, {Component} from 'react';
import AdminSideNav from './AdminSideNav';
import Navbar from '../Staff/Navbar';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class SBU extends Component{
    state={
        Avitech:{},
        Edutech:{},
        Finatech:{},
        Powertech:{},
        GSV:{},
        Gardendata:{},
        Cooporate:{},
        Vigipay:{},
        year: '',
        ApprovedRequests: [],
        avitech: [],
        edutech : [],
        powertech: [],
        gsv: [],
        gardendata: [],
        vigipay: [],
        finatech: [],
        cooporate: []

    }
    componentDidMount(){
        let year = new Date().getFullYear();
        this.setState({year})
        let approved = []

        axios.get('https://leaveappjson.herokuapp.com/requests').then((res)=>{
            let response = res.data;
            for(let x of response){
                if (x.status === 'Approved'){
                    approved.push(x)
                }
            }
            this.setState({ApprovedRequests: approved})
            this.separate()
        }).catch()
       
        
    }

    separate(){
        let request = this.state.ApprovedRequests;
        let Avi = [];
        let Edu = [];
        let Fina = [];
        let Pow = [];
        let gsv = [];
        let garden = [];
        let vigipay = [];
        let cooporate = [];
        for(let x of request){
            if(x.SBU === "AVITECH"){
                Avi.push(x)
            }
            else if(x.SBU === "EDUTECH"){
                Edu.push(x)
            }
            else if(x.SBU === "FINATECH"){
                Fina.push(x)
            }
            else if(x.SBU === "POWERTECH"){
                Pow.push(x)
            }
            else if(x.SBU === "GSV"){
                gsv.push(x)
            }
            else if(x.SBU === "GARDEN"){
                garden.push(x)
            }
            else if(x.SBU === "VIGIPAY"){
                vigipay.push(x)
            }
            else if(x.SBU === "COOPORATE"){
                cooporate.push(x)
            }
        }
        this.setState({
            avitech: Avi,
            edutech : Edu,
            finatech: Fina,
            powertech: Pow,
            gsv: gsv,
            gardendata: garden,
            vigipay: vigipay,
            cooporate: cooporate,
        })
        this.avitechGraph();
        this.edutechGraph();
        this.finatechGraph();
        this.powertechGraph()
        this.gsvGraph();
        this.gardendataGraph();
        this.vigipayGraph();
        this.cooporateGraph();
    }

    avitechGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let avitech = this.state.avitech;
        for(let x of avitech){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1]);
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const Avitech = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Avitech})
    }

    edutechGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let edutech = this.state.edutech;
        for(let x of edutech){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        
        const Edutech = {
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }]
        };
        this.setState({Edutech})
    }

    finatechGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let finatech = this.state.finatech;
        for(let x of finatech){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const Finatech = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Finatech})
    }

    powertechGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let powertech = this.state.powertech;
        for(let x of powertech){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const Powertech = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Powertech})
    }

    gsvGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let gsv = this.state.gsv;
        for(let x of gsv){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const GSV = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({GSV})
    }

    gardendataGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let gardendata = this.state.gardendata;
        for(let x of gardendata){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const Gardendata = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Gardendata})
    }

    vigipayGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let vigipay = this.state.vigipay;
        for(let x of vigipay){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const Vigipay = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Vigipay})
    }

    cooporateGraph(){
        let January = 0;
        let Feburary = 0;
        let March = 0;
        let April = 0;
        let May = 0;
        let June = 0;
        let July = 0;
        let August = 0;
        let September = 0;
        let October = 0;
        let November = 0;
        let December  = 0;
        let cooporate = this.state.cooporate;
        for(let x of cooporate){
            let startDate = x.startDate;
            let splitDate = startDate.split("-");
            let month = parseInt(splitDate[1])
            if(month === 1){
                January+=1;
            }
            else if(month === 2){
                Feburary+=1;
            }
            else if(month === 3){
                March+=1;
            }
            else if(month === 4){
                April+=1;
            }
            else if(month === 5){
                May+=1;
            }
            else if(month === 6){
                June+=1;
            }
            else if(month === 7){
                July+=1;
            }
            else if(month === 8){
                August+=1;
            }
            else if(month === 9){
                September+=1;
            }
            else if(month === 10){
                October+=1;
            }
            else if(month === 11){
                November+=1;
            }
            else if(month === 12){
                December+=1;
            }

        }
        const Cooporate = {
            datasets: [{
                data: [January,
                    Feburary,
                    March,
                    April,
                    May,
                    June,
                    July,
                    August,
                    September,
                    October,
                    November,
                    December ],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Cooporate})
    }


    render(){
        return(
            <div>
                <div style={{position: 'static', zIndex: '-1'}}>
                    <AdminSideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row" style={{'marginLeft': '10%'}}>
                    <p className='center'>DATA REPRESENTATION FOR ALL ENGINEERS IN VENTURE GARDEN GROUP</p>
                    <div class="col s9 offset-s2 ">
                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>AVITECH</b></p>
                            <Bar data={this.state.Avitech} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            } 
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>

                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>FINATECH</b></p>
                            <Bar data={this.state.Finatech} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>

                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>EDUTECH</b></p>
                            <Bar data={this.state.Edutech}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}
                            />  
                        </div>

                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>FINATECH</b></p>
                            <Bar data={this.state.Finatech} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>

                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>POWERTECH</b></p>
                            <Bar data={this.state.Powertech} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>
                        
                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>GSV</b></p>
                            <Bar data={this.state.GSV} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    }
                                }}/>  
                        </div>
                        
                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>GARDENDATA</b></p>
                            <Bar data={this.state.Gardendata} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>
                        
                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>VIGIPAY</b></p>
                            <Bar data={this.state.Vigipay} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>
                        
                        <div class="container" style={{'marginTop':'2%', width: '85%'}}>
                            <p className='center'><b>COOPORATE</b></p>
                            <Bar data={this.state.Cooporate} options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 20
                                            }
                                        }]
                                    },
                                    legend: {
                                        display: false,
                                    }
                                }}/>  
                        </div>
                        
                        
                    </div> 
                </div>
            </div>
        )
    }
}

export default SBU;