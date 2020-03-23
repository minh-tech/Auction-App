import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import CountDown from './CountDown';

const DisplayItem = props => {
  let showImages = [];
  if (typeof props.data.images !== 'undefined') {
    showImages = props.data.images;
  }

	return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.Screen} >
        <View style={styles.ImageContainer}>
          {showImages.map((image, index) =>
            <Image
            key={index}
            style={styles.ImageStyle}
            source={image}
            />
          )}
        </View>
        
        <Text>{props.data.name}</Text>
        <Text>{props.data.description}</Text>
        <Text>${props.data.price}</Text>

        <CountDown time={props.data.starttime} />

        <View style={styles.ButtonContainer} >
          <TextInput
            placeholder="$00.0"
            placeholderTextColor='grey'
          />
          <Button title="Bid" />
        </View>
        <Button title="Cancel" onPress={props.onReturn} />
      </View>
    </Modal>
  );
};

const styles=StyleSheet.create({
  Screen: {
    paddingTop: 100,
    paddingLeft: 20
  },
	ListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  ImageContainer: {
    flexDirection: 'row',
  },
  ImageStyle: {
    width: 150,
    height: 150,
    margin: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  }
});

export default DisplayItem;