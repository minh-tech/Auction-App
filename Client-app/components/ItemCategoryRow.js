import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ItemCategoryRow = props => {
	const category = this.props.category;
	return (
		<View>
			<Text style={styles.categoryStyle} >{category}</Text>
		</View>
  );
};

const styles=StyleSheet.create({
	categoryStyle : {
		fontWeight: 'bold',
	},
});

export default ItemCategoryRow;