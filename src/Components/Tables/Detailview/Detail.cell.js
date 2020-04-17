import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Row, Col, Divider, Input ,Form, Button} from 'antd';
import './css/Detail.cell.css'
import 'antd/dist/antd.css';
import { Production } from '../../../Configs/ConfigEmergency'

 class Cell extends Component {
     constructor(props) {
         super(props)
         this.state = {
                Profile : [] , Contact : [] , Lisence_plate: [] , Detail_car: [] , Service_ : []
         }
     }
     componentDidMount() {
         Axios.get(Production+"api/emergency/v1/station/staff/detailCell?id="+this.props.id).then(
             response => {
                let data = response.data
                this.setState({
                    Profile: data.User_.Profile ,
                    Contact:data.User_.Contact,
                    Lisence_plate: data.User_car ,
                    Detail_car: data.User_car.detail_Car ,
                    Service_ :  data

                })
                
             }
         ).catch(err=>console.log(err))
     }
    render() {
        const { Profile ,Contact , Lisence_plate , Detail_car , Service_ } = this.state
        return (
            <div>
                <Row>
                    <Col flex={30}><img src={Profile.profile_image}  width="170px"  height="200px"/></Col>
                    <Col flex={50} className="col-profil">
                        <h4 className="col-margin">โปรไฟล์</h4>
                        <h6 className="col-margin"> ชื่อ - สกุล : {Profile.first_name+" "+Profile.last_name}</h6>
                        <h6 className="col-margin"> เพศ       : {Profile.gender}</h6>
                        <h6 className="col-margin"> e-mail    : {Contact.email}</h6>
                        <h6 className="col-margin"> เบอร์โทร    : {Contact.phone_number}</h6>
                        <h6 className="col-margin"> ทะเบียน  : {Lisence_plate.plate_number+" "+Lisence_plate.plate_province}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col flex={'auto'} className="col-car">
                    <h4 className="col-margin">ข้อมูลรถยนต์ </h4>
                        <h6 className="col-margin">   ยี่ห้อ : {Detail_car.car_brand} รุ่น : {Detail_car.car_model} </h6>
                        <h6 className="col-margin">    แบตรี่ : {Detail_car.battery_type} ขนาดแบตรี่ : {Detail_car.battery_size}</h6>
                        <h6 className="col-margin"> หัวชาต : 1 : {Detail_car.connect_type}  2 : {Detail_car.connect_type}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col flex={'auto'} className="col-car">
                        <Form > 
                            <Form.Item style={{width:"50%"}} ><Input type="text" placeholder="select" /></Form.Item>
                            <Button>Select</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}



export default connect()(Cell)
