import React, {useState} from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  );
}
