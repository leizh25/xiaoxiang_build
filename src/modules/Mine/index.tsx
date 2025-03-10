import {
  Alert,
  FlatList,
  Image,
  Platform,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Color from '../../constants/Color';
import DeviceInfo from 'react-native-device-info';

const DATA = [
  {
    show: true,
    title: '完善资料',
    icon: require('../../assets/icon/shenfenzheng.png'),
    enterTo: 'ImproveInfomation',
    desc: '',
    onPress: null,
  },
  {
    show: true,
    title: '设备管理',
    icon: require('../../assets/icon/duankailianjie.png'),
    enterTo: 'DeviceList',
    desc: '',
    onPress: null,
  },
  {
    show: Platform.OS === 'android',
    title: '忽略电池优化',
    icon: require('../../assets/icon/hulve.png'),
    enterTo: '',
    desc: '',
    onPress: () => {},
  },
  {
    show: true,
    title: '注销账号',
    icon: require('../../assets/icon/zhuxiao.png'),
    enterTo: '',
    desc: '',
    onPress: () => {
      Alert.alert('提示', '确定退出登录？', [
        {
          text: '取消',
          onPress: () => {
            console.log('取消');
          },
          style: 'cancel',
        },
        {
          text: '确定',
          onPress: () => {
            console.log('确定');
          },
        },
      ]);
    },
  },
  {
    show: true,
    title: '退出登录',
    icon: require('../../assets/icon/tuichu.png'),
    enterTo: '',
    desc: '',
    onPress: null,
  },
  {
    show: true,
    title: '隐私政策',
    icon: require('../../assets/icon/icon-yinsizhengce.png'),
    enterTo: 'PrivacyPolicy',
    desc: '',
    onPress: null,
  },
  {
    show: true,
    title: '用户协议',
    icon: require('../../assets/icon/xieyi.png'),
    enterTo: 'UserProtocol',
    desc: '',
    onPress: null,
  },
  {
    show: true,
    title: '版本号',
    icon: require('../../assets/icon/banben.png'),
    enterTo: '',
    desc: 'V ' + DeviceInfo.getVersion(),
    onPress: null,
  },
];
export default () => {
  const navigation = useNavigation();
  const Item = ({
    show,
    title,
    icon,
    enterTo,
    desc,
    onPress,
  }: (typeof DATA)[0]) => {
    if (!show) return null;
    const styles = StyleSheet.create({
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      icon: {
        width: 24,
        height: 24,
        marginRight: 16,
      },
      title: {
        fontSize: 16,
        color: '#333',
      },
      arrow: {
        width: 16,
        height: 16,
        marginLeft: 'auto',
        tintColor: '#999',
      },
      desc: {
        fontSize: 14,
        marginLeft: 'auto',
      },
    });
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.6}
        onPress={() => {
          if (onPress) {
            return onPress();
          }
          if (enterTo) {
            navigation.navigate(enterTo as never);
          }
        }}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.title}>{title}</Text>
        {enterTo ? (
          <Image
            style={styles.arrow}
            source={require('../../assets/icon/arrow.png')}
          />
        ) : (
          <Text style={styles.desc}>{desc}</Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <View style={styles.infoBoard}>
        <View style={styles.infoLayout}>
          <Image
            style={styles.avatar}
            source={require('../../assets/icon/tab/mine.png')}
          />
          <Text style={styles.account}>18818818188</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={DATA}
          renderItem={({item}) => <Item {...item} />}
          keyExtractor={(item, index) => item.title + index}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.light,
  },
  infoBoard: {
    flex: 1,
    marginTop: 150,
    paddingTop: 130 - 50,
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoLayout: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    backgroundColor: Color.white,
  },
  account: {
    fontSize: 18,
    marginTop: 10,
  },
  flatList: {
    marginTop: 40,
  },
});
