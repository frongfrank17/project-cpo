const initialUserState = {
    user_location :[],
    staff_location : []
}

const initialReportState = {
    location:[] 
}

export const Map_User = (state = initialUserState , action) => {
    switch (action.type) {
        case    'EMERGENCY_MAP_ACTION':
                return { user_location: action.payload  }
    
        default:
            return state
    }
}

