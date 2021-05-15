const partsReducer = (state = {parts: []}, action) => {
    switch(action.type){
        case "FETCHING_PARTS":
            return{
                ...state,
                parts: action.parts
            }
            default:
                return state;

    }
}


export default partsReducer