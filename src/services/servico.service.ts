import { servicoRepository } from "../repositories/servico.repository.js";

export class ServicoService {
  criar(data : any) {
    return servicoRepository.criar(data);
  }

  listar() {
    return servicoRepository.listar();
  }

  buscar(id : string) {
    return servicoRepository.buscar(Number(id));
  }
}