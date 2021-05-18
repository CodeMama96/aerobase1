const partsReducer = (state = {parts: []}, action) => {
    
    switch(action.type){
        
        case "FETCHING_PARTS":
            console.log(action.payload)
            return{
                ...state,
                parts: [...action.payload] //for refreshing
            }

            default:
                return state;
    }
}


export default partsReducer