const initialUserState = {
    userLocation :[],
    serviceLocation : [] ,
    Zoom : 10
}

const initialReportState = {
    map:[] 
}

export const Map_User = (state = initialUserState , action) => {
    switch (action.type) {
        case    'EMERGENCY_MAP_ACTION':
                return { userLocation: action.userMap , serviceLocation:action.serviceMap, Zoom:15  }
    
        default:
            return state
    }
}

export const Map_Report = (state = initialReportState , action) => {
    switch(action.type) {
        case 'REPORT_MAP_ACTION' : 
            return { map:action.payload }
        default : 
            return state 
    }
}

