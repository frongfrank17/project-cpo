import React from 'react';
 import {useSelector, connect } from 'react-redux'
 import Emergency from './Emergency/Map'
 import Report from './Report/Map'
function Table_ () {
    const select_ = useSelector(state => state.Lists)
    const list = select_.listdata 
     if(list == 'stolen-report') {
         return <Report />
     }
        return <Emergency />

}

export default connect()(Table_);