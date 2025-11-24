import { prisma } from "../prisma/client.js";
import { Servico } from "../entities/servico.js";

export const servicoRepository = {
  criar(data: Servico) {
    return prisma.servico.create({
      data
    });
  },

  listar() {
    return prisma.servico.findMany();
  },

  buscar(id: number) {
    return prisma.servico.findUnique({
      where: { id }
    });
  }
};