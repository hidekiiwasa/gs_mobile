import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ListaDeRotasPrincipais } from '../types/types';
import FormularioEvento from '../components/EventoForm'; 
import { useEventoContext } from '../context/EventoContext'; 

type NavegacaoCriarEvento = NativeStackNavigationProp<ListaDeRotasPrincipais, 'CriarEvento'>;

const TelaCriarEvento = () => {
  const navegacao = useNavigation<NavegacaoCriarEvento>();
  const { adicionarEvento, eventos } = useEventoContext();

  const [local, setLocal] = useState('');
  const [duracao, setDuracao] = useState('');
  const [danos, setDanos] = useState('');
  const [data, setData] = useState<Date>(new Date());

  const salvarEvento = async () => {
    if (!local || !duracao || !danos) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (!duracaoValida(duracao)) {
      Alert.alert('Erro', 'Duração inválida. Ex: "2 horas" ou "30 min"');
      return;
    }

    try {
      const novoId = eventos.length > 0 ? Math.max(...eventos.map(e => e.id)) + 1 : 1;
      const novoEvento = {
        id: novoId,
        local,
        duracao,
        danos,
        data,
      };

      await adicionarEvento(novoEvento);

      Alert.alert('Sucesso', 'Evento registrado com sucesso!', [
        {
          text: 'OK',
          onPress: () => navegacao.goBack(),
        },
      ]);
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível salvar o evento. ' + erro);
    }
  }

  const duracaoValida = (texto: string): boolean => {
    const regex = /^\d+\s*(minutos|min|horas|h)$/i;
    return regex.test(texto.trim());
  }

  return (
    <ScrollView style={styles.container}>
      <FormularioEvento
        localizacao={local}
        setLocalizacao={setLocal}
        duracao={duracao}
        setDuracao={setDuracao}
        danos={danos}
        setDanos={setDanos}
        data={data}
        setData={setData}
        onSave={salvarEvento}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
});

export default TelaCriarEvento;
