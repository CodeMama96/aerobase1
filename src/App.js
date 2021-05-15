import './App.css'
import SearchBar from './components/SearchBar'

import PartsContainer from './components/PartsContainer';

import PartList from './containers/PartList'

import {fetchParts} from './actions/partActions'
import { Component } from 'react';
import { connect } from 'react-redux';

import Search from './components/Search'

class App extends Component {

  state = {
    search: ""
  }

  componentDidMount(){
    this.props.fetchParts()
  }

  render (){
    return (
        <div className="App">

         
              <header className="App-header">
                  <h1><i>Hay! Open for Business</i></h1>
                    <Search/>
                    <SearchBar/>
                    <PartsContainer/>

                    <PartList/>

                   
              </header>
          
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchParts: () => dispatch(fetchParts())
  }
}

export default connect(null, mapDispatchToProps)(App);


//Components
//1. search bar on each page(nav bar?)
//2. container for the parts
//3. each part description
//4. 