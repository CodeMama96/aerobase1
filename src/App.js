import './App.css'
// import SearchBar from './components/SearchBar'
import PartList from './containers/PartList'
import {fetchParts} from './actions/partActions'
import { Component } from 'react';
import { connect } from 'react-redux';
// import './bootstrap.min.css'


class App extends Component {

  state = {
    search: ''
  }

  componentDidMount(){
    this.props.fetchParts()
    //limit 15 parts at a time
  }

  render (){
    return (
        <div className="App" >
        
              <header className="App-header">
              
                  <div className="App-background"></div>
                      <h1>AeroBase Group</h1>
                      <h3><i>Search For Parts</i></h3>
                      
                  
              </header>
            <PartList parts= {this.props.parts}/>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    fetchParts: () => dispatch(fetchParts())
  }
}

const mapStateToProps = (state) => {
  // debugger;

  return({
    parts: state.parts
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


//Components
//1. search bar on each page(nav bar?)
//2. container for the parts
//3. each part description
//4. 15 parts at a time, refresh page, new parts will come up