import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ListaDeRotasPrincipais, Evento } from '../types/types';
import { useEventoContext } from '../context/EventoContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RotaDetalhesEvento = RouteProp<ListaDeRotasPrincipais, 'DetalhesEvento'>;
type NavegacaoDetalhesEvento = NativeStackNavigationProp<ListaDeRotasPrincipais, 'DetalhesEvento'>;

const TelaDetalhesEvento = () => {
  const [evento, setEvento] = useState<Evento | null>(null);
  const rota = useRoute<RotaDetalhesEvento>();
  const navegacao = useNavigation<NavegacaoDetalhesEvento>();
  const { eventos, removerEvento } = useEventoContext();

  const aoExcluir = async () => {
    try {
      await removerEvento(rota.params.idEvento);
      navegacao.goBack();
    } catch (erro) {
      console.error('Erro ao excluir evento:', erro);
    }
  }

  useEffect(() => {
    const encontrado = eventos.find(e => e.id === rota.params.idEvento);
    if (encontrado) {
      setEvento(encontrado);
    }
  }, [eventos, rota.params.idEvento]);

  if (!evento) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.conteudo}>
        <View style={styles.sessao}>
          <View style={styles.tituloSessaoRow}>
            <Icon name="place" size={20} color="#2E86AB" />
            <Text style={styles.tituloSessao}> Local</Text>
          </View>
          <Text style={styles.textoSessao}>{evento.local}</Text>
        </View>

        <View style={styles.sessao}>
          <View style={styles.tituloSessaoRow}>
            <Icon name="event" size={20} color="#2E86AB" />
            <Text style={styles.tituloSessao}> Data do Evento</Text>
          </View>
          <Text style={styles.textoSessao}>{new Date(evento.data).toLocaleDateString('pt-BR')}</Text>
        </View>

        <View style={styles.sessao}>
          <View style={styles.tituloSessaoRow}>
            <Icon name="access-time" size={20} color="#2E86AB" />
            <Text style={styles.tituloSessao}> Duração</Text>
          </View>
          <Text style={styles.textoSessao}>{evento.duracao}</Text>
        </View>

        <View style={styles.sessao}>
          <View style={styles.tituloSessaoRow}>
            <Icon name="report-problem" size={20} color="#2E86AB" />
            <Text style={styles.tituloSessao}> Prejuízos</Text>
          </View>
          <Text style={styles.textoSessao}>{evento.danos}</Text>
        </View>

        <View style={styles.rodape}>
          <TouchableOpacity style={styles.botaoExcluir} onPress={aoExcluir}>
            <Icon name="delete" size={20} color="#fff" />
            <Text style={styles.textoBotaoExcluir}>Excluir Evento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  conteudo: {
    padding: 16,
  },
  sessao: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 3,
    padding: 16,
    marginBottom: 16,
  },
  tituloSessaoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tituloSessao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  textoSessao: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    fontWeight: '500'
  },
  rodape: {
    alignItems: 'flex-end',
  },
  botaoExcluir: {
    backgroundColor: '#ff4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  textoBotaoExcluir: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default TelaDetalhesEvento;