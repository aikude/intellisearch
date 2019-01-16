import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { users } from './users';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      items: [],
      searchtext: ''
    }    
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => { return response.json() })
      .then(responseitems => this.setState({items: responseitems}));
  }

  onSearchChange = (event) => {
    this.setState({ searchtext: event.target.value })
  }

  render(){
    const {searchtext, items} = this.state;
    const searchResults = items.filter(item => { return item.name.toLowerCase().includes(searchtext.toLowerCase()); });
    console.log(searchResults);

    if (!items.length){ return <h1 className="tc">Loading...</h1>}
    else {
    return (
      <div className="tc">
        <h1 className="f1">Smart Cats</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList items={searchResults} />
      </div>
    ); 
    } 
  }
 }

export default App;
