import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../../components/CustomBottonTab';
import Home from '../../pages/Home';
import Things from '../../pages/Things';
import PokemonList from '../../pages/PokemonList';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Products"
          component={Home}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="Cart"
          component={Things}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Favourites'}}
          name="Favourites"
          component={PokemonList}
        />
        {/* <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="Profile"
          component={Profile}
        /> */}
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
