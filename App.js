import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import photo from './assets/joe.png';

export default function App() {
  // STATE VARIABLES
  const [selectedImage, setSelectedImage] = React.useState(null);

  // FUNCTIONS
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Permission to access photo is required, damnit!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }

  if (selectedImage !== null ) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
        Cupid's Quiver
        </Text>

        <Image 
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />

        <Text style={styles.instructions}>
          Welcome to Cupid's Quiver - the vessel to house all your romantic ideas and plans.
        </Text>

        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}>
          <Text style={styles.buttonText}>Upload New Photo</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        DateKeeper: The Future of Romance
      </Text>

      <Image source={photo} style={styles.photo} />

      <Text style={styles.instructions}>
        Welcome to DateKeeper - the new gatekeeper for all your romantic ideas and plans.
      </Text>

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Text style={styles.buttonText}>Upload New Photo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#888', 
    fontSize: 22,
    margin: 5
  },
  photo: {
    width: 250, 
    height: 300, 
    margin: 20
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    margin: 10
  },
  button: { 
    backgroundColor: '#888',
    padding: 18,
    borderRadius: 12
  },
  buttonText: { 
    fontSize: 20, 
    color: '#fff' 
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
