export const fetchParts = () => {
    
    return (dispatch) => {
        dispatch({type: 'FETCHING_PARTS'})
        //     let url = 'http://localhost:3000/parts'
        // fetch(url).then(async response => {
        //     try {
        //      const data = await response.json()
        //      console.log('response data?', data)
        //    } catch(error) {
        //      console.log('Error happened here!')
        //      console.error(error)
        //    }
        //   })
        fetch('http://localhost:3000/parts')
        
        ///var/www/html/index.php
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