import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import  * as Select from '../Actions/list.Action'
import * as Logout from '../Actions/user.Action'
import './css/index.css'
import Map from './Maps/Emergency/Map'
import Table_ from './Tables/index'
import { connect } from 'react-redux';


class Index extends Component {

    render() { 
            const {dispatch} = this.props
        return (
            <div >
                <Row>
                    <Col  flex={1} className="content-tab-menu">
             
                        <div className=" button-menu" >
                            <img src="https://image.flaticon.com/icons/svg/2785/2785609.svg"
                             className="icon-img" onClick={()=>dispatch(Select.emergency())}/>
                        </div>  
                        <div className=" button-menu" >
                            <img src="https://image.flaticon.com/icons/svg/272/272340.svg"
                             className="icon-img" onClick={()=>dispatch(Select.report())}/>
                        </div>  

                        <div className=" button-logout" >
                            <img src="https://image.flaticon.com/icons/svg/1286/1286853.svg"
                             className="icon-img" onClick={()=>dispatch(Logout.Logout_Action())}/>
                        </div>   
                         
                    </Col>
                    <Col flex={89} className="content-tab-main">
                    
                            <Map>
                                
                            </Map>   
                      
                    </Col>
                    <Col flex={10} style={{padding:"10px"}}>
                        
                           <Table_/>
                    </Col>
                </Row>
                <Row>
                    
                </Row>

            </div>
        );
    }
}
 
export default connect()(Index);