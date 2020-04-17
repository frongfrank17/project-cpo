import React, { Component  } from 'react'
import { connect } from 'react-redux';
import { GoogleMap ,withScriptjs, withGoogleMap, Marker  } from 'react-google-maps' ;
import { Button } from 'antd';

 class LocationMap extends Component {
    
    constructor(props){
        super(props)

          
    }

 
 
    render() {
   

                    return (
                    
                                <GoogleMap 
                    
                                        defaultCenter = {  new window.google.maps.LatLng(14.979900,100.501762)}

                                        defaultZoom={10}
                                        
                                        defaultMapTypeId= 'roadmap'

                                        center= {  new window.google.maps.LatLng(14.979900,100.501762) }

                                        zoom={10}
                                        
                                    > 
                                    
                                       
                                        <Marker   

                                            position = { new window.google.maps.LatLng(14.979900,100.501762) }         
                                        //  onClick={()=> this.setState({isOpen:true})}
                                            title= "test"  
                                            icon = {  { 
                                                        url: 'https://image.flaticon.com/icons/svg/584/584517.svg' ,
                                                        anchor: new window.google.maps.Point(40, 40),
                                                        scaledSize: new window.google.maps.Size(40, 40)    
                                                    } } 
                                        
                                            
                                        />
                                
                            </GoogleMap> 
                                            
                    )
        }
    }


const WrappedMap = withScriptjs(withGoogleMap(LocationMap));


  
 export default connect() (WrappedMap);