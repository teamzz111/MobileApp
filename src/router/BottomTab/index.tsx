import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../../components/CustomBottonTab';
import Users from '../../pages/Users/index';
import AddUser from '../../pages/AddUser';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Users'}}
          name="Users"
          component={Users}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Add user'}}
          name="AddUser"
          component={AddUser}
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
