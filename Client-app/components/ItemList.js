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
	const images = props.images;

	// Handle data to compatible with SectionList
	// format = [{'title':category, 'data':[item1, item2,]},]
	const dataHandler = () => {
		let sectionArray = [];
		let categoryDict = {};

	  props.data.forEach((item) => {
	  	// Stop if item not match with user's search
	    if (item.name.indexOf(props.searchText) === -1) {
	      return;
	    }
	    // Check 'undefined' for images
	    if (typeof images[item.id] !== 'undefined') {
	    	item['images'] = images[item.id];
	    }
	    // Add items to object
	    if (item.category in categoryDict) {
	    	categoryDict[item.category].push(item);
	    } else {
	    	categoryDict[item.category] = [item];
	    }
	  });
	  // Convert the object to SectionList array
	  for (const property in categoryDict) {
	  	sectionArray.push({'title':property, 'data':categoryDict[property]});
	  }

	  return sectionArray;
	}
	const DATA = dataHandler();

	// Close Item view
	const returnHomepageHandler = () => {
    setIsAddMode(false);
  }

  // Display Item view
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
        renderSectionHeader={
        	({ section: { title } }) => (
            <ItemCategoryRow category={title}/>
        	)
        }
        renderItem={({ item }) => (
        	<TouchableOpacity onPress={()=>displayItemHandler(item) } >
        		<ItemRow firstImage={item.images[0]} item={item} />
        	</TouchableOpacity>
        )}
      />
    </View>
	);
}

const styles = StyleSheet.create({
  ListView: {
  	maxHeight: 550,
  }
});

export default ItemList;