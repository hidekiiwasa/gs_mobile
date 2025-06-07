import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RecomendacaoSection from '../components/RecomendacaoSection';

const recomendacoes = [
  {
    title: 'Medidas Preventivas Gerais',
    whatToDo: [
      {
        label: 'Manutenção elétrica:',
        how: ['Realize manutenção periódica na instalação elétrica da residência ou empresa', 'Verifique a fiação, disjuntores e aterramento, evitando sobrecargas.']
      },
      {
        label: 'Evite sobrecarga:',
        how: ['Não ligue muitos aparelhos na mesma tomada.', 'Use filtros de linha e dispositivos de proteção contra surtos.']
      },
      {
        label: 'Acompanhe previsões',
        how: ['Fique atento a alertas meteorológicos e comunicados da concessionária de energia.', 'Instale aplicativos oficiais para receber notificações sobre manutenção programada ou riscos de apagões.']
      }
    ],
  },
  {
    title: 'Ações Durante a Falta de Energia:',
    whatToDo: [
      {
        label: 'Desligue aparelhos eletrônicos para evitar danos quando a energia voltar.'
      },
      {
        label: 'Mantenha geladeiras e freezers fechados para conservar alimentos.'
      },
      {
        label: 'Evite usar elevadores.'
      },
      {
        label: 'Mantenha portas e janelas abertas para ventilação, se estiver calor.'
      }
    ]
  }
];

const RecomendacoesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>
          Como se prevenir
        </Text>

        {recomendacoes.map((section, index) => (
          <RecomendacaoSection
            key={index}
            title={section.title}
            whatToDo={section.whatToDo}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 10
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  }
});

export default RecomendacoesScreen; 