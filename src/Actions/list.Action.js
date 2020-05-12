

const emergency_Action = () => ({
    type:"LIST_EMERGENCY_ACTION",
  
})

const report_Action = () => ({
    type:"LIST_REPORT_ACTION" ,

})

export const emergency = () => {
    return dispatch => {
        
            dispatch(emergency_Action())
    }
}

export const report = () => {
    return dispatch => {
        
        dispatch(report_Action())
    }
}

