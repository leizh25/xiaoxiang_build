import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeviceList from './src/modules/DeviceList';
import Color from './src/constants/Color';
import MainTab from './src/modules/MainTab';
import UserProtocol from './src/modules/Mine/modules/UserProtocol';
import PrivacyPolicy from './src/modules/Mine/modules/PrivacyPolicy';
import ImproveInfomation from './src/modules/Mine/modules/ImproveInfomation';
import BaseInfo from './src/modules/Param/modules/BaseInfo';
import ProtectionParam from './src/modules/Param/modules/ProtectionParam';
import ProtectionTimes from './src/modules/Param/modules/ProtectionTimes';
import CurrentSetting from './src/modules/Param/modules/CurrentSetting';
import TemperatureSetting from './src/modules/Param/modules/TemperatureSetting';
import BalanceSetting from './src/modules/Param/modules/BalanceSetting';
import CapacityVoltageCurve from './src/modules/Param/modules/CapacityVoltageCurve';
import FunctionSetting from './src/modules/Param/modules/FunctionSetting';
import SystemSetting from './src/modules/Param/modules/SystemSetting';
import PasswordSetting from './src/modules/Param/modules/PasswordSetting';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Scan from './src/modules/Scan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Color.light,
              // height: Platform.OS === 'android' ? 46 : 56 + inset.top,
            },
            // header: ({navigation, route, options, back}) => {
            //   const title = getHeaderTitle(options, route.name);

            //   return (
            //     <MyHeader
            //       title={title}
            //       leftButton={
            //         back ? (
            //           <MyBackButton onPress={navigation.goBack} />
            //         ) : undefined
            //       }
            //       style={options.headerStyle}
            //     />
            //   );
            // },
            contentStyle: {
              backgroundColor: Color.white,
            },

            headerTintColor: Color.white,
            headerBackTitle: '',
            statusBarBackgroundColor: 'transparent',
          }}>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DeviceList"
            component={DeviceList}
            options={{
              // presentation: 'modal',
              headerBackTitle: '',
            }}
          />
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{
              // presentation: 'modal',
              headerBackTitle: '',
              headerShown: false,
            }}
          />
          {/* Mine 页面 */}
          <Stack.Group>
            <Stack.Screen
              name="UserProtocol"
              component={UserProtocol}
              options={{
                headerBackTitle: '',
                headerTitle: '用户协议',
              }}
            />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicy}
              options={{
                headerBackTitle: '',
                headerTitle: '隐私政策',
              }}
            />
            <Stack.Screen
              name="ImproveInfomation"
              component={ImproveInfomation}
              options={{
                headerBackTitle: '',
                headerTitle: '完善资料',
              }}
            />
          </Stack.Group>
          {/* 参数页面 */}
          <Stack.Group>
            <Stack.Screen
              name="BaseInfo"
              component={BaseInfo}
              options={{
                headerBackTitle: '',
                headerTitle: '基本信息',
              }}
            />
            <Stack.Screen
              name="InitialSetting"
              component={BaseInfo}
              options={{
                headerBackTitle: '',
                headerTitle: '初始设置',
              }}
            />
            <Stack.Screen
              name="ProtectionParam"
              component={ProtectionParam}
              options={{
                headerBackTitle: '',
                headerTitle: '保护参数',
              }}
            />
            <Stack.Screen
              name="ProtectionTimes"
              component={ProtectionTimes}
              options={{
                headerBackTitle: '',
                headerTitle: '保护次数',
              }}
            />
            <Stack.Screen
              name="CurrentSetting"
              component={CurrentSetting}
              options={{
                headerBackTitle: '',
                headerTitle: '电流设置',
              }}
            />
            <Stack.Screen
              name="TemperatureSetting"
              component={TemperatureSetting}
              options={{
                headerBackTitle: '',
                headerTitle: '温度设置',
              }}
            />
            <Stack.Screen
              name="BalanceSetting"
              component={BalanceSetting}
              options={{
                headerBackTitle: '',
                headerTitle: '均衡设置',
              }}
            />
            <Stack.Screen
              name="CapacityVoltageCurve"
              component={CapacityVoltageCurve}
              options={{
                headerBackTitle: '',
                headerTitle: '容量电压曲线',
              }}
            />
            <Stack.Screen
              name="FunctionSetting"
              component={FunctionSetting}
              options={{
                headerBackTitle: '',
                headerTitle: '功能设置',
              }}
            />
            <Stack.Screen
              name="SystemSetting"
              component={SystemSetting}
              options={{
                headerBackTitle: '',
                headerTitle: '系统设置',
              }}
            />
            <Stack.Screen
              name="PasswordSetting"
              component={PasswordSetting}
              options={{
                headerBackTitle: '',
                headerTitle: '密码设置',
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
