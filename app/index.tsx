// App.tsx
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import TopBar from './mycomponents/topbar'; // adjust the path if needed



const App = () => {
  return (
      <>
      <TopBar />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to React Native!</Text>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
  },
});
