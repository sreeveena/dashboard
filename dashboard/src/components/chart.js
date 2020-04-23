import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['10:00', '11:00', '12:00'],
                datasets:[{
                    label: 'Total Tickets',
                    data:[90,30, 50,0],
                    borderColor:[
                        'rgba(54,162,235,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(54,162,235,0.6)',
                    ]
                }]
            },
            closedTickets:{
                labels:['10:00', '11:00', '12:00'],
                datasets:[{
                    label: 'Closed Tickets',
                    data:[30,50, 40,0],
                    borderColor:[
                        'rgba(54,162,235,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(54,162,235,0.6)',
                    ]
                }]
            },
            lineOptions: 
                { maintainAspectRatio: false, 
                        
                    responsive: true,
                    tooltips: {
                        mode: 'single',
                    },
                    scales: {
                        xAxes: [{ 
                            display: true,
                            gridLines: {
                                display: true,
                                color: 'white',
                                drawBorder: true,
                                drawOnChartArea: false
                            },
                            ticks: {
                                fontColor: "white", // this here
                            },
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                color: 'white',
                                display: false,
                                drawBorder: true,
                                drawOnChartArea: false
                            },
                        }],
                    }
                }
        }
    }    
    render(){
        return(
            <div>
            <div className="chart">
                Total Tickets
                <Line
                    data={this.state.chartData}
                    scaleFontColor={'white'}
                    options={this.state.lineOptions}
                    legend={{
                        display: false
                    }

                    }
                />
            </div>
            <div className="chart">
                Closed Tickets
                <Line
                    data={this.state.closedTickets}
                    scaleFontColor={'white'}
                    options={this.state.lineOptions}
                />
            </div>
            </div>
            
        )
    }
}



export default Chart;