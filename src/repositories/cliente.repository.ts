import cliente from "../entities/cliente.js"

export async function create(data: { name: string; email: string }) {
  return cliente.create({data})
}

export async function findAll() {
  return cliente.findMany()
}

export async function findById(id: number) {
  return cliente.findUnique({ where: { id } })
}

export async function update(id: number, data: { name?: string; email?: string }) {
  return cliente.update({ where: { id }, data })
}

export async function remove(id: number) {
  return cliente.delete({ where: { id } })
}