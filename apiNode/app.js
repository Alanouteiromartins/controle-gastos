import express, { response } from "express";
import mongoose from "mongoose";
import cors from 'cors'

import Transacao from './models/transacao.js'

const app = express();

app.use(cors());
app.use(express.json());

const transacoes = [{
    id: '2',
    data: new Date(),
    descricao: 'Tenis',
    categoria: 'Lazer',
    tipo: ['Despesa', 'Variável'],
    valor: 350
}]

//xGAwL9kpnwky8OOg
//mongodb+srv://alan2:<db_password>@cluster0.7jtyyyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.get("/transacoes", async (req, res) => {
    try {
      // Buscar todas as transações no banco de dados
      const transacoes = await Transacao.find();
      
      // Retornar as transações encontradas
      return res.json(transacoes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar transações" });
    }
  }); 

app.post("/transacoes", async(req, res)=>{
    const transacao = req.body;

    const novaTransacao = await Transacao.create(transacao);

    return res.json(novaTransacao);
});

app.delete("/transacoes/:id", async (req, res) => {
  try {
    const { id } = req.params;  // Extrai o id do parâmetro da URL
    const resultado = await Transacao.deleteOne({ _id: id });  // Deleta a transação com o id fornecido

    if (resultado.deletedCount === 0) {
      return res.status(404).json({ message: "Transação não encontrada" });
    }

    return res.status(200).json({ message: "Transação deletada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar transação", error: error.message });
  }
});



mongoose.connect("mongodb+srv://alan2:xGAwL9kpnwky8OOg@cluster0.7jtyyyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('bando de dados conectado');
})

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
});