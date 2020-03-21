import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal
} from 'react-native';

const HeaderApp = props => {

	const [inputedSearch, setInputedSearch] = useState('');

	  const searchInputHandler = (inputedText) => {
    setInputedSearch(inputedText);
  }

  const addItemHandler = () => {
  	props.onAddSearch(inputedSearch);
  	setInputedSearch('');
  }

  const addCancelHandler = () => {
  	props.onCancelSearch();
  	setInputedSearch('');
  }

	return (
		<Modal visible={props.visible} animationType="slide">
	    <View style={styles.SearchContainer}>
	      <TextInput
	        placeholder="Search..."
	        placeholderTextColor='grey'
	        style={styles.SearchInput}
	        onChangeText={searchInputHandler}
	        value={inputedSearch}
	      />
	      <Button title="Search" onPress={addItemHandler} />
	    </View>
	    <Button title="Cancel" onPress={addCancelHandler} />
    </Modal>
	);
}

const styles = StyleSheet.create({
  SearchInput: {
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

export default HeaderApp;