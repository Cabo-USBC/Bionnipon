import * as userRepository from "../repositories/cliente.repository.js"

export async function createCliente(data: { name: string; email: string }) {
  return await userRepository.create(data)
}

export async function getAllClientes() {
  return await userRepository.findAll()
}

export async function getClienteById(id: number) {
  return await userRepository.findById(id)
}

export async function updateCliente(id: number, data: { name?: string; email?: string }) {
  const user = await userRepository.findById(id)
  if (!user) {
    return null
  }
  return await userRepository.update(id, data)
}

export async function deleteCliente(id: number) {
  const user = await userRepository.findById(id)
  if (!user) {
    return null
  }
  return await userRepository.remove(id)
}