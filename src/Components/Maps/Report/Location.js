import React, { Component  } from 'react'
import { connect } from 'react-redux';
import { GoogleMap ,withScriptjs, withGoogleMap, Marker  } from 'react-google-maps' ;
import { Button } from 'antd';

 class LocationMap extends Component {
    
    constructor(props){
        super(props)

          
    }

 
 
    render() {
   
                const {location} = this.props.location
                const report = new window.google.maps.LatLng(location.latitude , location.longitude)
                    return (
                    
                                <GoogleMap 
                    
                                        defaultCenter = {  new window.google.maps.LatLng(14.979900,100.501762)}

                                        defaultZoom={10}
                                        
                                        defaultMapTypeId= 'roadmap'

                                        center= {  report }

                                        zoom={10}
                                        
                                    > 
                                    
                                       
                                        <Marker   

                                            position = { report }         
                                        //  onClick={()=> this.setState({isOpen:true})}
                                            title= "Report"  
                                            icon = {  { 
                                                        url: 'https://image.flaticon.com/icons/svg/1972/1972991.svg' ,
                                                        anchor: new window.google.maps.Point(40, 40),
                                                        scaledSize: new window.google.maps.Size(40, 40)    
                                                    } } 
                                        
                                            
                                        />
                                
                            </GoogleMap> 
                                            
                    )
        }
    }


const WrappedMap = withScriptjs(withGoogleMap(LocationMap));

const mapStateToProps = (state ) => {
    return {
        location: state.Map_Report
    }
}
  
 export default connect(mapStateToProps) (WrappedMap);