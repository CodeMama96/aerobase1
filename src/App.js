import './App.css'
import SearchBar from './components/SearchBar'

import PartsContainer from './components/PartsContainer';


import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import About from './About'



function App() {
    return (
        <div className="App">

          <Router>
              <header className="App-header">
                  <h1><i>Hay! Open for Business</i></h1>
                
                    <SearchBar/>
                    <PartsContainer/>

                    <Route exact path='/about' component={About}></Route>
                          

              </header>
            </Router>
        </div>
    );
}

export default App;


//Components
//1. search bar on each page(nav bar?)
//2. container for the parts
//3. each part description
//4. 