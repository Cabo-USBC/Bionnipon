//Kenzo
import type express from "express"
import * as ClienteService from "../services/cliente.service.js"

//Criar Cliente
export async function createCliente(req: express.Request, res: express.Response) {
  const { nome, telefone, endereco } = req.body
  const cliente = await ClienteService.createCliente({ nome, telefone, endereco })
  res.status(201).json(cliente)
}


//Buscar todos clientes
export async function getAllClientes(req: express.Request, res: express.Response) {
  const cliente = await ClienteService.getAllClientes()
  res.status(200).json(cliente)
}


//Buscar cliente por
export async function getClienteById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const cliente = await ClienteService.getClienteById(Number(id))
  if (cliente) {
    res.status(200).json(cliente)
  } else {
    res.status(404).json({ message: "User not found" })
  }
}

//Update
export async function updateUser(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { nome, telefone, endereco } = req.body
  const user = await ClienteService.updateCliente(Number(id), { nome, telefone, endereco })
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(200).json(user)
}

//Delete
export async function deleteUser(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await ClienteService.deleteCliente(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(204).send()
}