import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {useNavigation} from '@react-navigation/native';
import Color from '../../constants/Color';

SystemNavigationBar.setNavigationColor('translucent');

export default () => {
  const [search, setSearch] = React.useState('');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        textColor: Color.white,
        hintTextColor: Color.white,
        headerIconColor: Color.white,
        onChangeText: (event: any) => {
          console.log('event:', event.nativeEvent.text);

          setSearch(event.nativeEvent.text);
        },
      },
      headerLeft: () => {},
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
            <Image
              source={require('../../assets/icon/scan.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
