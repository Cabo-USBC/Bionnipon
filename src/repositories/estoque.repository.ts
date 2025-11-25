import estoque from "../entities/estoque.js"

export async function create(data: {
  item: string
  quantidade: number
}) {
  return estoque.create({ data })
}

export async function findAll() {
  return estoque.findMany()
}

export async function findById(id: number) {
  return estoque.findUnique({
    where: { id }
  })
}

export async function update(id: number, data: {
  item?: string
  quantidade?: number
}) {
  return estoque.update({
    where: { id },
    data
  })
}

export async function addQuantity(id: number, quantidade: number) {
  return estoque.update({
    where: { id },
    data: {
      quantidade: {
        increment: quantidade
      }
    }
  })
}

export async function subtractQuantity(id: number, quantidade: number) {
  return estoque.update({
    where: { id },
    data: {
      quantidade: {
        decrement: quantidade
      }
    }
  })
}