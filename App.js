import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import photo from './assets/joe.png';

// VARIABLES
const Drawer = createDrawerNavigator();

// FUNCTIONS
function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          Cupid's Quiver
        </Text>

        <Text style={styles.instructions}>
          Welcome to Cupid's Quiver--your new vessel to house all your romantic ideas and plans.
        </Text>

        <StatusBar style="auto" />
      </View>
    );
  }


  function Wishlist({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Date Wishlist
        </Text>
      </View>
    );
  }

  function PartnerStats({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Partner Stats
        </Text>
      </View>
    );
  }

  function DateHistory({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Date History
        </Text>
      </View>
    );
  }

  function GiftIdeas({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Gift Ideas
        </Text>
      </View>
    );
  }

export default function App() {
  // FUNCTIONS
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Date Wishlist" component={Wishlist} />
        <Drawer.Screen name="Partner Stats" component={PartnerStats} />
        <Drawer.Screen name="Date History" component={DateHistory} />
        <Drawer.Screen name="Gift Ideas" component={GiftIdeas} />
      </Drawer.Navigator>
    </NavigationContainer>
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
    padding: 12,
    margin: 12,
    borderRadius: 18
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
