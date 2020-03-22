import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ItemRow = props => {

	const item = props.item;

	return (
		<View style={styles.ItemRow} >
			<Text>{item.name}</Text>
			<Text>${item.price}</Text>
		</View>
  );
};

const styles=StyleSheet.create({
	ItemRow: {
		flexDirection: 'row',
		padding: 6,
    marginVertical: 10,
    backgroundColor: '#ccc',
    justifyContent: 'space-between',
	}
});

export default ItemRow;