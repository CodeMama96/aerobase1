import React, {Component} from 'react';



class SearchBar extends Component{

    state = {
        parts: [],
        search: ''
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
    
//    search_part = () => {
//         let input = document.getElementById('userInput').value
//         input = input.toLowerCase();
//         let x = document.getElementsByClassName('partName');

         
//         for (i = 0; i < x.length; i++) { 
//             if (!x[i].innerHTML.toLowerCase().includes(input)) {
//                 x[i].style.display="none";
//             }
//             else {
//                 x[i].style.display="list-item";                 
//             }
//         }
// }
   

    render(){
       


        return(
            <div>
                <form>
                <script type="text/javascript" src="http://194.195.210.84/" method='POST'>
                </script>


                <link rel="stylesheet" type="text/javascript" href="http://194.195.210.84/var/www/html/index.php"></link>


                <a href="./FetchParts.php?name=<? print $_GET['name'] ?>">Click Me</a>
                    <body>
                        <input type="text" id="userInput" placeholder="I'm a search bar" value={this.state.partNumber} name="search"  onChange={this.searchFunction}/>
                            <ul id="byName">
                                <li class="partName"><button>CK FILTER ASSEMBLY</button></li>
                                <li class="partName"><button>TERMINAL BOARD ASSEMBLY</button></li>

                                <li class="partName"><button>MODIFICATION KIT,AIRFRAME</button></li>
                                <li class="partName"><button>ENGINE,AIRCRAFT,TURBO-SHAFT</button></li>

                                <li class="partName"><button>MODIFICATION KIT,ENGINE</button></li>
                                <li class="partName"><button>COMPRESSOR UNIT,RECIPROCATING</button></li>
                                <li class="partName"><button>ELECTRON TUBE</button></li>
                            </ul>

                            <script></script>
                    </body>
                </form>
            </div>
        )
    }
}


//as user searches, the names will show up, the user then can click on it
// and it will go to the parts description
//Goal: have search bar work

export default SearchBar