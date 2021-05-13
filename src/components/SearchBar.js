import React, {Component} from 'react';



class SearchBar extends Component{
    render(){


        const searchFunction = () => {
            console.log("Hello World!")
        }

        return(
            <div>
                <form>
                <script type="text/javascript" src="http://194.195.210.84/" method='POST'>
                </script>


                <link rel="stylesheet" type="text/javascript" href="http://194.195.210.84/"></link>
                    <input type="text" id="userInput" placeholder="I'm a search bar" title="Type Part Number" onChange={searchFunction} />
                        <ul id="byName">
                            <li><button>CK FILTER ASSEMBLY</button></li>
                            <li><button>TERMINAL BOARD ASSEMBLY</button></li>

                            <li><button>MODIFICATION KIT,AIRFRAME</button></li>
                            <li><button>ENGINE,AIRCRAFT,TURBO-SHAFT</button></li>

                            <li><button>MODIFICATION KIT,ENGINE</button></li>
                            <li><button>COMPRESSOR UNIT,RECIPROCATING</button></li>
                            <li><button>ELECTRON TUBE</button></li>
                        </ul>

                </form>
            </div>
        )
    }
}



export default SearchBar