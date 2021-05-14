import React, {Component} from 'react';



class SearchBar extends Component{

    state = {
        parts: [],
        partNumber: ''
    }

    searchFunction = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state)
        )
        console.log("Hello World!")
    }

    render(){
       

        return(
            <div>
                <form>
                <script type="text/javascript" src="http://194.195.210.84/" method='POST'>
                </script>


                <link rel="stylesheet" type="text/javascript" href="http://194.195.210.84/var/www/html/index.php"></link>


                <a href="./FetchParts.php?name=<? print $_GET['name'] ?>">Click Me</a>

                    <input type="text" id="userInput" placeholder="I'm a search bar" value={this.state.partNumber} name="partNumber"  onChange={this.searchFunction} />
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