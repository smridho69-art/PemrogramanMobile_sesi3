/**
 
Sample React Native App
https://github.com/facebook/react-native*
@format*/

import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Aplikasi /}
      <View style={styles.header}>
        <Text style={styles.headerText}>Portal Kampus - Fabric WebView</Text>
      </View>

      {/ Komponen WebView Fabric */}
      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/' }}
          style={styles.flexOne}
          javaScriptEnabled={true}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 55,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  webViewContainer: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
});

export default App;