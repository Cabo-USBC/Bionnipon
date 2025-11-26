//Kenzo
import { Router } from "express"
import * as ClienteController from "../controllers/cliente.controllers.js"
import { validateDto } from "../middlewares/validate.dto.js"

const router = Router()
router.post("/client", ClienteController.createCliente)
router.get("/client", ClienteController.getAllClientes)
router.get("/client/:id", ClienteController.getClienteById)
router.put("/client/:id", ClienteController.updateUser)
router.delete("/client/:id", ClienteController.deleteUser)

export default router

