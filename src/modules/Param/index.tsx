import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Color from '../../constants/Color';

const list = [
  {
    show: true,
    title: '基本信息',
    icon: require('../../assets/icon/param/jibenxinxi1.png'),
    enterTo: 'BaseInfo',
  },
  {
    show: true,
    title: '初始设置',
    icon: require('../../assets/icon/param/chushihua.png'),
    enterTo: 'InitialSetting',
  },
  {
    show: true,
    title: '保护参数',
    icon: require('../../assets/icon/param/baohu_protect.png'),
    enterTo: 'ProtectionParam',
  },
  {
    show: true,
    title: '保护次数',
    icon: require('../../assets/icon/param/baohumoshi.png'),
    enterTo: 'ProtectionTimes',
  },
  {
    show: true,
    title: '电流设置',
    icon: require('../../assets/icon/param/dianliu.png'),
    enterTo: 'CurrentSetting',
  },
  {
    show: true,
    title: '温度设置',
    icon: require('../../assets/icon/param/wendu.png'),
    enterTo: 'TemperatureSetting',
  },
  {
    show: true,
    title: '均衡设置',
    icon: require('../../assets/icon/param/fuzaijunheng.png'),
    enterTo: 'BalanceSetting',
  },
  {
    show: true,
    title: '容量电压曲线',
    icon: require('../../assets/icon/param/rongliang.png'),
    enterTo: 'CapacityVoltageCurve',
  },
  {
    show: true,
    title: '功能设置',
    icon: require('../../assets/icon/param/gongnengdingyi.png'),
    enterTo: 'FunctionSetting',
  },
  {
    show: true,
    title: '系统设置',
    icon: require('../../assets/icon/param/xitong.png'),
    enterTo: 'SystemSetting',
  },
  {
    show: true,
    title: '密码设置',
    icon: require('../../assets/icon/param/ziyuanxhdpi.png'),
    enterTo: 'PasswordSetting',
  },
];

export default () => {
  const navigation = useNavigation();
  const Item = ({index, item}: {index: number; item: (typeof list)[0]}) => {
    return (
      <TouchableOpacity
        key={index + item.title}
        style={styles.row}
        onPress={() => navigation.navigate(item.enterTo as never)}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={require('../../assets/icon/arrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList data={list} renderItem={Item} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  arrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 'auto',
    tintColor: '#999',
  },
});
