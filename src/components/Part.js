//each part that gets iterated will be here and it's going to be a link

//aerobasegroup.`nsn`, 
//aerobasegroup.`nsn_flis_parts`, 
//aerobasegroup.`nsn_characteristics`



function Part({part}){

    return(
        <div className="part" >
            <p>name= {`${part.name}`}</p>
            <p>niin= {`${part.niin}`} </p>
            <p>inc= {`${part.inc}`} </p>
            <p>fsc= {`${part.fsc}`} </p>
            <p>publication_date= {`${part.publication_date}`} </p>
        </div>
    )
}

export default Part
