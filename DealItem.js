import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import {priceDisplay} from './util';


export default class DealItem extends React.Component{
  static propTypes ={
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };
render(){
  return (
    <TouchableOpacity style={styles.deal}  onPress={this.handlePress}>
      <Image
      source={{ uri: this.props.deal.media[0] }}
      style={styles.image}/>
    <View style={styles.info}>
      <Text style={styles.title}>{this.props.deal.title}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{priceDisplay(this.props.deal.price)}</Text>
          <Text style={styles.cause}>{this.props.deal.cause.name}</Text>
          </View>
    </View>
    </TouchableOpacity>
  );
}
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal : 12,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    borderWidth: 1,
    padding : 10,
    backgroundColor: '#fff',
    borderColor:'#bbb',
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});
