// Splash.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';



const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "FirstScreen" }]
      })
    }, 4200)
  });


  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="zoomIn" duration={4000}>
        <Image
          style={styles.logo}
          source={require('../assets/TeslaAssets/Teslalogo.png')}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 220,
    width: 220,
  },
});

export default Splash;
