import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { setSearchValue, requestItems } from '../actions';
import { connect } from 'react-redux';
//import { users } from './users';
import './App.css';

class App extends React.Component {
  // Load default list on App load
  componentDidMount(){
    this.props.requestItems();
  }

  render(){
    const { searchValue, setSearchValue, items, isPending } = this.props;
    const searchResults = items.filter(item => { return item.name.toLowerCase().includes(searchValue.toLowerCase()); });
    //console.log(searchResults);

    if (isPending){ return <h1 className="tc">Loading...</h1>}
    else {
      return (
        <div className="tc">
          <h1 className="f1">Smart Cats</h1>
          <SearchBox setSearchValue={setSearchValue} />
          <CardList items={searchResults} />
        </div>
      );
    }
  }
 }

 const mapStateToProps = state => {
  return {
    searchValue: state.searchItems.searchValue,
    items: state.requestItems.items,
    isPending: state.requestItems.isPending,
    error: state.requestItems.error
  }
}

export default connect(mapStateToProps, { setSearchValue, requestItems })(App);
