import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ListaDeRotasPrincipais } from '../types/types';
import { useEventoContext } from '../context/EventoContext';
import CartaoEvento from '../components/EventoCard';

type NavegacaoTelaInicial = NativeStackNavigationProp<ListaDeRotasPrincipais>;

const TelaInicial = () => {
  const { eventos } = useEventoContext();
  const navegacao = useNavigation<NavegacaoTelaInicial>();

  const aoPressionarEvento = (idEvento: number) => {
    navegacao.navigate('DetalhesEvento', { idEvento });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        renderItem={({ item }) => (
          <CartaoEvento
            evento={item}
            onPress={() => aoPressionarEvento(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listaContainer}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>
            Nenhum evento cadastrado...
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 20
  },
  listaContainer: {
    padding: 16,
  },
  textoVazio: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 32,
  },
});

export default TelaInicial;