import React, {Component} from 'react';
import Part from "../components/Part";

import {fetchParts} from '../actions/partActions'


class PartList extends Component{


    partList(){

    return console.log("PartList Container")
        // let displayedParts = this.props.parts 
        //     return displayedParts.map( part =>
        //         <Part
        //             // name={part.name}
        //             // niin={part.niin}
        //             // inc={part.inc}
        //             // fsc={part.fsc}
        //             // publication_date={part.publication_date}
        //             />)
    }

    render(){
        return(
            <div className="part-container">
                {this.partList()}
            </div>
        )
    }
}

export default PartList