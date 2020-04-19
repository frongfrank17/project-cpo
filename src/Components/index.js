import React, { Component } from 'react';
import { Row, Col, Button , Menu  } from 'antd';
import  * as Select from '../Actions/list.Action'
import * as Logout from '../Actions/user.Action'
import './css/index.css'
import Map from './Maps/index'
import Table_ from './Tables/index'
import { connect } from 'react-redux';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

class Index extends Component {

    render() { 
            const {dispatch} = this.props

        return (
            <div >
                <Row>
                    <Col  flex={'50px'} className="content-tab-menu">
             
                    <Menu className="tab-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                     
                        <Menu.Item key="1" className="tab-topic" onClick={()=>dispatch(Select.emergency())} >
                       
                        <span className="nav-text"  >Emergency</span>
                        </Menu.Item>
                        <Menu.Item key="2" className="tab-topic"  onClick={()=>dispatch(Select.report())}>
                    
                        <span className="nav-text" >Report</span>
                        </Menu.Item>
              
                   
                        <Menu.Item key="3" className="tab-topic" onClick={()=>dispatch(Logout.Logout_Action())} >
                        <span className="nav-text" >Logout</span>
                        </Menu.Item>
                   
                    </Menu>
                         
                    </Col>
                    <Col flex={'auto'} >
                    
                                <Table_ />
                      
                    </Col>

                </Row>
                <Row>
                    
                </Row>

            </div>
        );
    }
}
 
export default connect()(Index);