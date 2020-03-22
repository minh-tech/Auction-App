import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  SectionList,
  TouchableOpacity,
} from 'react-native';

import ItemCategoryRow from './ItemCategoryRow';
import ItemRow from './ItemRow';
import DisplayItem from './DisplayItem';

const ItemList = props => {

	const [isAddMode, setIsAddMode] = useState(false);
	const [item, setItem] = useState(Object());
	const [showData, setShowData] = useState([]);

	const dataHandler = () => {
		let sectionArray = [];
		let section = {'title':'', 'data':[]};


	  props.data.forEach((item) => {
	    if (item.name.indexOf(props.searchText) === -1) {
	      return;
	    }
	    if (item.category != section['title']) {
	    	if (section['title'].length !== 0) {
	    		sectionArray.push(section);
	    		// console.log('DATA if', DATA);
	    		section = {'title':'', 'data':[]};
	    	}
	    	section['title'] = item.category;
	    }
	    section['data'].push(item);
	  });
	  return sectionArray;
	}

const DATA = dataHandler();

	const returnHomepageHandler = () => {
    setIsAddMode(false);
  }

  const displayItemHandler = (item) => {
  	setIsAddMode(true);
  	setItem(item);
  }

  function Item({ title }) {
	  return (
	    <View>
	      <Text style={styles.title}>{title.name}</Text>
	      <Text style={styles.title}>{title.price}</Text>
	    </View>
	  );
	}

	return (
		<View>
			<DisplayItem
				data={item}
				visible={isAddMode}
				onReturn={returnHomepageHandler}
			/>

			<SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
      />

     

    </View>
	);
}

const styles = StyleSheet.create({
  ListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default ItemList;