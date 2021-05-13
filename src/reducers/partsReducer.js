const partsReducer = (state = {parts: []}, action) => {
    switch(action.type){
        case "ADD_PARTS":
            return{...state,
                parts:[...state.parts]
            }
            default:
                return state;

    }
}


export default partsReducer