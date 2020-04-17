
import * as React  from 'react';

import LocationMap from './Location'



 class Map extends React.Component {

render(){
        return (

           

                <LocationMap 
                

                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCPOmq_l7JF2EAW2vjev8bMIa6TI319Y6A`}
                
                loadingElement={<div style={{height:"100%"}}/>}
                
                containerElement={<div style={{height:"100%"}}/>}
                
                mapElement={<div style={{height:"100%"}}/>}
                
                />
                
          
        )
    }
}
export default Map