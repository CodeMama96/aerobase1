const partsReducer = (state = {parts: []}, action) => {
    switch(action.type){
        
        case "FETCHING_PARTS":
            return{
                
                ...state
                
            }
            default:
                return state;

    }
}


export default partsReducer