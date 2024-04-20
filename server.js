import {fastify} from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import {DatabasePostgres} from './database-postgres.js'

const server =  fastify()
const database =new DatabasePostgres()

server.get('/', () =>{
    
})


server.post('/videos', async (request,reply) =>{//POST http://localhost:3333/videos

    const {title,description,duration}= request.body

    await database.create({
        title: title,
        description: description,
        duration:duration,
    })

    return reply.status(201).send()  //Para retornar que algo foi criado
})


server.get('/videos', async (request) =>{
    //GET http://localhost:3333/videos
    const search =request.query.search
    const videos =await database.list(search)
    return videos
})


server.put('/videos/:id', (request,reply) =>{ 
    //PUT http://localhost:3333/videos/3
   const videoId = request.params.id

   const {title,description,duration}= request.body
   database.update(videoId,{
    title:title,
    description:description,
    duration:duration,
   })

   return reply.status(204).send()
})



server.delete('/videos/:id', (request, reply) =>{ 
    //PUT http://localhost:3333/videos/3
    const videoId = request.params.id
    database.delete(videoId)
    return reply.status(204).send()
})

server.listen({port: 3333}) //localhost