import { Router } from "express"
import * as userController from "../controllers/user.controller.js"
import { validateDto } from "../middlewares/validate.dto.js"
import { CreateUserDto } from "../dtos/create-user.dto.js"
import { UpdateUserDto } from "../dtos/update-user.dto.js"

const router = Router()
router.post("/client", validateDto(CreateUserDto), userController.createUser)
router.get("/client", userController.getAllUsers)
router.get("/client/:id", userController.getUserById)
router.put("/client/:id", validateDto(UpdateUserDto), userController.updateUser)
router.delete("/client/:id", userController.deleteUser)


export default router