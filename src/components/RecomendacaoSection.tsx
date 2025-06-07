import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WhatToDoItem {
  label: string;
  how?: string[];
}

interface RecomendacaoSectionProps {
  title: string;
  whatToDo: WhatToDoItem[];
}

const RecomendacaoSection = ({ title, whatToDo }: RecomendacaoSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {whatToDo.map((item, index) => (
        <View key={index}>
          <Text style={styles.label}>✅ {item.label}</Text>
          {item.how && item.how.map((step, i) => (
            <View key={i} style={styles.stepContainer}>
              <Text style={styles.stepIndex}>{i + 1}.</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D32F2F',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 12,
    textAlign: 'center',
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginBottom: 4,
    fontWeight: 'bold'
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingRight: 16,
    paddingLeft: 20,
  },
  stepIndex: {
    fontSize: 18,
    color: 'white',
    marginRight: 4,
  },
  stepText: {
    fontSize: 18,
    color: 'white',
    flex: 1,
  },
});

export default RecomendacaoSection;
