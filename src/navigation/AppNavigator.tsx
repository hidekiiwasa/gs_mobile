import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListaDeRotasPrincipais } from '../types/types'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screen/HomeScreen'; 
import TelaDetalhesEvento from '../screen/EventoSobreScreen';
import TelaCriarEvento from '../screen/CriarEventoScreen';
import TelaRecomendacoes from '../screen/RecomendacoesScreen';

const Stack = createNativeStackNavigator<ListaDeRotasPrincipais>();
const Tabs = createMaterialTopTabNavigator();

const NavegadorDeAbas = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let nomeIcone = '';

          if (route.name === 'Inicio') {
            nomeIcone = 'home';
          } else if (route.name === 'CriarEvento') {
            nomeIcone = 'add';
          } else if (route.name === 'Recomendacoes') {
            nomeIcone = 'recommend';
          }

          return <Icon name={nomeIcone} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#B0BEC5',
        tabBarStyle: {
          backgroundColor: '#2E86AB',
          borderTopWidth: 0,
          height: 100,
          paddingTop: 10
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
        headerShown: false,
        tabBarShowIcon: true,
      })}
    >
      <Tabs.Screen
        name="Inicio"
        component={Home}
        options={{ title: 'Início' }}
      />
      <Tabs.Screen
        name="CriarEvento"
        component={TelaCriarEvento}
        options={{ title: 'Registrar Evento' }}
      />
      <Tabs.Screen
        name="Recomendacoes"
        component={TelaRecomendacoes}
        options={{ title: 'Recomendações' }}
      />
    </Tabs.Navigator>
  );
}

const NavegadorApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NavegadorDeAbas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetalhesEvento"
          component={TelaDetalhesEvento}
          options={{ title: 'Detalhes do Evento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavegadorApp;