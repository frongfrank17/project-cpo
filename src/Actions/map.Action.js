const EmergecyMap = payload => ({
    type:"EMERGENCY_MAP_ACTION", 
    payload
})


export const EmergencyAction = (location) => {
    return dispatch => {
        dispatch(EmergecyMap(location))
    }
}
