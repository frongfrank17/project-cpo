import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionMap from '../../Actions/map.Action'
import { Modal } from "antd";
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
    ModelOk = () => {
        this.setState({ visible : false})
    }
    ModalCancel = () => {
        this.setState({ visible : false })
    }
    Chkstatus = status => {
        if(status == "Lock"){
            return getLock()
        }
            return getReport()
    }
    PossionMap = location => {
        this.props.dispatch(ActionMap.ReportAction(location))
    }
    render(){
       
        return (
            <div className="">
               <Modal title="Model" visible={this.state.visible} onOk={this.ModelOk} onCancel={this.ModalCancel}>
                    <DetailReport id={this.state.userId} />
                </Modal>
                <div className="container-fix">
                <h1 style={{textAlign:"center"}}> Report </h1>
                    <table className="table table-responsive ">
                    <thead >
                    <th style={{width:"10%" ,textAlign:"center"}}></th>
                    <th style={{width:"10%" ,textAlign:"center"}}></th>
                    <th style={{width:"20%",textAlign:"center"}}>Lisence plate</th>   
                    
                    <th style={{width:"40%",textAlign:"center"}}>userReport</th>
                    <th style={{width:"10%",textAlign:"center"}}>status</th>
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
                                                <a onClick={()=>this.PossionMap(items.Location)}>
                                                    <img src="https://image.flaticon.com/icons/svg/854/854878.svg" height="30px" width="30px"/>
                                               </a>
                                            </td>
                                           <td>{items.User_car.Lisence_plate.plate_number+" "+items.User_car.Lisence_plate.plate_province}</td>
                                            

                                            <td>{items.User_.Profile.first_name+" "+items.User_.Profile.last_name}</td>
                                            <td> {this.Chkstatus(items.status)}</td>
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
function getReport () {
    return (  <span class="badge badge-danger font-status">Report</span>  )
}
function getLock () {
    return (  <span class="badge badge-warning font-status">Lock</span> )
}