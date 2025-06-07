import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Evento } from '../types/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EventoCardProps {
  evento: Evento;
  onPress: () => void;
}

const EventoCard = ({ evento, onPress }: EventoCardProps) => {
  const dataFormatada = new Date(evento.data).toLocaleDateString('pt-BR');

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.header}>
        <Icon name="place" size={18} color="white" /> {evento.local}  <Icon name="event" size={16} color="white" /> {dataFormatada}
      </Text>
      <Text style={styles.descricao}>
        <Icon name="report-problem" size={16} color="#fff" /> {evento.danos}
      </Text>
      <Text style={styles.duracao}>
        <Icon name="access-time" size={16} color="#3fd166" /> Duração: {evento.duracao}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2E86AB',
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  duracao: {
    fontSize: 14,
    color: '#3fd166',
    fontWeight: 'bold', 
  },
});

export default EventoCard;