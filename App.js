import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene } from 'react-native-router-flux';

import Home from './src/components/Home';
import Chat from './src/components/Chat';
export default function App() {
  return (
    <Router>
      <Scene key='root'>
        <Home title='Home'/>
        <Chat title='Chat'/>
      </Scene>
    </Router>
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
