import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { EventoProvider } from './src/context/EventoContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <EventoProvider>
        <AppNavigator />
      </EventoProvider>
    </SafeAreaProvider>
  );
} 