import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>The Finder</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
      <Image source ={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300", 
      }}
        /> 
       </TouchableHighlight>
       <Button
       color="orange"
       title="Iniciar sesión"
       onPress={() => 
        Alert.alert("Iniciar Sesión"," Username:", [
         {text: "Username:", onPress: () => console.log("Username")},
         {text: "Password:", onPress: () => console.log("Password")},
       ])
      }
       
       /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
