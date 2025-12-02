<<<<<<< HEAD

import type express from "express"
import * as servicoService from "../services/servico.service.js"


export async function createServico(req: express.Request, res: express.Response) {
  try {
    const { tipo, data, prazo, garantia, clienteId } = req.body
    const servico = await servicoService.createServico({
      tipo,
      data,
      prazo,
      garantia,
      clienteId
    })
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return res.status(201).json(servico)
  } catch (err: any) {
    return res.status(400).json({ message: err.message })
  }
}


export async function getAllServicos(req: express.Request, res: express.Response) {
  const servicos = await servicoService.getAllServicos()
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  return res.status(200).json(servicos)
}


export async function getServicoById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const servico = await servicoService.getServicoById(Number(id))

  if (servico) {
    return res.status(200).json(servico)
  } else {
    return res.status(404).json({ message: "Serviço não encontrado" })
  }
}


export async function updateServico(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { tipo, data, prazo, garantia } = req.body

  try {
    const servicoAtualizado = await servicoService.updateServico(Number(id), {
      tipo,
      data,
      prazo,
      garantia
    })

    if (!servicoAtualizado) {
      return res.status(404).json({ message: "Serviço não encontrado" })
    }

    return res.status(200).json(servicoAtualizado)
  } catch (err: any) {
    return res.status(400).json({ message: "erro"})
  }
}


export async function deleteServico(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await servicoService.deleteServico(Number(id))

  if (result === null) {
    return res.status(404).json({message:"Serviço não encontrado"})
  }

  return res.status(204).send()
}
=======
//Kenzo
import type express from "express"
import * as ServicoService from "../services/servico.service.js"

//Criar Servico
export async function createServico(req: express.Request, res: express.Response) {
  const { tipo,data,prazo,garantia,clienteId } = req.body
  const servico = await ServicoService.createServico({ tipo,data,prazo,garantia,clienteId })
  res.status(201).json(servico)
}


//Buscar todos servicos
export async function getAllServicos(req: express.Request, res: express.Response) {
  const servico = await ServicoService.getAllServicos()
  res.status(200).json(servico)
}


//Buscar servico por ID
export async function getServicoById(req: express.Request, res: express.Response) {
  const { id } = req.params
  const servico = await ServicoService.getServicoById(Number(id))
  if (servico) {
    res.status(200).json(servico)
  } else {
    res.status(404).json({ message: "Servico not found" })
  }
}

//Update
export async function updateServico(req: express.Request, res: express.Response) {
  const { id } = req.params
  const { tipo,data,prazo,garantia} = req.body
  const servico = await ServicoService.updateServico(Number(id), { tipo,data,prazo,garantia})
  if (!servico) {
    return res.status(404).json({ message: "servico not found" })
  }

  return res.status(200).json(servico)
}

//Delete
export async function deleteServico(req: express.Request, res: express.Response) {
  const { id } = req.params
  const result = await ServicoService.deleteServico(Number(id))
  if (result === null) {
    return res.status(404).json({ message: "Servico not found" })
  }

  return res.status(204).send()
}
>>>>>>> 4358e27583d316fbb764e6e35bfd101aa054708b
