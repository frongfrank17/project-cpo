import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ws } from '../../Configs/ConfigEmergency'
import './css/Emergency.css'
import "antd/dist/antd.css";
import { Modal } from "antd";
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
   
    render(){
       
        return (
            <div>
                <Modal title="Model" visible={this.state.visible} onOk={this.ModelOk} onCancel={this.ModalCancel}>
                    <DetailCell id={this.state.userId} />
                </Modal>
                <div className="container-fix">
                <h1>Emergency-cell </h1>
                    <table className="table table-responsive ">
                    <thead >
                    <th style={{width:"20%" ,textAlign:"center"}}>#</th>
                    <th style={{width:"30%",textAlign:"center"}}>username</th>
                    <th style={{width:"20%",textAlign:"center"}}>phone</th>
                    <th style={{width:"20%",textAlign:"center"}}>Licase plate</th>
                    <th style={{width:"10%",textAlign:"center"}}>status</th>
                    </thead>
                        <tbody >
                        {  this.state.row.map((items,_i) => 
                            <tr key={_i}>
                                           <td><button onClick={()=>this.ModelOpen(items._id)}>view</button><button onClick={()=>alert(items.Location.latitude+":"+items.Location.longitude)}>map</button></td>
                                            <td>{items.User_.Profile.first_name+" "+items.User_.Profile.last_name}</td>
                                            <td>{items.User_.Contact.phone_number}</td>
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

export default connect()(Emergency)

