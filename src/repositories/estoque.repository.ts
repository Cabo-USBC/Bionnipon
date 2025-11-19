import { Estoque } from "../entities/estoque.js";

export interface IEstoqueRepository {
  listar(): Promise<Estoque[]>;
  atualizar(quantidade: number): Promise<Estoque>;
}