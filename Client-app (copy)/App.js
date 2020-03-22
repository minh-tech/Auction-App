import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  FlatList
} from 'react-native';

import FilteredItems from './components/FilteredItems';
import HeaderApp from './components/HeaderApp';

export default function App() {
  
  const [filteredItems, setFilteredItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addSearchHandler = (searchItem) => {
    Keyboard.dismiss();
    setFilteredItems(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: searchItem }
    ]);
    setIsAddMode(false);
  }

  const removeItemHandler = itemId => {
    setFilteredItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  }

  const cancelSearchHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.Screen}>
      <Text style={styles.CompanyName}>Online Auction</Text>
      <Button title="New Search" onPress={() => setIsAddMode(true)} />
      <HeaderApp
        visible={isAddMode}
        onAddSearch={addSearchHandler}
        onCancelSearch={cancelSearchHandler}
      />
      <FlatList
        data={filteredItems}
        renderItem={itemData =>
          <FilteredItems
            id={itemData.item.id}
            onDelete={removeItemHandler}
            title={itemData.item.value}
          /> 
        }
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