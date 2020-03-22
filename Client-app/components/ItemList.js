import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ItemCategoryRow from './ItemCategoryRow';
import ItemRow from './ItemRow';
import DisplayItem from './DisplayItem';

const ItemList = props => {

	const [isAddMode, setIsAddMode] = useState(false);
	const [item, setItem] = useState(Object());

	const returnHomepageHandler = () => {
    setIsAddMode(false);
  }

  const displayItemHandler = (item) => {
  	setIsAddMode(true);
  	setItem(item);
  }

	return (
		<View>
			<DisplayItem
				data={item}
				visible={isAddMode}
				onReturn={returnHomepageHandler}
			/>
      <FlatList
        data={props.data}
        renderItem={itemData =>
	        <TouchableOpacity onPress={() => displayItemHandler(itemData.item) } >
		    		<View style={styles.ListItem}>
		          <Text>{itemData.item.name}</Text>
		          <Text>{itemData.item.price}</Text>
		        </View>
	      	</TouchableOpacity>
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
});

export default ItemList;