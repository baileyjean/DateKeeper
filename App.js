import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import photo from './assets/joe.png';

export default function App() {
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
        onPress={() => alert('Thanks for the boops!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Boop Me</Text>
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
  }
});
