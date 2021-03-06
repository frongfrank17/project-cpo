import React, { Component  } from 'react'
import { connect } from 'react-redux';
import { GoogleMap ,withScriptjs, withGoogleMap, Marker  } from 'react-google-maps' ;
import { Map_User } from '../../../Reducers/Map.Reducer';
import { ws } from '../../../Configs/ConfigEmergency'
    const io = ws 
 class LocationMap extends Component {
    
    constructor(props){
        super(props)

    }
    componentDidCatch(){
      // console.log(">>Catch"+this.props.location.user_location)
    }
    componentDidUpdate(){
      //  console.log("Update"+this.props.location.user_location.latitude)
    }
 
 
    render() {
            const { userLocation ,serviceLocation , Zoom } = this.props.location 
            const user = new window.google.maps.LatLng(userLocation.userLatitude,userLocation.userLongitude)
            const service = new window.google.maps.LatLng(serviceLocation.serviceLatitude,serviceLocation.serviceLongitude)
                    return (
                    
                                <GoogleMap 
                    
                                        defaultCenter = {  new window.google.maps.LatLng(15.870032,100.992538)}

                                        defaultZoom={10}
                                        
                                        defaultMapTypeId= 'roadmap'

                                        center= {  user }

                                        zoom={Zoom}
                                        
                                    > 
                                    
                                        
                                        <Marker   

                                            position = { user }         
                                        //  onClick={()=> this.setState({isOpen:true})}
                                            title= "Emergency"  
                                            icon = {  { 
                                                        url: 'https://image.flaticon.com/icons/svg/584/584517.svg' ,
                                                        anchor: new window.google.maps.Point(40, 40),
                                                        scaledSize: new window.google.maps.Size(40, 40)    
                                                    } } 
                                        
                                            
                                        />
                                         <Marker   

                                            position = { service }         
                                            //  onClick={()=> this.setState({isOpen:true})}
                                            title= "STAFFSERVICE"  
                                            icon = {  { 
                                                        url: 'https://image.flaticon.com/icons/png/512/128/128661.png' ,
                                                        anchor: new window.google.maps.Point(40, 40),
                                                        scaledSize: new window.google.maps.Size(40, 40)    
                                                    } } 


                                        />
                                
                            </GoogleMap> 
                                            
                    )
        }
    }


const WrappedMap = withScriptjs(withGoogleMap(LocationMap));


  const mapStateToProps = (state) => {
      return {
          location: state.Map_User
      }
  }
 export default connect(mapStateToProps) (WrappedMap);