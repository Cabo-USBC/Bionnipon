import { prisma } from "../prisma/client.js";
import { Cliente } from "../entities/cliente.js";

export const clienteRepository = {
  criar(data: Cliente) {
    return prisma.cliente.create({ data });
  },

  listar() {
    return prisma.cliente.findMany();
  },

  buscar(id: number) {
    return prisma.cliente.findUnique({
      where: { id }
    });
  },

  atualizar(id: number, data: Cliente) {
    return prisma.cliente.update({
      where: { id },
      data
    });
  },

  remover(id: number) {
    return prisma.cliente.delete({
      where: { id }
    });
  }
};