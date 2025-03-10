import {
  Alert,
  AlertButton,
  Linking,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useIsFocused, useNavigation} from '@react-navigation/core';
import {useIsForeground} from '../../hooks/useIsForeground';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const showCodeAlert = (value: string, onDismissed: () => void): void => {
  const buttons: AlertButton[] = [
    {
      text: 'Close',
      style: 'cancel',
      onPress: onDismissed,
    },
  ];
  if (value.startsWith('http')) {
    buttons.push({
      text: 'Open URL',
      onPress: () => {
        Linking.openURL(value);
        onDismissed();
      },
    });
  }
  Alert.alert('Scanned Code', value, buttons);
};
let insets = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
export default () => {
  const navigation = useNavigation();
  const {hasPermission, requestPermission} = useCameraPermission();
  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        const status = await requestPermission();
        if (!status) {
          navigation.goBack();
          ToastAndroid.show('请允许摄像头权限', ToastAndroid.SHORT);
        }
      }
    })();
  }, [hasPermission]);
  const inset = useSafeAreaInsets();
  insets = inset;
  // 1. Use a simple default back camera
  const device = useCameraDevice('back');
  // 2. Only activate Camera when the app is focused and this screen is currently opened
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;
  // 3. (Optional) enable a torch setting
  const [torch, setTorch] = useState(false);
  // 4. On code scanned, we show an aler to the user
  const isShowingAlert = useRef(false);
  const onCodeScanned = useCallback((codes: Code[]) => {
    console.log(`Scanned ${codes.length} codes:`, codes);
    const value = codes[0]?.value;
    if (value == null) return;
    if (isShowingAlert.current) return;
    showCodeAlert(value, () => {
      isShowingAlert.current = false;
    });
    isShowingAlert.current = true;
  }, []);
  // 5. Initialize the Code Scanner to scan QR codes and Barcodes
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  });
  return (
    <View style={styles.container}>
      {device != null && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          codeScanner={codeScanner}
          torch={torch ? 'on' : 'off'}
          enableZoomGesture={true}
        />
      )}

      {/* <StatusBarBlurBackground /> */}

      <View style={styles.rightButtonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setTorch(!torch)}
          activeOpacity={0.4}>
          {/* <IonIcon
            name={torch ? 'flash' : 'flash-off'}
            color="white"
            size={24}
          /> */}
          <Text>{torch ? 'flash' : 'flash-off'}</Text>
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={[styles.backButton, {top: inset.top}]}
        onPress={navigation.goBack}>
        {/* <IonIcon name="chevron-back" color="white" size={35} /> */}
        <Text>chevron-back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  button: {
    marginBottom: 10,
    width: 200,
    height: 80,
    borderRadius: 30 / 2,
    backgroundColor: 'rgba(140, 140, 140, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtonRow: {
    position: 'absolute',
    right: insets.right,
    top: insets.top,
  },
  backButton: {
    position: 'absolute',
    // left: insets.left,
    // top: insets.top,
  },
});
