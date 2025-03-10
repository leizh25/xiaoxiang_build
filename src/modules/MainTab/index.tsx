import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Color from '../../constants/Color';
import History from '../History';
import Control from '../Control';
import Realtime from '../Realtime';
import Param from '../Param';
import Mine from '../Mine';
import history from '../../assets/icon/tab/history.png';
import history_active from '../../assets/icon/tab/history_active.png';
import control from '../../assets/icon/tab/control.png';
import control_active from '../../assets/icon/tab/control_active.png';
import realtime from '../../assets/icon/tab/realtime.png';
import realtime_active from '../../assets/icon/tab/realtime_active.png';
import param from '../../assets/icon/tab/param.png';
import param_active from '../../assets/icon/tab/param_active.png';
import mine from '../../assets/icon/tab/mine.png';
import mine_active from '../../assets/icon/tab/mine_active.png';

const Tab = createBottomTabNavigator();

const MyLabel = ({
  focused,
  children,
  color,
}: {
  focused: boolean;
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <Text style={{fontSize: 12, color: focused ? color : '#666'}}>
      {children}
    </Text>
  );
};

export default () => {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  console.log('inset', Platform.OS, inset);

  return (
    <Tab.Navigator
      initialRouteName="Realtime"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Color.light,
          height: (Platform.OS === 'android' ? 56 : 40) + inset.top,
          elevation: 0, // Android: 取消阴影
          shadowOpacity: 0, // iOS: 取消阴影
        },
        tabBarStyle: {
          height: (Platform.OS === 'android' ? 54 : 44) + inset.bottom,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#666',
        },
        headerTintColor: Color.white,
        tabBarActiveTintColor: Color.light,
        tabBarInactiveTintColor: Color.dark,
      }}
      screenListeners={{
        tabPress: e => {
          Vibration.vibrate(1);
        },
      }}>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon({focused, color, size}) {
            return (
              <Image
                style={styles.icon}
                source={focused ? history_active : history}
              />
            );
          },
          tabBarLabel: props => <MyLabel {...props} />,
        }}
      />
      <Tab.Screen
        name="Control"
        component={Control}
        options={{
          tabBarIcon({focused, color, size}) {
            return (
              <Image
                style={styles.icon}
                source={focused ? control_active : control}
              />
            );
          },
          tabBarLabel: props => <MyLabel {...props} />,
        }}
      />
      <Tab.Screen
        name="Realtime"
        component={Realtime}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeviceList');
              }}>
              <Text style={{color: '#fff', fontSize: 18, marginLeft: 20}}>
                设备列表
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: 34,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Scan')}>
              <Image
                source={require('../../assets/icon/scan.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
          ),
          tabBarIcon({focused, color, size}) {
            return (
              <Image
                style={styles.icon}
                source={focused ? realtime_active : realtime}
              />
            );
          },
          tabBarLabel: props => <MyLabel {...props} />,
        }}
      />
      <Tab.Screen
        name="Param"
        component={Param}
        options={{
          tabBarIcon({focused, color, size}) {
            return (
              <Image
                style={styles.icon}
                source={focused ? param_active : param}
              />
            );
          },
          tabBarLabel: props => <MyLabel {...props} />,
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          headerShown: false,
          tabBarIcon({focused, color, size}) {
            return (
              <Image
                style={styles.icon}
                source={focused ? mine_active : mine}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
