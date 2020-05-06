import React, { Component  } from 'react'
import { connect } from 'react-redux';
import { GoogleMap ,withScriptjs, withGoogleMap, Marker  } from 'react-google-maps' ;

 class LocationMap extends Component {
    
    constructor(props){
        super(props)

          
    }
    componentDidCatch(){
      console.log("Catch"+this.props.location.map.latitude)
    }
    componentDidUpdate(){
        console.log("Update"+this.props.location.map.latitude)
    }
 
 
    render() {
            const { map } = this.props.location 
            const user = new window.google.maps.LatLng(map.latitude , map.longitude)
                    return (
                    
                                <GoogleMap 
                    
                                        defaultCenter = {  new window.google.maps.LatLng(15.870032,100.992538)}

                                        defaultZoom={10}
                                        
                                        defaultMapTypeId= 'roadmap'

                                        center= {  user }

                                        zoom={10}
                                        
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
                                
                            </GoogleMap> 
                                            
                    )
        }
    }


const WrappedMap = withScriptjs(withGoogleMap(LocationMap));


  const mapStateToProps = (state) => {
      return {
          location: state.Map_Report
      }
  }
 export default connect(mapStateToProps) (WrappedMap);