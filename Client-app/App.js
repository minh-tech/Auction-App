import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';


import ItemList from './components/ItemList';
import SearchInput from './components/SearchInput';

class App extends Component {
  constructor(props) {
    super(props);
    const dataJson = [
      {"id":"01","name":"Storage 1","description":"Storage Unit 1","price":"400","category":"Storage Unit", "starttime":"2020-03-22T17:00:00"},
      {"id":"02","name":"Storage 2","description":"Storage Unit 2","price":"300","category":"Storage Unit", "starttime":"2020-03-21T15:00:00"},
      {"id":"03","name":"Nokia 3310","description":"Nokia 3310 cell phone","price":"100","category":"Cell Phone", "starttime":"2020-03-20T08:00:00"},
      {"id":"04","name":"Apple Macintosh 1984","description":"Apple Macintosh on 1984","price":"200","category":"Computer", "starttime":"2020-03-22T10:00:00"},
      {"id":"05","name":"1956 Ford Sunliner","description":"Classic car Ford","price":"16000","category":"Automobile", "starttime":"2020-03-21T12:00:00"},
      {"id":"06","name":"1957 Chevrolet Bel Air","description":"Classic car Chevrolet","price":"32000","category":"Automobile", "starttime":"2020-03-20T21:00:00"},
      {"id":"07","name":"Rolex Submariner Hulk Green","description":"Rolex watch","price":"29000","category":"Watch", "starttime":"2020-03-21T00:00:00"},
    ];

    const images = {
      '01': [
        require('./assets/images/01-storage-01.jpg'),
        require('./assets/images/01-storage-02.jpg')
      ],
      '02': [
        require('./assets/images/02-storage-01.jpg'),
      ],
      '03': [
        require('./assets/images/03-cellphone-01.jpg'),
        require('./assets/images/03-cellphone-02.jpg')
      ],
      '04': [
        require('./assets/images/04-AppleMac-01.jpg'),
      ],
      '05': [
        require('./assets/images/05-FordCar-01.jpg'),
        require('./assets/images/05-FordCar-02.jpg')
      ],
      '06': [
        require('./assets/images/06-ChevroletCar-01.jpg'),
        require('./assets/images/06-ChevroletCar-02.jpg')
      ],
      '07': [
        require('./assets/images/07-Rolex-01.jpg'),
        require('./assets/images/07-Rolex-02.jpg')
      ]
    };

    this.state = { filter: '',
                    data: dataJson,
                    imagesData: images,
                    localData: true
                  }
  }

  // Add the search string to state
  filterItemHandler = (enteredText) => {
    enteredText = enteredText.trim();
    this.setState({
      filter: enteredText
    });
  }

  // Request data from server
  componentDidMount(){
    // fetch("http://192.168.2.81:900/items/list")
    //     .then(res => res.json())
    //     .then((result) => {
    //       this.setState({
    //         data: result,
    //         localData: false
    //       });
    //     })
  }
  render() {
    return (
      <View>
        <View style={styles.Screen}>
          <Text style={styles.CompanyName}>Online Auction</Text>
          <SearchInput
            onAddSearch={this.filterItemHandler}
          />
          <ItemList
            data={this.state.data}
            searchText={this.state.filter}
            images={this.state.imagesData}
          />
        </View>
        <Text style={styles.Notification}>
          {this.state.localData
            ? "This is local data for testing."
            : "This is server data."
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Screen: {
    padding: 50,
  },
  CompanyName: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
  },
  Notification: {
    color: 'red',
  },
});

export default App;