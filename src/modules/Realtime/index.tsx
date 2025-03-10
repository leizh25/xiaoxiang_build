import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import Color from '../../constants/Color';
import DevideLine from '../../components/DevideLine';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
export default () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const renderNameLayout = () => {
    const styles = StyleSheet.create({
      connectStatusLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
      },
      arrow: {
        width: 16,
        height: 16,
        padding: 10,
        resizeMode: 'contain',
        tintColor: Color.white,
      },
      connectStatusTxt: {
        color: Color.white,
        fontSize: 14,
      },
    });
    return (
      <View style={styles.connectStatusLayout}>
        <Image
          style={[styles.arrow, {transform: [{rotate: '180deg'}]}]}
          source={require('../../assets/icon/arrow.png')}
        />
        {true ? (
          <View>
            <Text style={styles.connectStatusTxt}>已连接</Text>
          </View>
        ) : (
          <Text style={styles.connectStatusTxt}>未连接</Text>
        )}
        <Image
          style={styles.arrow}
          source={require('../../assets/icon/arrow.png')}
        />
      </View>
    );
  };
  const renderChartLayout = () => {
    const styles = StyleSheet.create({
      chartLayout: {
        height: 200,
        // backgroundColor: '#bbffaa50',
      },
    });
    return <View style={styles.chartLayout}></View>;
  };
  const renderSwitchLayout = () => {
    const styles = StyleSheet.create({
      switchLayout: {
        width: '100%',
        height: 80,
        paddingTop: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      switchBox: {
        width: (SCREEN_WIDTH - 20 * 2) >> 1,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
      },
      switchBoxOnRight: {
        justifyContent: 'flex-end',
      },
      switchName: {
        fontSize: 15,
      },
      switchValue: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 14,
      },
      dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#ddd',
        overflow: 'hidden',
      },
      valueTxt: {
        color: '#ddd',
        marginLeft: 5,
      },
    });
    return (
      <View style={styles.switchLayout}>
        <View style={styles.switchBox}>
          <Text style={styles.switchName}>充电开关:</Text>
          <View style={styles.switchValue}>
            <View style={styles.dot}></View>
            <Text style={styles.valueTxt}>关</Text>
          </View>
        </View>
        <View style={[styles.switchBox, styles.switchBoxOnRight]}>
          <Text style={styles.switchName}>均衡状态:</Text>
          <View style={styles.switchValue}>
            <View style={styles.dot}></View>
            <Text style={styles.valueTxt}>关</Text>
          </View>
        </View>
        <View style={styles.switchBox}>
          <Text style={styles.switchName}>放电开关:</Text>
          <View style={styles.switchValue}>
            <View style={styles.dot}></View>
            <Text style={styles.valueTxt}>关</Text>
          </View>
        </View>
        <View style={[styles.switchBox, styles.switchBoxOnRight]}>
          <Text style={styles.switchName}>保护状态:</Text>
          <View style={styles.switchValue}>
            <View style={styles.dot}></View>
            <Text style={styles.valueTxt}>关</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderDataLayout = () => {
    const styles = StyleSheet.create({
      dataLayout: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    });
    const DataBox = (props: {
      name: string;
      value: string;
      icon: ImageSourcePropType;
    }) => {
      const styles = StyleSheet.create({
        dataContainer: {
          width: SCREEN_WIDTH / 3,
          height: 86,
          flexDirection: 'row',
          gap: 6,
          alignItems: 'center',
          paddingLeft: 20,
        },
        icon: {
          width: 26,
          height: 26,
          resizeMode: 'contain',
          tintColor: Color.light,
        },
        valueAndName: {},
        value: {
          color: Color.light,
          fontSize: 16,
        },
        name: {
          color: '#000',
          fontSize: 15,
        },
      });
      return (
        <View style={styles.dataContainer}>
          <Image style={styles.icon} source={props.icon} />
          <View style={styles.valueAndName}>
            <Text style={styles.value}>{props.value}</Text>
            <Text style={styles.name}>{props.name}</Text>
          </View>
        </View>
      );
    };
    return (
      <View style={styles.dataLayout}>
        <DataBox
          name="总电压"
          value="0.0 V"
          icon={require('../../assets/icon/realtime/dianya.png')}
        />
        <DataBox
          name="电流"
          value="0.0 V"
          icon={require('../../assets/icon/param/dianliu.png')}
        />
        <DataBox
          name="功率"
          value="0.0 W"
          icon={require('../../assets/icon/realtime/gongshuai.png')}
        />
        <DataBox
          name="最高电压"
          value="0.0 V"
          icon={require('../../assets/icon/realtime/zuigaodianya.png')}
        />
        <DataBox
          name="最低电压"
          value="0.0 V"
          icon={require('../../assets/icon/realtime/zuididianya.png')}
        />
        <DataBox
          name="压差"
          value="0.0 V"
          icon={require('../../assets/icon/realtime/yacha.png')}
        />
        <DataBox
          name="平均电压"
          value="0.0 V"
          icon={require('../../assets/icon/realtime/pingjundianya.png')}
        />
        <DataBox
          name="循环次数"
          value="0"
          icon={require('../../assets/icon/realtime/xunhuancishu.png')}
        />
      </View>
    );
  };
  const renderTemperatureLayout = () => {
    const styles = StyleSheet.create({
      temperatureLayout: {
        width: '100%',
        minHeight: 120,
        // backgroundColor: '#bbffaa50',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        columnGap: 100,
        rowGap: 8,
        paddingTop: 20,
      },
      icon: {
        width: 60,
        height: 120,
        resizeMode: 'contain',
        position: 'absolute',
        left: (SCREEN_WIDTH >> 1) - 30,
        // top: 30,
      },
      item: {
        width: (SCREEN_WIDTH - 100) >> 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        // borderWidth: 1,
        // borderColor: '#ddd',
      },
      leftItem: {
        justifyContent: 'flex-end',
      },
    });
    return (
      <ImageBackground
        style={styles.temperatureLayout}
        imageStyle={styles.icon}
        source={require('../../assets/icon/realtime/wenduji.png')}>
        <View style={[styles.item, styles.leftItem]}>
          <Text>MOS</Text>
          <Text>123</Text>
        </View>
        <View style={styles.item}>
          <Text>湿度</Text>
          <Text>无</Text>
        </View>
        {[0, 1, 2, 3].map(item => (
          <View
            style={[styles.item, item % 2 === 0 && styles.leftItem]}
            key={item}>
            <Text>T{item}</Text>
            <Text>无</Text>
          </View>
        ))}
      </ImageBackground>
    );
  };
  const renderVoltageListLayout = () => {
    const styles = StyleSheet.create({
      volLayout: {
        marginBottom: 40,
        paddingHorizontal: 20,
      },
      title: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
      },
      volContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      volWrapper: {
        width: (SCREEN_WIDTH - 20 * 2 - 1) / 3,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingLeft: 10,
      },
      index: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#666',
        textAlign: 'center',
        fontSize: 10,
      },
      batBg: {
        width: 70,
        height: 24,
        resizeMode: 'contain',
      },
      batImg: {
        width: 70,
        height: 24,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 3,
        position: 'relative',
      },
      length: {
        width: 61,
        height: 20,
        backgroundColor: Color.light,
        borderRadius: 4,
      },
      value: {
        color: '#000',
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
    });
    return (
      <View style={styles.volLayout}>
        <Text style={styles.title}>单串电压信息</Text>
        <View style={styles.volContainer}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
            item => (
              <View style={styles.volWrapper} key={item}>
                <Text style={styles.index}>{item + 1}</Text>
                <ImageBackground
                  source={require('../../assets/icon/realtime/bat_bg.png')}
                  imageStyle={styles.batBg}
                  style={styles.batImg}>
                  <View style={styles.length} />
                  <Text style={styles.value}>3.853</Text>
                </ImageBackground>
              </View>
            ),
          )}
        </View>
      </View>
    );
  };
  useEffect(() => {
    actionSheetRef.current?.show();
  });

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollView}>
        {renderNameLayout()}
        {renderChartLayout()}
        <View style={styles.detalBoard}>
          {renderSwitchLayout()}
          <DevideLine top={20} bottom={10} />
          {renderDataLayout()}
          <DevideLine />
          {renderTemperatureLayout()}
          <DevideLine />
          {renderVoltageListLayout()}
        </View>
      </ScrollView>

      {/* <ActionSheet
        ref={actionSheetRef}
        isModal={false}
        backgroundInteractionEnabled
        snapPoints={[70, 90]}
        gestureEnabled
        closable={false}
        disableDragBeyondMinimumSnapPoint
        containerStyle={{
          borderWidth: 1,
          borderColor: '#f00',
          maxHeight: '100%',
          height: '100%',
        }}>
        <View
          style={{
            paddingHorizontal: 12,
            alignItems: 'center',
            paddingTop: 20,
            gap: 10,
            width: '100%',
            height: '100%',
          }}></View>
      </ActionSheet> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Color.light,
  },
  detalBoard: {
    flex: 1,
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
