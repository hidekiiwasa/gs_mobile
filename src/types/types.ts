export interface Evento {
  id: number;
  local: string;
  duracao: string;
  danos: string;
  data: Date;
}

export type ListaDeRotasPrincipais = {
  Home: undefined;
  DetalhesEvento: { idEvento: number };
  CriarEvento: undefined;
  Recomendacoes: undefined;
}