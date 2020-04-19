const EmergecyMap = payload => ({
    type:"EMERGENCY_MAP_ACTION", 
    payload
})
const ReportMap = payload => ({
    type: "REPORT_MAP_ACTION" , 
    payload
})

export const EmergencyAction = (location) => {
    return dispatch => {
        dispatch(EmergecyMap(location))
    }
}
export const ReportAction = (location) => {
    return dispatch => {
        dispatch(ReportMap(location))
    }
}