//Kenzo
import type express from "express"
import * as clienteService from "../services/cliente.service.js"

//Criar Cliente
export async function createCliente(req: express.Request, res: express.Response) {
  const { nome, telefone, endereco } = req.body
<<<<<<< HEAD
  const cliente = await clienteService.createCliente({ nome, telefone, endereco })
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
=======
  const cliente = await ClienteService.createCliente({ nome, telefone, endereco })
>>>>>>> 4358e27583d316fbb764e6e35bfd101aa054708b
  res.status(201).json(cliente)
}


//Buscar todos clientes
export async function getAllClientes(req: express.Request, res: express.Response) {
  const cliente = await clienteService.getAllClientes()
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.status(200).json(cliente)
}


//Buscar cliente por
export async function getClienteById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const cliente = await clienteService.getClienteById(Number(id))
  if (cliente) {
    res.status(200).json(cliente)
  } else {
    res.status(404).json({ message: "User not found" })
  }
}

//Update
export async function updateUser(req: express.Request, res: express.Response) {
  const { id } = req.params
<<<<<<< HEAD
  const {nome, telefone, endereco } = req.body
  const user = await clienteService.updateCliente(Number(id), {nome, telefone, endereco  })
=======
  const { nome, telefone, endereco } = req.body
  const user = await ClienteService.updateCliente(Number(id), { nome, telefone, endereco })
>>>>>>> 4358e27583d316fbb764e6e35bfd101aa054708b
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(200).json(user)
}

//Delete
export async function deleteUser(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await clienteService.deleteCliente(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(204).send()
}