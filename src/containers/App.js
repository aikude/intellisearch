import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Alerts from '../components/Alerts';
import { setSearchValue, requestItems, createAlert, clearAlerts } from '../actions';
import { connect } from 'react-redux';
//import { users } from './users';
import './App.css';

class App extends React.Component {
  // Load default list on App load
  componentDidMount(){
    this.props.clearAlerts();
    this.props.requestItems();
  }

  render(){
    const { searchValue, setSearchValue, items, isPending, alerts } = this.props;
    const searchResults = items.filter( item => item.name.toLowerCase().includes(searchValue.toLowerCase()) );
    //console.log(searchResults);

    if (isPending){ return <h1 className="tc">Loading...</h1>}
    else {
      return (
        <div className="tc">
          <h1 className="f1">Smart Cats</h1>
          <Alerts alerts={alerts} />
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
    error: state.requestItems.error,
    alerts: state.alerts.alerts
  }
}

export default connect(mapStateToProps, { setSearchValue, requestItems, createAlert, clearAlerts })(App);
