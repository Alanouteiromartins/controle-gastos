export interface Transacao {
    _id?: string;
    data: Date;
    descricao: string;
    categoria: string;
    tipo: string[];
    valor: number;
    observacao?: string;
}
