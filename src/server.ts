import "dotenv/config"
import express from "express"
<<<<<<< HEAD
import clienteRoutes from "./routes/cliente.routes.js"
import servicoRoutes from "./routes/servico.routes.js"

import cors from 'cors';

const app = express()
app.use(express.json())
app.use(clienteRoutes)
app.use(servicoRoutes)

app.use(cors({
  origin: 'http://localhost:5500', // ajuste conforme a origem do front-end
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false
}));
=======
import clientRoutes from "./routes/cliente.routes.js"
import ServicoRoutes from "./routes/servico.routes.js" 


const app = express()
app.use(express.json())
app.use(clientRoutes)
app.use(ServicoRoutes)
>>>>>>> 4358e27583d316fbb764e6e35bfd101aa054708b

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`)
  console.log(`Front rodando em http://localhost:5500/index.html`)
})