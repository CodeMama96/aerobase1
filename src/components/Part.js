//each part that gets iterated will be here and it's going to be a link

//aerobasegroup.`nsn`, 
//aerobasegroup.`nsn_flis_parts`, 
//aerobasegroup.`nsn_characteristics`



function Part({part}){

    return(
        <div className="part" >
            <p>NAME= {`${part.name}`} <br/>NIIN= {`${part.niin}`}<br/>INC= {`${part.inc}`}<br/>fsc= {`${part.fsc}`}<br/>PUBLICATION DATE= {`${part.publication_date}`} </p>
            <br/>
        </div>
    )
}

export default Part
