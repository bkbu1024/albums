/* import { AppRegistry } from 'react-native'
import App from './App';

AppRegistry.registerComponent('albums', () => App); */

// Import a library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a COmponent
const App = () => (
    <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);