//Kenzo
import type express from "express"
import * as ClienteService from "../services/cliente.service.js"

//Criar Cliente
export async function createCliente(req: express.Request, res: express.Response) {
  const { name, email } = req.body
  const cliente = await ClienteService.createCliente({ name, email })
  res.status(201).json(cliente)
}

//Buscar todos clientes
export async function getAllUsers(req: express.Request, res: express.Response) {
  const cliente = await ClienteService.getAllUsers()
  res.status(200).json(cliente)
}


//Buscar cliente por
export async function getUserById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const cliente = await ClienteService.getUserById(Number(id))
  if (cliente) {
    res.status(200).json(cliente)
  } else {
    res.status(404).json({ message: "User not found" })
  }
}