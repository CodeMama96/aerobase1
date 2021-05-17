import React, {Component} from 'react';
import Part from "../components/Part";


class PartList extends Component{


    renderPartList(){

        let displayedParts = this.state.parts 
            return displayedParts.map( part =>
                <Part
                    name={part.name}
                    niin={part.niin}
                    inc={part.inc}
                    fsc={part.fsc}
                    publication_date={part.publication_date}
                    />)
    }

    render(){
        return(
            <div className="part-container">
                {this.renderPartList()}
            </div>
        )
    }
}

export default PartList