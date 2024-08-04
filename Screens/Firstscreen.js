import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Firstscreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/TeslaAssets/TeslaVideo.mp4')}
          style={styles.backgroundvideo}
          resizeMode='cover'
          shouldPlay
          isMuted={true}
          isLooping
          useNativeControls={false} // Hide controls
        />
      </View>

      <View style={{ alignItems: "center", paddingTop: 50, gap: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "#2C86FF", height: 35, width: "90%", borderRadius: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontWeight: "400", fontSize: 16, color: "white" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "#CBCBCB", height: 35, width: "90%", borderRadius: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontWeight: "400", fontSize: 16, color: "black" }}>Create New Account ?</Text>
        </TouchableOpacity>

        <Text style={{ color: "white", textAlign: "center", padding: 15 }}>Here is not working any authntication & APIs functions this app created for fun and learn new things </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    flex: 1,
  },
  videoContainer: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,

  },
  backgroundvideo: {
    height: 650,
    width: "100%",
  },
});

export default Firstscreen;
