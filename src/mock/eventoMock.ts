import AsyncStorage from '@react-native-async-storage/async-storage';
import { Evento } from '../types/types';

const chave = '@eventos';

export const criarEvento = async (novoEvento: Evento): Promise<void> => {
  try {
    const eventosAtuais = await obterEventos();
    const eventosAtualizados = [...eventosAtuais, novoEvento];
    await AsyncStorage.setItem(chave, JSON.stringify(eventosAtualizados));
  } catch (erro) {
    console.error('Erro ao salvar o evento:', erro);
    throw erro;
  }
}

export const obterEventos = async (): Promise<Evento[]> => {
  try {
    const dadosSalvos = await AsyncStorage.getItem(chave);
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  } catch (erro) {
    console.error('Erro ao recuperar os eventos:', erro);
    return [];
  }
}

export const excluirEvento = async (idEvento: number): Promise<void> => {
  try {
    const eventosAtuais = await obterEventos();
    const eventosFiltrados = eventosAtuais.filter(evento => evento.id !== idEvento);
    await AsyncStorage.setItem(chave, JSON.stringify(eventosFiltrados));
  } catch (erro) {
    console.error(`Erro ao excluir o evento com ID ${idEvento}:`, erro);
    throw erro;
  }
}