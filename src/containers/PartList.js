import React, {Component} from 'react';
import Part from "../components/Part";


class PartList extends Component{


    renderPartList(){
        let displayedParts = this.props.parts
            return displayedParts.map( (part, index) =>
             
                <Part key={index} part={part}

                />
            )
    }

    render(){
       console.log(this.props.parts)
        return(
            <div className="part-container">
                 {this.renderPartList()}
            </div>
        )
    }
}

export default PartList