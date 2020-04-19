
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Row, Col, Typography, Input ,Form, Button ,Spin} from 'antd';
import './css/Detail.report.css'
import 'antd/dist/antd.css';
import { Production } from '../../../Configs/ConfigReport'
    const {Text} = Typography
 class Report extends Component {
     constructor(props) {
         super(props)
         this.state = {
           _id:"" , Profile : [] , Contact : [] , Lisence_plate: [] , Detail_car: [] , Service_ : []
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
                    <Col flex={0.5}><img src={Profile.profile_image}  width="170px"  height="200px"/></Col>
                    <Col flex={4} className="col-detail">
                  
                  <p className="col-margin-detail"> {Profile.first_name+" "+Profile.last_name}</p>
                  <p className="col-margin-detail">  Male{Profile.gender}</p>
                  <p className="col-margin-detail">  {Contact.email}</p>
                  <p className="col-margin-detail">  {Contact.phone_number}</p>
                  <p className="col-margin-detail">  {Lisence_plate.plate_number+" "+Lisence_plate.plate_province}</p>
              </Col>
                </Row>
                <Row>

                    <Col flex={'auto'} className="col-car">
                        <Row> 
                            <Col flex={'auto'} className="col-margin-topic"><p>ยี่ห้อรถยนต์</p></Col> <Col flex={'auto'} className="col-margin-car"><p>{Detail_car.car_brand}</p></Col>
                            <Col flex={'auto'}  className="col-margin-topic"><p>รุ่นรถยนต์</p></Col><Col flex={'auto'}  className="col-margin-car"><p>{Detail_car.car_model}</p></Col>
                        </Row>
                        <Row>
                             <Col flex={'auto'}  className="col-margin-topic"><p> แบตรี่รถยนต์</p></Col><Col flex={'auto'}  className="col-margin-car"><p>{Detail_car.battery_type}</p></Col>
                             <Col flex={'auto'}  className="col-margin-topic"><p> ขนาดแบตรี่</p></Col><Col  flex={'auto'}  className="col-margin-car"><p>{Detail_car.battery_size}</p></Col>
                        </Row>
                        <Row> 
                            <Col flex={'auto'}  className="col-margin-topic"><p> หัวชาต</p></Col>
                            <Col  flex={'auto'} className="col-margin-car"><p>1. {Detail_car.connect_type}</p></Col>
                            <Col flex={'auto'}  className="col-margin-car"><p>2. {Detail_car.connect_type}</p></Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                <Col flex={'auto'}>
                    <Row>
                        <Col className="status" >status </Col>
                        <Col > <Text className="Text" code> {Service_.status}</Text> </Col>
                    </Row>
                </Col>

                </Row>
            </div>
        )
    }
}




export default connect()(Report)
