import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  TouchableOpacity,
} from 'react-native';

import ItemCategoryRow from './ItemCategoryRow';
import ItemRow from './ItemRow';
import DisplayItem from './DisplayItem';

const ItemList = props => {

	const [isAddMode, setIsAddMode] = useState(false);
	const [selectedItem, setSelectedItem] = useState(Object());

	const dataHandler = () => {
		let sectionArray = [];
		let categoryDict = {};

	  props.data.forEach((item) => {
	    if (item.name.indexOf(props.searchText) === -1) {
	      return;
	    }
	    if (item.category in categoryDict) {
	    	categoryDict[item.category].push(item);
	    } else {
	    	categoryDict[item.category] = [item];
	    }
	  });

	  for (const property in categoryDict) {
	  	sectionArray.push({'title':property, 'data':categoryDict[property]});
	  }

	  return sectionArray;
	}
const DATA = dataHandler();

	const returnHomepageHandler = () => {
    setIsAddMode(false);
  }

  const displayItemHandler = (item) => {
  	setIsAddMode(true);
  	setSelectedItem(item);
  }

	return (
		<View>
			<DisplayItem
				data={selectedItem}
				visible={isAddMode}
				onReturn={returnHomepageHandler}
			/>

			<SectionList
				style={styles.ListView}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
        	<TouchableOpacity onPress={() => displayItemHandler(item) } >
        		<ItemRow item={item} />
        	</TouchableOpacity>
        )}
        renderSectionHeader={
        	({ section: { title } }) => (
            <ItemCategoryRow category={title}/>
        	)
        }
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
  ListView: {
  	maxHeight: 550,
  }
});

export default ItemList;