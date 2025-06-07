import React, { createContext, useContext, useState, useEffect } from 'react';
import { Evento } from '../types/types';
import { obterEventos, criarEvento, excluirEvento } from '../mock/eventoMock';

interface EventoContextDados {
  eventos: Evento[];
  adicionarEvento: (evento: Evento) => Promise<void>;
  removerEvento: (idEvento: number) => Promise<void>;
  atualizarEventos: () => Promise<void>;
}

const EventoContext = createContext<EventoContextDados>({} as EventoContextDados);

export const EventoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  const atualizarEventos = async () => {
    const eventosCarregados = await obterEventos();
    setEventos(eventosCarregados);
  }

  const adicionarEvento = async (evento: Evento) => {
    await criarEvento(evento);
    await atualizarEventos();
  }

  const removerEvento = async (idEvento: number) => {
    await excluirEvento(idEvento);
    await atualizarEventos();
  }

  useEffect(() => {
    atualizarEventos();
  }, []);

  return (
    <EventoContext.Provider value={{ eventos, adicionarEvento, removerEvento, atualizarEventos }}>
      {children}
    </EventoContext.Provider>
  );
}

export const useEventoContext = () => {
  const contexto = useContext(EventoContext);
  if (!contexto) {
    throw new Error('useEventoContext deve ser usado dentro de um EventoProvider');
  }
  return contexto;
}