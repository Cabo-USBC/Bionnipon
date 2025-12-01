import * as estoqueRepository from "../repositories/estoque.repository.js"

export async function createEstoque(data: { 
  item: string
  quantidade: number
}) {
  return await estoqueRepository.create(data)
}

export async function getAllEstoques() {
  return await estoqueRepository.findAll()
}

export async function getEstoqueById(id: number) {
  return await estoqueRepository.findById(id)
}

export async function updateEstoque(id: number, data: { 
  item?: string
  quantidade?: number
}) {
  const estoque = await estoqueRepository.findById(id)
  if (!estoque) {
    return null
  }

  return await estoqueRepository.update(id, data)
}

export async function deleteEstoque(id: number) {
  const estoque = await estoqueRepository.findById(id)
  if (!estoque) {
    return null
  }
}

export async function addEstoqueQuantity(id: number, quantidade: number) {
  const estoque = await estoqueRepository.findById(id)
  if (!estoque) {
    return null
  }
    return await estoqueRepository.addQuantity(id, quantidade)
}



export async function subtractEstoqueQuantity(id: number, quantidade: number) {
  const estoque = await estoqueRepository.findById(id)
  if (!estoque) {
    return null
  }     
    return await estoqueRepository.subtractQuantity(id, quantidade) 
}