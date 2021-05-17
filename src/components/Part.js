//each part that gets iterated will be here and it's going to be a link

//aerobasegroup.`nsn`, 
//aerobasegroup.`nsn_flis_parts`, 
//aerobasegroup.`nsn_characteristics`

const Part = props =>{
   
    return(
        <div className="part" >
            name={props.name}
            niin={props.niin}
            inc={props.inc}
            fsc={props.fsc}
            publication_date={props.publication_date}
        </div>
    )
}

//data is not being passed down??


export default Part
