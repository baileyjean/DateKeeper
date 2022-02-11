import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import photo from './assets/joe.png';

// VARIABLES
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// FUNCTIONS

function HomeTab({navigation}){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="PartnerStats" component={PartnerStats} />
      <Tab.Screen name="DateHistory" component={DateHistory} />
      <Tab.Screen name="GiftIdeas" component={GiftIdeas} />
    </Tab.Navigator>
  );
}

function WishlistTab({navigation}){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PartnerStats" component={PartnerStats} />
      <Tab.Screen name="DateHistory" component={DateHistory} />
      <Tab.Screen name="GiftIdeas" component={GiftIdeas} />
    </Tab.Navigator>
  );
}

function PartnerStatsTab({navigation}){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="DateHistory" component={DateHistory} />
      <Tab.Screen name="GiftIdeas" component={GiftIdeas} />
    </Tab.Navigator>
  );
}

function DateHistoryTab({navigation}){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="PartnerStats" component={PartnerStats} />
      <Tab.Screen name="GiftIdeas" component={GiftIdeas} />
    </Tab.Navigator>
  );
}

function GiftIdeasTab({navigation}){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="PartnerStats" component={PartnerStats} />
      <Tab.Screen name="DateHistory" component={DateHistory} />
    </Tab.Navigator>
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
        <Drawer.Screen name="Home" component={HomeTab} />
        <Drawer.Screen name="Wishlist" component={WishlistTab} />
        <Drawer.Screen name="PartnerStats" component={PartnerStatsTab} />
        <Drawer.Screen name="DateHistory" component={DateHistoryTab} />
        <Drawer.Screen name="GiftIdeas" component={GiftIdeasTab} />
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
