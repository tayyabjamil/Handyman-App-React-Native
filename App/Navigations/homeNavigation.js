import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
import IntroScreen from '../Screens/IntroScreen';
import OTP_verification from '../Screens/OTP_verification';
import {ORANGE, WHITE} from '../helper/Color';
import CustomBottomBar from '../Navigations/CustomerBottomBar';
import SignUp from '../Screens/signUp';
import Home from '../Screens/Home';
import Arrived from '../Screens/arrived';
import InProgress from '../Screens/InProgress';
import ServiceEnded from '../Screens/ServiceEnded';
import Billdetails from '../Screens/BillDetails';
import MyBooking from '../Screens/MyBooking';
import Rating from '../Screens/Rating';
import Support from '../Screens/Support';
import Chat from '../Screens/Chat';
import More from '../Screens/More';
import Account from '../Screens/Account';
import notification from '../Screens/notification';
import Setting from '../Screens/setting';
import ChangePass from '../Screens/changePass';
import Language from '../Screens/Language';
import PrivacyPolicy from '..//Screens/privacyPolicy';
import TermAndCondition from '..//Screens/TermAndCondition';
import Tabbar from '../Components/Tabbar';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator  tabBar={(props) => <Tabbar {...props} />} 
      initialRouteName="HomeMain"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: WHITE.btntxtColor,
      }}
     >
      <BottomTab.Screen
        name="HomeMain"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />

<BottomTab.Screen
        name="Services"
        component={MyBooking}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP_verification" component={OTP_verification} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="Arrived" component={Arrived} />
        <Stack.Screen name="InProgress" component={InProgress} />
        <Stack.Screen name="ServiceEnded" component={ServiceEnded} />
        <Stack.Screen name="Billdetails" component={Billdetails} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="notification" component={notification} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ChangePass" component={ChangePass} />
        <Stack.Screen name="TermAndCondition" component={TermAndCondition} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
