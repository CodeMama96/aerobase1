export const fetchParts = () => {
    
    return () => {
        // dispatch({type: 'FETCHING_PARTS'})
        fetch('http://194.195.210.84')///var/www/html/index.php
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log( 'Im a part fetch', responseJSON)
            // dispatch({parts: responseJSON}) 
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