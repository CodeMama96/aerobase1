import React, {Component} from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" id="userInput" placeholder="I'm a search bar" title="Type Part Number" onChange="searchFunction()"/>
                        <ul id="byName">
                            <li><a href="#">CK FILTER ASSEMBLY</a></li>
                            <li><a href="#">TERMINAL BOARD ASSEMBLY</a></li>

                            <li><a href="#">MODIFICATION KIT,AIRFRAME</a></li>
                            <li><a href="#">ENGINE,AIRCRAFT,TURBO-SHAFT</a></li>

                            <li><a href="#">MODIFICATION KIT,ENGINE</a></li>
                            <li><a href="#">COMPRESSOR UNIT,RECIPROCATING</a></li>
                            <li><a href="#">ELECTRON TUBE</a></li>
                        </ul>

                        
                </form>
            </div>
        )
    }
}



export default SearchBar