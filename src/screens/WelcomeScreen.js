import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LottieView from "lottie-react-native";

const animation = () => {

  return (
    <LottieView source={require("../../assets/images/loadingAnimation.json")} autoPlay loop />
  );
}

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (


    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />

      {showAnimation && (
        <SafeAreaView className="flex-1 flex justify-around bg-white">
          <LottieView source={require("../../assets/images/loadingAnimation.json")} autoPlay loop style={{ flex: 1 }} />
        </SafeAreaView>
      )}
      {/* title */}

      {!showAnimation && (
        <>
          <View className="space-y-2">
            <Text
              style={{ fontSize: wp(10) }}
              className="text-center font-bold text-gray-700">
              EchoArt Chat
            </Text>
            <Text
              style={{ fontSize: wp(4) }}
              className="text-center tracking-wider font-semibold text-gray-600">
              The future is here, powerd by AI.
            </Text>
          </View>

          {/* assistant image */}
          <View className="flex-row justify-center">
            <Image
              source={require('../../assets/images/welcomeBot.png')}
              style={{ height: wp(75), width: wp(75) }}
            />
          </View>

          {/* start button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="bg-blue-400 mx-5 p-4 rounded-2xl">
            <Text
              style={{ fontSize: wp(6) }}
              className="text-center font-bold text-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
