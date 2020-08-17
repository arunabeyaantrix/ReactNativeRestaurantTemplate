import React,{Component} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import {Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Sem from './Semester';
import Contact from './ContactComponent';

const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen (props){
  return(
    <HomeNavigator.Navigator initialRouteName="Home"
    screenOptions={{
                headerStyle: {
                    backgroundColor: "#3495eb"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
      <HomeNavigator.Screen 
      name= "Home"
      component = {Home}
      options={{
            headerTitle: "STUDX",
            headerLeft: () => (
              <Icon
          name="menu" size={24}
          type='fontawsome'
          color='white'
          onPress={() => props.navigation.toggleDrawer()} />
            ),
          }}
      />
      <HomeNavigator.Screen 
      name= "Semester"
      component = {Sem} 
      option={{title:"Home"}}
      />
    </HomeNavigator.Navigator>
    );
}
const ContactNavigator = createStackNavigator();
function ContactNavigatorScreen (props){
  return(
    <ContactNavigator.Navigator initialRouteName="Home"
    screenOptions={{
                headerStyle: {
                    backgroundColor: "#3495eb"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
    >
      <ContactNavigator.Screen 
      name= "Contact"
      component = {Contact}
      options={{
            headerTitle: "STUDX",
            headerLeft: () => (
              <Icon
          name="menu" size={24}
          type='fontawsome'
          color='white'
          onPress={() => props.navigation.toggleDrawer()} />
            ),
          }}
      />
      
    </ContactNavigator.Navigator>
    );
}
const Drawer = createDrawerNavigator();
class Main extends Component{
  render(){
    return(
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
            name = "Home" 
            component = {HomeNavigatorScreen}
            />
            <Drawer.Screen 
            name = "Contact" 
            component = {ContactNavigatorScreen}
            />
          </Drawer.Navigator>
      </NavigationContainer>
      );
  }
}
export default Main;