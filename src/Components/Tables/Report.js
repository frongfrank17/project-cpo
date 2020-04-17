import React, { Component } from 'react'
import { connect } from 'react-redux'

import {ws} from '../../Configs/ConfigReport'
import './css/Report.css'
const IO = ws
class Report extends Component{
    constructor(props){
        super(props)
        this.state = {
            row: []
        }
    }
    componentDidMount(){
        IO.on('stolen-report-lists' , response => {
            let result = JSON.parse(response)
            console.log(result)
            this.setState( { row : result} )
        })
    }
    render(){
       
        return (
            <div className="">
                <div className="container-fix">
                <h1>Stolen-report </h1>
                    <table className="table table-responsive ">
                    <thead >
                    <th style={{width:"20%" ,textAlign:"center"}}>#</th>
                    <th style={{width:"30%",textAlign:"center"}}>username</th>
                    <th style={{width:"20%" ,textAlign:"center"}}>map</th>
                    <th style={{width:"20%",textAlign:"center"}}>Licase plate</th>
                    <th style={{width:"10%",textAlign:"center"}}>status</th>
                    </thead>
                        <tbody >
                        {  this.state.row.map((items,_i) => 
                            <tr key={_i}>
                                           <td><button onClick={()=>alert(items._id)}>view</button></td>
                                            <td>{items.User_.Profile.first_name+" "+items.User_.Profile.last_name}</td>
                                            <td>{<button onClick={()=>alert(items.Location.latitude+":"+items.Location.longitude)}>map</button>}</td>
                                            <td>{items.User_car.Lisence_plate.plate_number+" "+items.User_car.Lisence_plate.plate_province}</td>
                                            <td>{items.status}</td>
                            </tr>
                         )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const  wd = { width:"100%"}

export default connect()(Report)

