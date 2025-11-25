//Kenzo
import { Router } from "express"
import * as ClienteController from "../controllers/cliente.controllers.js"
import { validateDto } from "../middlewares/validate.dto.js"
import { CreateUserDto } from "../dtos/create-user.dto.js"
import { UpdateUserDto } from "../dtos/update-user.dtos.js"

const router = Router()
router.post("/client", validateDto(CreateUserDto), ClienteController.createCliente)
router.get("/client", ClienteController.getAllClientes)
router.get("/client/:id", ClienteController.getClienteById)
router.put("/client/:id", validateDto(UpdateUserDto), ClienteController.updateUser)
router.delete("/client/:id", ClienteController.deleteUser)

export default router

