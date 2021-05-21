import React, {Component} from 'react';
import Part from "../components/Part";


class PartList extends Component{
    state = {
        parts: [],
        search: ""
    }



    renderPartList(){
        let displayedParts = this.props.parts

        if(this.state.search){
            displayedParts = this.props.parts.filter(
                (part) => part.name.toLowerCase().includes(this.state.search.toLowerCase()) || part.niin.includes(this.state.search) 
                || part.fsc.includes(this.state.search) || part.publication_date.includes(this.state.search) || part.inc.includes(this.state.search)
            )
        }
        return displayedParts.map( (part, index) => <Part key={index} part={part}/>)
    }

    handleInputChange = (e) => {
        //console.log(e.target.value)
        const search = e.target.value
        this.setState({search: search})
    }

    render(){
      // console.log(this.props.parts)
        return(
            <div className="part-container">
             <input type="text" id="userInput" placeholder="Search For Part" onChange={this.handleInputChange}/>
                 {this.renderPartList()}
            </div>
        )
    }
}

export default PartList