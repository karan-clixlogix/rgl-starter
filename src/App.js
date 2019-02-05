import React, { Component } from 'react';
// import logo from './logo.svg'
import './App.css';
// import MyFirstGrid from "./Components/MyFirstGrid";
import MySecondGrid from "./Components/MySecondGrid";
// import MyResponsiveGrid from "./Components/MyResponsiveGrid";
// import MyResponsiveGridHOC from "./Components/MyResponsiveGridHOC";
// import ElasticSearch from "./Components/ElasticSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<ElasticSearch/>*/}
            {/*<h1>Hello RGL</h1>*/}
            {/*<MyFirstGrid/>*/}
        <MySecondGrid/>

          {/*<MyResponsiveGrid/>*/}
          {/*<MyResponsiveGridHOC/>*/}
      </div>
    );
  }
}

export default App;
