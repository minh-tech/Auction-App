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

	const images = {
    '01': [
      require('../assets/images/01-storage-01.jpg'),
      require('../assets/images/01-storage-02.jpg')
    ],
    '02': [
      require('../assets/images/02-storage-01.jpg'),
    ],
    '03': [
      require('../assets/images/03-cellphone-01.jpg'),
      require('../assets/images/03-cellphone-02.jpg')
    ],
    '04': [
      require('../assets/images/04-AppleMac-01.jpg'),
    ],
    '05': [
      require('../assets/images/05-FordCar-01.jpg'),
      require('../assets/images/05-FordCar-02.jpg')
    ],
    '06': [
      require('../assets/images/06-ChevroletCar-01.jpg'),
      require('../assets/images/06-ChevroletCar-02.jpg')
    ],
    '07': [
      require('../assets/images/07-Rolex-01.jpg'),
      require('../assets/images/07-Rolex-02.jpg')
    ]
  };

	const dataHandler = () => {
		let sectionArray = [];
		let categoryDict = {};

	  props.data.forEach((item) => {
	    if (item.name.indexOf(props.searchText) === -1) {
	      return;
	    }
	    if (typeof images[item.id] !== 'undefined') {
	    	item['images'] = images[item.id];
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
        		<ItemRow firstImage={item.images[0]} item={item} />
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