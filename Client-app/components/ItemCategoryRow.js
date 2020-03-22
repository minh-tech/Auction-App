import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ItemCategoryRow = props => {
	const category = props.category;
	return (
		<View>
			<Text style={styles.categoryStyle} >{category}</Text>
		</View>
  );
};

const styles=StyleSheet.create({
	categoryStyle : {
		fontWeight: 'bold',
		fontSize: 18
	},
});

export default ItemCategoryRow;