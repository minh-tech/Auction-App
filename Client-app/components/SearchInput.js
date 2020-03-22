import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard,
  Modal
} from 'react-native';

const SearchInput = props => {

	  const searchTextHandler = (enteredText) => {
    	props.onAddSearch(enteredText);
  }

	return (
	    <View style={styles.SearchContainer}>
	      <TextInput
	        placeholder="Search..."
	        placeholderTextColor='grey'
	        style={styles.SearchBox}
	        onChangeText={searchTextHandler}
	      />
	      <Button title="Search" onPress={Keyboard.dismiss} />
	    </View>
	);
}

const styles = StyleSheet.create({
  SearchBox: {
    width: '80%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    padding: 10,
    color: 'black',
  },
  SearchContainer: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchInput;