import React, { useState } from 'react';
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

export default function App() {

  const dataJson = [
    {"id":"01","name":"Storage 1","description":"Storage Unit 1","price":"400","category":"Storage Unit"},
    {"id":"02","name":"Storage 2","description":"Storage Unit 2","price":"300","category":"Storage Unit"},
    {"id":"03","name":"Nokia 3310","description":"Nokia 3310 cell phone","price":"100","category":"Cell Phone"},
    {"id":"04","name":"Apple Macintosh 1984","description":"Apple Macintosh on 1984","price":"200","category":"Computer"},
    {"id":"05","name":"1956 Ford Sunliner","description":"Classic car Ford","price":"16000","category":"Automobile"},
    {"id":"06","name":"1957 Chevrolet Bel Air","description":"Classic car Chevrolet","price":"32000","category":"Automobile"},
    {"id":"07","name":"Rolex Submariner Hulk Green","description":"Rolex watch","price":"29000","category":"Watch"}
  ];

  const [filter, setFilter] = useState('');

  const filterItemHandler = (enteredText) => {
    enteredText = enteredText.trim();
    setFilter(enteredText);
}

  return (
    <View style={styles.Screen}>
      <Text style={styles.CompanyName}>Online Auction</Text>
      <SearchInput
        onAddSearch={filterItemHandler}
      />

      <ItemList
        data={dataJson}
        searchText={filter}
      />
    </View>
  );
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
});