import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import photo from './assets/joe.png';

export default function App() {
  // VARIABLES
  const Stack = createStackNavigator();

  // FUNCTIONS
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="PartnerStats" component={PartnerStats} />
        <Stack.Screen name="DateHistory" component={DateHistory} />
        <Stack.Screen name="GiftIdeas" component={GiftIdeas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          Cupid's Quiver
        </Text>

        <Text style={styles.instructions}>
          Welcome to Cupid's Quiver--your new vessel to house all your romantic ideas and plans.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Wishlist')}
          style={styles.button}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PartnerStats')}
          style={styles.button}>
          <Text style={styles.buttonText}>Partner Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DateHistory')}
          style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GiftIdeas')}
          style={styles.button}>
          <Text style={styles.buttonText}>Gift Ideas</Text>
        </TouchableOpacity>

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
        
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PartnerStats')}
          style={styles.button}>
          <Text style={styles.buttonText}>Partner Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DateHistory')}
          style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GiftIdeas')}
          style={styles.button}>
          <Text style={styles.buttonText}>Gift Ideas</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function PartnerStats({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Partner Stats
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Wishlist')}
          style={styles.button}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DateHistory')}
          style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GiftIdeas')}
          style={styles.button}>
          <Text style={styles.buttonText}>Gift Ideas</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function DateHistory({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Date History
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Wishlist')}
          style={styles.button}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PartnerStats')}
          style={styles.button}>
          <Text style={styles.buttonText}>Partner Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GiftIdeas')}
          style={styles.button}>
          <Text style={styles.buttonText}>Gift Ideas</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function GiftIdeas({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Gift Ideas
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Wishlist')}
          style={styles.button}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PartnerStats')}
          style={styles.button}>
          <Text style={styles.buttonText}>Partner Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DateHistory')}
          style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
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
