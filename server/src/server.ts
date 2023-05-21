import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRouter } from './routes/memories'

// Criando API - servidor http

const app = fastify()

app.register(cors, {
  origin: true, // todas URLs de front-end poderão acessar nosso back-end, depois deve-se colocar as exatas URLs quando estiver em produção
})
app.register(memoriesRouter)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })