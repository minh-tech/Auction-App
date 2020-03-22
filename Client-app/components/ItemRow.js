import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ItemRow = props => {

	const item = this.props.item;

	return (
		<View style={styles.ItemRow} >
			<Text>{item.name}</Text>
			<Text>{item.price}</Text>
		</View>
  );
};

const styles=StyleSheet.create({
	ItemRow: {
		flexDirection: 'row',
	}
});

export default ItemRow;