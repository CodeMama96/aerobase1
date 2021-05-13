import React, {Component} from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div>
                <form>
                    <input className="search-bar" type="text" placeholder="I'm a search bar" name="SearchBar"/>
                    <input className="search-bar" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}



export default SearchBar