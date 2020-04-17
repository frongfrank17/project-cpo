const ListState = {
    listdata:""
}
export const Lists = (state = ListState , action) => {
    switch (action.type) {
        case "LIST_EMERGENCY_ACTION" :
            return { listdata:"emergency-cell" }
        case "LIST_REPORT_ACTION" :
            return { listdata:"stolen-report" }
        default :
            return state
    }
}