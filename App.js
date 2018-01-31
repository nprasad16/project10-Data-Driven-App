/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ajax from './ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';

export default class App extends Component<{}> {
  state={
    deals: [],
    currentDealId: null,
  };
async componentDidMount(){
  const deals = await ajax.fetchInitialDeals();
  this.setState((prevState) => {
    return { deals };
  });
}

setCurrentDeal = (dealId) => {
  this.setState({
    currentDealId: dealId,
  });
};
unSetCurrentDeal = () => {
  this.setState({
    currentDealId: null,
  });
};
currentDeal = () => {
  return this.state.deals.find(
    (deal) => deal.key === this.state.currentDealId
  );
};

  render() {
    if(this.state.currentDealId){
      return <DealDetail initialDealData={this.currentDeal( )}
      onBack={this.unSetCurrentDeal}/>
    }
    if(this.state.deals.length>0){
      return <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal}/>
    }
    return (
      <View style={styles.container}>
      {
        <Text style={styles.welcome}>BakeSale</Text>
      }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
