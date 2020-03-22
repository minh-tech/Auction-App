import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const ItemRow = props => {

	const item = props.item;

	return (
		<View style={styles.ItemRow} >
			<Image
        style={styles.ImageStyle}
        source={props.firstImage}
        />
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
	},
	ImageStyle: {
    width: 50,
    height: 50,
  },
});

export default ItemRow;