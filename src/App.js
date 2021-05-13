import './App.css'
import SearchBar from './components/SearchBar'

import PartsContainer from './components/PartsContainer';

import PartList from './containers/PartList'



function App() {
    return (
        <div className="App">

         
              <header className="App-header">
                  <h1><i>Hay! Open for Business</i></h1>
                
                    <SearchBar/>
                    <PartsContainer/>

                    <PartList/>

                   
              </header>
          
        </div>
    );
}

export default App;


//Components
//1. search bar on each page(nav bar?)
//2. container for the parts
//3. each part description
//4. 