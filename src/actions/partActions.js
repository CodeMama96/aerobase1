const url = 'http://localhost:3000/parts'

export const fetchParts = () => {

    return (dispatch) => {
        // dispatch({type: 'FETCHING_PARTS'})
        fetch(url)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log( 'Im a part fetch', responseJSON)
            dispatch({type: 'FETCHING_PARTS', parts: responseJSON}) 
        })
    }
}


//I basically want this to return array(5)



// let array(5) = { 
//     ["NIIN"]=> string(2) "42",
//     ["NAME"]=> string(18) "CK FILTER ASSEMBLY",
//     ["INC"]=> string(5) "gh77777",
//     ["FSC"]=> string(4) "8940",
//     ["PUBLICATION_DATE"]=> string(8) "AUG 2013"
// }