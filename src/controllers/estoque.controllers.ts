 import type express from "express"
 import * as estoqueService from "../services/cliente.service.js"
import estoque from "../entities/estoque.js"
 
 //Criar estoque
 export async function createEstoque(req: express.Request, res: express.Response) {
   const { nome, telefone, endereco } = req.body
   const estoque = await estoqueService.createEstoque({ ? })
   res.status(201).json(estoque)
 }
 
 
 //Buscar todos estoque
 export async function getAllEstoque(req: express.Request, res: express.Response) {
   const estoque = await estoqueServiceService.getAllEstoque()
   res.status(200).json(estoque)
 }
 
 
 //Buscar estoque por
 export async function getEstoqueeById(req: express.Request, res: express.Response) {
   const { id } = req.params
   const estoque = await estoqueServiceService.getEstoqueById(Number(id))
   if (estoque) {
     res.status(200).json(estoque)
   } else {
     res.status(404).json({ message: "User not found" })
   }
 }
 
 //Update
 export async function updateEstoque(req: express.Request, res: express.Response) {
   const { id } = req.params
   const {nome, telefone, endereco } = req.body
   const estoque= await estoqueService.updateEstoque(Number(id), {nome, telefone, endereco  })
   if (!user) {
     return res.status(404).json({ message: "Estoque not found" })
   }
 
   return res.status(200).json(user)
 }
 
 //Delete
 export async function deleteEstoque(req: express.Request, res: express.Response) {
   const { id } = req.params
   const result = await estoqueService.deleteEstoque(Number(id))
   if (result === null) {
     return res.status(404).json({ message: "Estoque not found" })
   }
 
   return res.status(204).send()
 }