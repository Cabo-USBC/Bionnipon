import { clienteRepository } from "../repositories/cliente.repository.js";
import { Cliente } from "../entities/cliente.js";

export class ClienteService {
  criar(data: Cliente) {
    return clienteRepository.criar(data);
  }

  listar() {
    return clienteRepository.listar();
  }

  buscar(id: number) {
    return clienteRepository.buscar(id); 
  }

  atualizar(id: number, data: Cliente) {
    return clienteRepository.atualizar(id, data);
  }

  remover(id: number) {
    return clienteRepository.remover(id);
  }
}