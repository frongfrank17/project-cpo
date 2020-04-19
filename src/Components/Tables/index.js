import React from 'react';
import {Col, Row} from 'antd'
 import {useSelector, connect } from 'react-redux'
 import Emergency from './Emergency'
 import Report from './Report'
 import Map_ from '../Maps/index'
function Table_ () {
    const select_ = useSelector(state => state.Lists)
    const list = select_.listdata 
     if(list == 'stolen-report') {
         return <Report />
     }
        return <LayoutMap />

}
function LayoutMap () {
    return (
        <div className="container-fluid">
            <Row>
                <Col flex="auto">
                    <Map_ />
                </Col>
                <Col flex="500px">
                    <Emergency />
                </Col>
            </Row>
        </div>
    )
}
export default connect()(Table_);

