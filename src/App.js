import './App.css'
import SearchBar from './components/SearchBar'



import PartList from './containers/PartList'

import {fetchParts} from './actions/partActions'
import { Component } from 'react';
import { connect } from 'react-redux';



class App extends Component {

  state = {
    search: ''
  }

  componentDidMount(){
    this.props.fetchParts()
  }

  render (){
    return (
        <div className="App">
              <header className="App-header">
                  <h1><i>Hay! Open for Business</i></h1>
                    <SearchBar/>
                    
                    <PartList parts={this.props.parts}/>
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

const mapStateToProps = state => {

  return{
    parts: state.parts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


//Components
//1. search bar on each page(nav bar?)
//2. container for the parts
//3. each part description
//4. 