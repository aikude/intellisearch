import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { setSearchValue, requestItems } from '../actions';
import { connect } from 'react-redux';
//import { users } from './users';
import './App.css';

const mapStateToProps = state => {
  return {
    searchValue: state.searchItems.searchValue,
    items: state.requestItems.items,
    isPending: state.requestItems.isPending,
    error: state.requestItems.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchValue(event.target.value)),
    onRequestItems: () => dispatch(requestItems())
  }
}

class App extends React.Component {
  componentDidMount(){
    this.props.onRequestItems();
  }

  render(){
    const { searchValue, onSearchChange, items, isPending } = this.props;
    const searchResults = items.filter(item => { return item.name.toLowerCase().includes(searchValue.toLowerCase()); });
    //console.log(searchResults);

    if (isPending){ return <h1 className="tc">Loading...</h1>}
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
