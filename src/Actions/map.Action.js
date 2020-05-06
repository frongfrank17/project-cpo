import { ws } from "../Configs/ConfigEmergency"

const EmergecyMap = (userMap , serviceMap) => ({
    type:"EMERGENCY_MAP_ACTION", 
    userMap, serviceMap
})

const ReportMap = payload => ({
    type:"REPORT_MAP_ACTION" ,
    payload
})
export const EmergencyAction = (userId) => {
    return dispatch => {
        //Wdispatch(EmergecyMap(location))
        ws.emit("select-room" , userId)
        setInterval(()=>{
            ws.on(userId , (msg)=> 
            {                
                let result = JSON.parse(msg)
                let userMap = result.userLocation
                let serviceMap = result.serviceLocation
                
            
               dispatch(EmergecyMap(userMap , serviceMap))
            })
        } , 5000)
    }
}

export const ReportAction = (location) => {
    return dispatch => {
        console.log(location)
           // let payload = {latitude : 13.8557577 , longitude : 100.5834687}
        dispatch(ReportMap(location))
    }
}