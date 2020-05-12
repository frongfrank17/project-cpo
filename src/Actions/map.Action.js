import { ws } from "../Configs/ConfigEmergency"
import { useEffect } from "react"

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
      
        ws.emit("MAPLOCATION" , localStorage.getItem("userIdMap"))
        if(localStorage.getItem("userIdMap") == userId) {
           // setInterval(()=>{
                ws.on(userId , (msg) => {
                    let result = JSON.parse(msg)
                    
                    if( localStorage.getItem("userIdMap")===result.userId ) { 
                        console.log("INTERVAR >>"+result.userId)
                    dispatch(EmergecyMap(result.userLocation , result.serviceLocation))
                    }
                })
           // },5000)
        }else{
            console.log("Find Not localstorage != userId")
        }
  





    }
}


export const ReportAction = (location) => {
    return dispatch => {
        console.log(location)
           // let payload = {latitude : 13.8557577 , longitude : 100.5834687}
        dispatch(ReportMap(location))
    }
}
