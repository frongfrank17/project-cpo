import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Action from '../../Actions/map.Action'
import { Drawer } from "antd";
import {ws} from '../../Configs/ConfigReport'
import DetailReport from './Detailview/Detail.report'
import './css/Report.css'
const IO = ws
class Report extends Component{
    constructor(props){
        super(props)
        this.state = {
            row: [] ,visible:false , userId:""
        }
    }
    componentDidMount(){
        document.title ="Stolen-report"
        IO.on('stolen-report-lists' , response => {
            let result = JSON.parse(response)
            console.log(result)
            this.setState( { row : result} )
        })
    }
    ModelOpen = id => {
         
        this.setState({
            visible : true ,
            userId: id
        })
        
    }

    ModalCancel = () => {
        this.setState({ visible : false })
    }
    Chkstatus = status => {
        console.log(status)
        if(status == "lockByStaion" ){
            return getLock()
        }
            return getReport()
    }

    render(){          
    
    
       
        return (
            <div >
               <Drawer width={500}  placement="right" closable={this.ModalCancel} title="Model" visible={this.state.visible} onClose={this.ModalCancel} >
                    <DetailReport id={this.state.userId} />
                </Drawer>
                <div className=" container-fuild ">
                <p>Report List</p>
                <div className=" container table-responsive ">
                    <table className="table table-bordered">
                    <thead style={{width:"100%"}} >
                    <th style={{ textAlign:"center"}}></th>
                    <th style={{ textAlign:"center"}}> Lisence plate</th>   
                    <th style={{ textAlign:"center"}}> Car Brand </th>
                    <th style={{ textAlign:"center"}}> Car Model </th>
                    <th style={{ textAlign:"center"}}> Connector </th>
                    <th style={{ textAlign:"center"}}> Connector </th>
                    <th style={{ textAlign:"center"}}> Username </th>
                    <th style={{ textAlign:"center"}}> Phone number </th>
                    <th style={{ textAlign:"center"}}> E - Mail </th>
                    <th style={{ textAlign:"center"}}> status </th>
                    </thead>
                        <tbody >
                        {  this.state.row.map((items,_i) => 
                            <tr key={_i}>
                                           <td>
                                            <a   onClick={()=>this.ModelOpen(items._id)}>
                                                <img src="https://image.flaticon.com/icons/svg/2674/2674880.svg" height="25px"  widgth="30px"/>
                                            </a>
                                           </td>
                                           <td>
                                               {items.User_car.Lisence_plate.plate_number+" "+items.User_car.Lisence_plate.plate_province}
                                           </td>
                                           <td> 
                                                {items.User_car.detail_Car.car_brand}
                                           </td>
                                           <td>
                                                {items.User_car.detail_Car.car_model}
                                           </td>
                                           <td>
                                               {items.User_car.detail_Car.connect_type[0]}
                                           </td>
                                           <td>
                                               {items.User_car.detail_Car.connect_type[1]}
                                           </td>
                                            <td>
                                                {items.User_.Profile.first_name+" "+items.User_.Profile.last_name}
                                            </td>
                                            <td>
                                                {items.User_.Contact.phone_number}
                                            </td>
                                            <td>
                                                {items.User_.Contact.email}
                                            </td>
                                            <td> 
                                                
                                            {this.Chkstatus(items.status)}
                                                
                                            </td>
                            </tr>
                         )}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}

const  wd = { width:"100%"}

export default connect()(Report)
function GetStatus (status) {
    if(status != "lockByStaion") {
        return getReport()
    }
        return getLock()
}
function getReport () {
    return (  <span class="badge badge-danger font-status">Report</span>  )
}
function getLock () {
    return (  <span class="badge badge-warning font-status">Lock</span> )
}