import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
} from 'react-native';

const DisplayItem = props => {

	return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.Screen} >
        <Text>{props.data.name}</Text>
        <Text>{props.data.description}</Text>
        <Text>${props.data.price}</Text>
        <Button title="Cancel" onPress={props.onReturn} />
      </View>
    </Modal>
  );
};

const styles=StyleSheet.create({
  Screen: {
    padding: 50,
  },
	ListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default DisplayItem;