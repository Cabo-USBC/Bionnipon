import "dotenv/config"
import express from "express"
import clientRoutes from "./routes/cliente.routes.js"


const app = express()
app.use(express.json())
app.use(clientRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`)
})