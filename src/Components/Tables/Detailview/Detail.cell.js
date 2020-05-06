import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Row, Col, Typography, Input ,Form, Button ,Spin ,Cascader} from 'antd';
import './css/Detail.cell.css'
import 'antd/dist/antd.css';
import { Production } from '../../../Configs/ConfigEmergency'
 const {Text} = Typography
 class Cell extends Component {
     constructor(props) {
         super(props)
         this.state = {
              _id: "",  Profile : [] , Contact : [] , Lisence_plate: [] , Detail_car: [] , Service_ : []
         }
     }
     componentDidMount() {
         Axios.get(Production+"api/emergency/v1/station/staff/detailCell?id="+this.props.id).then(
             response => {
                let data = response.data
                this.setState({
                    Profile: data.User_.Profile ,
                    Contact:data.User_.Contact,
                    Lisence_plate: data.User_car.Lisence_plate ,
                    Detail_car: data.User_car.detail_Car ,
                    Service_ :  data.status ,
                    _id : data._id

                })
                
             }
         ).catch(err=>console.log(err))
     }
     status = () => {
            if(this.state.Service_ == "SOS") {
                return Sos()
            }
            return Status(this.state.Service_)
     }
    render() {
        const { Profile ,Contact , Lisence_plate , Detail_car , Service_ , _id } = this.state
     
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
                    <Col flex={4} >
                    <h6>ชื่อ - นามสกุล</h6>
                        <h6 className="tab-detail"> {Profile.first_name+" "+Profile.last_name}</h6>
                        <h6 >อีเมล</h6>
                        <h6 className="tab-detail" >  {Contact.email}</h6>
                        <h6>โทร</h6>
                        <h6 className="tab-detail"  >  {Contact.phone_number}</h6>
                        <h6  >ป้ายทะเบียน</h6>
                        <h6 className="tab-detail" >  {Lisence_plate.plate_number+" "+Lisence_plate.plate_province}</h6>
              </Col>
                </Row>
                <Row>

                    <Col flex={'auto'} >
                        <Row> 
                            <Col flex={'auto'} >
                                <h6>ยี่ห้อ - รุ่นรถยนต์</h6>
                                <h6 className="tab-detail">{Detail_car.car_brand+" "+Detail_car.car_model}</h6>
                                
                             </Col>
                             <Col flex={'auto'}  > 
                                <h6> แบตรี่รถยนต์</h6>
                                <h6 className="tab-detail">{Detail_car.battery_type+" "+Detail_car.battery_size}</h6>
                            </Col>
                        </Row>
                        <Row> 
                            <Col flex={'auto'}  ><h6> หัวชาต</h6>
                            
                                <Col flex={'auto'}  >
                                    <h6 className="tab-detail">1. {Detail_car.connect_type[0]}</h6>
                                </Col>
                                <Col flex={'auto'}  >
                                    <h6 className="tab-detail">2    . {Detail_car.connect_type[1]}</h6>
                                </Col>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    {
                        this.status()
                    }

                </Row>
            </div>
        )

    }
}


function Sos () {
    return  (     
    <>      
        <Col flex={'auto'} >
            <Form className="col-margin-topic">
                <Form.Item > 
                    <Cascader type="text" placeholder="select"/>
                </Form.Item>
            </Form>
        </Col>
        <Col flex={'auto'} >
            <Button>add</Button>
        </Col>
    </>    
    )      
      
}
function Status (status) {
    return (
    <>
        <Col flex={'auto'}>
            <Row>
                <Col className="col-margin-topic" >status</Col>
                <Col> <Text code> {status}</Text> </Col>
            </Row>
        </Col>
    </>
    )
}

export default connect()(Cell)
