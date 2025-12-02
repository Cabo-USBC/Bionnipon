<<<<<<< HEAD
import { Router } from "express"
import * as servicoController from "../controllers/servico.controllers.js"
import { validateDto } from "../middlewares/validate.dto.js"

const router = Router()
router.post("/servico", servicoController.createServico)
router.get("/servico", servicoController.getAllServicos)
router.get("/servico/:id", servicoController.getServicoById)
router.put("/servico/:id", servicoController.updateServico)
router.delete("/servico/:id", servicoController.deleteServico)
=======
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
>>>>>>> 4358e27583d316fbb764e6e35bfd101aa054708b

export default router

