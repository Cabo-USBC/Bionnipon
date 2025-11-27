import cliente from "../entities/cliente.js"

export async function create(data: {
  nome: string
  telefone: string
  endereco: string
}) {
  return cliente.create({ data })
}

export async function findAll() {
  return cliente.findMany({
    include: { servicos: true }
  })
}

export async function findById(id: number) {
  return cliente.findUnique({
    where: { id },
    include: { servicos: true }
  })
}

export async function update(id: number, data: any) {
  return cliente.update({
    where: { id },
    data
  })
}

export async function remove(id: number) {
  return cliente.delete({
    where: { id }
  })
}