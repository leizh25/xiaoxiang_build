import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import charge from '../../assets/icon/control/charge.png';
import charging from '../../assets/icon/control/charging.png';
import discharge from '../../assets/icon/control/discharge.png';
import discharging from '../../assets/icon/control/discharging.png';
import switch_off from '../../assets/icon/control/switch_off.png';
import switch_on from '../../assets/icon/control/switch_on.png';
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default () => {
  return (
    <View style={styles.root}>
      <View style={styles.switchLayout}>
        <View style={styles.switchWrapper}>
          <Text>充电开关</Text>
          <Image style={styles.batImg} source={charge} />
          <ImageBackground style={styles.switchImg} source={switch_off}>
            <Text style={styles.valueTxt}>已关闭</Text>
          </ImageBackground>
        </View>
        <View
          style={{
            width: StyleSheet.hairlineWidth,
            height: '60%',
            backgroundColor: '#ddd',
          }}></View>
        <View style={styles.switchWrapper}>
          <Text>充电开关</Text>
          <Image style={styles.batImg} source={charge} />
          <ImageBackground style={styles.switchImg} source={switch_off}>
            <Text style={styles.valueTxt}>已关闭</Text>
          </ImageBackground>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#ddd',
          marginHorizontal: 'auto',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  switchLayout: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchWrapper: {
    width: SCREEN_WIDTH >> 1,
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 10,
  },
  batImg: {
    width: 50,
    resizeMode: 'contain',
  },
  switchImg: {
    width: 80,
    height: 26,
    resizeMode: 'stretch',
    // backgroundColor: '#f00',
  },
  valueTxt: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 26,
    // textAlign: 'center',
    // textAlignVertical: 'center',
    marginLeft: 26,
  },
});
