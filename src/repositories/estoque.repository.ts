import { prisma } from "../prisma/client.js";

export const estoqueRepository = {
  listar() {
    return prisma.estoque.findMany();
  },

  atualizar(quantidade : number) {
    return prisma.estoque.update({
      where: { id: 1 }, // estoque só tem 1 registro
      data: { quantidade }
    });
  }
};