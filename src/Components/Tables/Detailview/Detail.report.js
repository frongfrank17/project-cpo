
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Row, Col, Typography, Input ,Form, Button ,Spin} from 'antd';
import './css/Detail.report.css'
import 'antd/dist/antd.css';
import { Production } from '../../../Configs/ConfigReport'
import Map from '../../Maps/Report/Map'
import * as Action from '../../../Actions/map.Action'
    const {Text} = Typography
 class Report extends Component {
     constructor(props) {
         super(props)
         this.state = {
        
            _id:"" , Profile : [] , Contact : [] , Lisence_plate: [] , Detail_car: [] , Service_ : [] , Report_location: [] ,Lock_satation:[]
     
        }
     }
     componentDidMount() {
         Axios.get(Production+"api/stolen/v1/report/getReport?id="+this.props.id).then(
             response => {
                let data = response.data
                this.setState({
                    Profile: data.User_.Profile ,
                    Contact:data.User_.Contact,
                    Lisence_plate: data.User_car.Lisence_plate ,
                    Detail_car: data.User_car.detail_Car ,
                    Service_ :  data, 
                    _id : data._id

                })
                
                this.props.dispatch(Action.ReportAction(data.Location))
                
             }
         ).catch(err=>console.log(err))
     }

    render() {
        const { Profile ,Contact , Lisence_plate , Detail_car , Service_ , _id} = this.state
        if( _id == "" || _id == null || _id == undefined ) {
            return(
            <div style={{textAlign:"center"}}>
                 <Spin  size="large"  />
                  </div>
            )
        }  
        return (
            <div>
                <Row>
                    <Col flex={'auto'}>
                        <div className="container">
                            <Row>
                                <Col flex={0.5}> <img src={Profile.profile_image}  width="170px"  height="200px"/> </Col>
                                <Col flex={4.5}>
                                    <Row className="tab-font">
                                        <Col><h6 className="font-h6">{Profile.first_name+" "+Profile.last_name}</h6></Col>    
                                    </Row>
                                    <Row className="tab-font">
                                        <Col><h6 className="font-h6 text-center">{Contact.phone_number}</h6></Col>
                                        
                                    </Row>
                                    <Row className="tab-font">
                                        <Col><h6 className="font-h6">{Contact.email}</h6></Col>
                                        </Row>
                                    <Row className="tab-font">
                                        <Col><h6 className="font-h6">ทะเบียน :</h6></Col>
                                        <Col><h6 className="font-h6">{Lisence_plate.plate_number+" "+Lisence_plate.plate_province}</h6></Col>
                                    </Row>
                                    <Row className="tab-font">
                                        <Col><h6 className="font-h6">รถยนต์  :</h6></Col>
                                        <Col><h6 className="font-h6">{Detail_car.car_brand+"  "+Detail_car.car_model}</h6></Col>
                                    </Row>
                                    
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col flex={'auto'}>
                        <div className="container">
                            <Map />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        Map: state.Map_Report
    }
}
export default connect(mapStateToProps)(Report)
