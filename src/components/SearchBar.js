import React, {Component} from 'react';



class SearchBar extends Component{

    state = {
        parts: [],
        search: "",
        input: 'my input',

    }


    handleInputChange = (e) => {
        console.log(e.target.value)
        const search = e.target.value
        this.setState({search: search})
    }

   
//    componentDidMount(){
//        const url ="http://194.195.210.84/"

//        fetch(url)
//        .then(res=> res.json())
//        .then(json =>{
//            console.log(json)
//            this.setState({parts: json
//          }, ()=> console.log(this.state)) //console log to check setState so multiples do not fire off
//        })
//    }
//getting CORS issue, from origin http://localhost:3001?

    render(){

       
        return(
            <div>
                <form>
                {/* <script type="text/javascript" src="http://194.195.210.84/" method='POST'>
                </script>


                <link rel="stylesheet" type="text/javascript" href="http://194.195.210.84/var/www/html/index.php"></link>


                <a href="./FetchParts.php?name=<? print $_GET['name'] ?>">Php FetchParts Link</a>
                     */}
                        {/* <input type="text" id="userInput" placeholder="Search For Part" onChange={this.handleInputChange}/> */}

                </form>
          
            </div>
        )
    }
}


//as user searches, the names will show up, the user then can click on it
// and it will go to the parts description
//Goal: have search bar work

export default SearchBar