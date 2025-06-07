import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EventoFormProps {
  localizacao: string;
  setLocalizacao: (texto: string) => void;
  duracao: string;
  setDuracao: (texto: string) => void;
  danos: string;
  setDanos: (texto: string) => void;
  data: Date;
  setData: (data: Date) => void;
  onSave: () => void;
}

const EventoForm = ({
  localizacao,
  setLocalizacao,
  duracao,
  setDuracao,
  danos,
  setDanos,
  data,
  setData,
  onSave,
}: EventoFormProps) => {

  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.content}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Localização</Text>
        <View style={styles.inputWithIcon}>
          <Icon name="place" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={localizacao}
            onChangeText={setLocalizacao}
            placeholder="Ex: Viaduto do Cha, 15 - Centro - São Paulo"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Data</Text>
        <View style={styles.inputWithIcon}>
          <Icon name="event" size={24} color="#888" style={styles.icon} />
          <TouchableOpacity style={{flex: 1}} onPress={() => setShowPicker(true)}>
            <TextInput
              style={styles.input}
              value={data.toLocaleDateString('pt-BR')}
              editable={false}
              placeholder="Ex: 01/01/2025"
              placeholderTextColor="#999"
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
        {showPicker && (
          <DateTimePicker
            mode="date"
            value={data}
            display="default"
            onChange={(evento, dataSelecionada) => {
              setShowPicker(false);
              if (dataSelecionada) setData(dataSelecionada);
            }}
          />
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Duração</Text>
        <View style={styles.inputWithIcon}>
          <Icon name="access-time" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={duracao}
            onChangeText={setDuracao}
            placeholder="Ex: 1h, 30 min, 2 horas, 10 minutos..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Danos</Text>
        <View style={styles.inputWithIcon}>
          <Icon name="report-problem" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={[styles.input, styles.textArea]}
            value={danos}
            onChangeText={setDanos}
            placeholder="Descreva os danos causados pelo evento"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
      </View>

      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1F1F1F'
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    marginBottom: 0,
  },
  icon: {
    marginLeft: 8,
    marginRight: 4,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 8,
    fontSize: 16,
    borderWidth: 0,
    color: '#222',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  saveButtonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  saveButton: {
    backgroundColor: '#388E3C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    width: 150,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventoForm;