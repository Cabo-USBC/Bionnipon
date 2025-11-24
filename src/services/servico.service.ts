import { estoqueRepository } from "../repositories/estoque.repository.js";

export class EstoqueService {
  listar() {
    return estoqueRepository.listar();
  }

  atualizar(qtd: number) {
    return estoqueRepository.atualizar(qtd);
  }
}