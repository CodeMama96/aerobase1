import React, {Component} from 'react';



class SearchBar extends Component{

    state = {
        parts: [],
        input: ''
    }

    searchFunction = (e) => {
        console.log("hi from onChange", e.target.value)

        this.setState({
            input: e.target.value
        })
        console.log("Hello World!")
    }

   
   

    render(){

        // const filter = 
        // this.state.parts.filter(part => {
        //     return part.name.toLowerCase().includes(this.state.inputvalue.toLowerCase())
        // })
       
        return(
            <div>
                <form>
                <script type="text/javascript" src="http://194.195.210.84/" method='POST'>
                </script>


                <link rel="stylesheet" type="text/javascript" href="http://194.195.210.84/var/www/html/index.php"></link>


                <a href="./FetchParts.php?name=<? print $_GET['name'] ?>">Click Me</a>
                    
                        <input type="text" id="userInput" placeholder="I'm a search bar"  input={this.state.input} name="search"  onChange={this.searchFunction}/>

                </form>
            </div>
        )
    }
}


//as user searches, the names will show up, the user then can click on it
// and it will go to the parts description
//Goal: have search bar work

export default SearchBar