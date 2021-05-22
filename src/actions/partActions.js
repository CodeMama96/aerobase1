const url = 'http://localhost:3000/parts?amount=15'

export const fetchParts = () => {
    
    return (dispatch) => {
        fetch(url)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log( 'Im a part fetch', {parts: responseJSON})
            dispatch({type: 'FETCHING_PARTS', payload: responseJSON})
        })
    }
}


//pagenation, page 1, page 2 etc

//I basically want this to return array(5)



// array(5) = { 
//     ["NIIN"]=> string(2) "42",
//     ["NAME"]=> string(18) "CK FILTER ASSEMBLY",
//     ["INC"]=> string(5) "gh77777",
//     ["FSC"]=> string(4) "8940",
//     ["PUBLICATION_DATE"]=> string(8) "AUG 2013"
// }