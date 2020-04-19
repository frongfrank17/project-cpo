import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionMap from '../../Actions/map.Action'
import { ws } from '../../Configs/ConfigEmergency'
import './css/Emergency.css'
import "antd/dist/antd.css";
import { Modal ,Button} from "antd";
import DetailCell from './Detailview/Detail.cell';
const IO = ws
class Emergency extends Component{
    constructor(props){
        super(props)
        this.state = {
            row: [] , 
            visible: false , 
            userId : ""
        }
    }
    componentDidMount(){
        IO.on('emergency-cell-lists' , response => {
            let result = JSON.parse(response)
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
        if(status == "INPROGRESS") {
            return getInProgress()
        }
        return getSos()
    }
    PossionMap = location => {
        //console.log(location)
        this.props.dispatch(ActionMap.EmergencyAction(location))
    }
    render(){
       
        return (
            <div>
                <Modal title="Model" visible={this.state.visible} onOk={this.ModelOk} onCancel={this.ModalCancel}>
                    <DetailCell id={this.state.userId} />
                </Modal>
                <div className="container-fix">
                <h1 style={{textAlign:'center'}}> Emergency-cell </h1>
                    <table className="table table-responsive ">
                    <thead >
                    <th style={{width:"10%" ,textAlign:"center"}}></th>
                    <th style={{width:"10%" ,textAlign:"center"}}></th>
                    <th style={{width:"30%",textAlign:"center"}}>username</th>
                    <th style={{width:"20%",textAlign:"center"}}>phone</th>
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
                                               <a size={'default'}     onClick={()=>this.PossionMap(items.Location)}>
                                                    <img src="https://image.flaticon.com/icons/svg/854/854878.svg" height="30px" width="30px"/>
                                               </a>
                                            </td>
                                            <td>{items.User_.Profile.first_name+" "+items.User_.Profile.last_name}</td>
                                            <td>{items.User_.Contact.phone_number}</td>
                                            
                                            <td> 
                                                {this.Chkstatus(items.status)}
                                             </td>
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

export default connect()(Emergency)

function getSos() {
    return ( <span class="badge badge-danger font-status">SOS</span> )
}
function getInProgress () {
    return ( <span class="badge badge-warning font-status">IN PROGRESS</span> )
}
