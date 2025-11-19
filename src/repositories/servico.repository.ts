import { Servico } from "../entities/servico.js";

export interface IServicoRepository {
  criar(data: Servico): Promise<Servico>;
  listar(): Promise<Servico[]>;
  buscar(id: number): Promise<Servico | null>;
}
