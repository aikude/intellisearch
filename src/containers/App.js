import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { setSearchValue } from '../actions';
import { connect } from 'react-redux';
//import { users } from './users';
import './App.css';

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return { onSearchChange: (event) => dispatch(setSearchValue(event.target.value)) }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      items: [],
    }    
  }

  componentDidMount(){
    //console.log(this.props.store.getState());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => { return response.json() })
      .then(responseitems => this.setState({items: responseitems}));
  }

  render(){
    const { items } = this.state;
    const { searchValue, onSearchChange } = this.props;
    const searchResults = items.filter(item => { return item.name.toLowerCase().includes(searchValue.toLowerCase()); });
    //console.log(searchResults);

    if (!items.length){ return <h1 className="tc">Loading...</h1>}
    else {
    return (
      <div className="tc">
        <h1 className="f1">Smart Cats</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList items={searchResults} />
      </div>
    ); 
    } 
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);
