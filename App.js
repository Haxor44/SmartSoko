import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import {  AuthProvider } from './context/AuthContext';

import AppNav from "./AppNav";



export default function App() {
  
  return (
    <AuthProvider>
      <AppNav/>
      
    </AuthProvider>
     
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
