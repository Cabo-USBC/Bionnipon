//Kenzo
import { Router } from "express"
import * as ServicoController from "../controllers/servico.controllers.js"
import { validateDto } from "../middlewares/validate.dto.js"

const router = Router()
router.post("/servico", ServicoController.createServico)
router.get("/servico", ServicoController.getAllServicos)
router.get("/servico/:id", ServicoController.getServicoById)
router.put("/servico/:id", ServicoController.updateServico)
router.delete("/servico/:id", ServicoController.deleteServico)

export default router

