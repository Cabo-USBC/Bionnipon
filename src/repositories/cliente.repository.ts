import { Cliente } from "../entities/cliente.js";
export interface IClienteRepository {
  criar(data: Cliente): Promise<Cliente>;
  listar(): Promise<Cliente[]>;
  buscar(id: number): Promise<Cliente | null>;
  atualizar(id: number, data: Cliente): Promise<Cliente>;
  remover(id: number): Promise<void>;
}
