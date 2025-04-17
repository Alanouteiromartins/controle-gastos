export interface Transacao {
    id?: string;
    data: Date;
    descricao: string;
    categoria: string;
    tipo: string[];
    valor: number;
}
